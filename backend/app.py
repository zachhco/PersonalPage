from flask import Flask, request, jsonify
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import joblib

app = Flask(__name__)

# Add CORS headers to all responses
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Load the model and data
df = pd.read_csv('data_GEN6.csv')
y = df['FATAL']
X = df.drop(['FATAL', 'INJ_SEV', 'INJ_LEVEL'], axis=1)
X_train, X_valid, y_train, y_valid = train_test_split(X, y, train_size=0.8, test_size=0.2, random_state=0)

# Initialize and train the model
model = RandomForestRegressor(
    n_estimators=476,
    min_samples_split=2,
    bootstrap=True,
    max_depth=50,
    n_jobs=-1,
    min_samples_leaf=1,
    random_state=42
)
model.fit(X_train, y_train)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Preprocess inputs
    inputs = [
        1 if data['alcohol_use'] == 'Yes' else 0,
        int(data['age']),
        1 if data['sex'] == 'Male' else 0,
        int(data['model_year']),
        int(data['height']),
        int(data['weight']),
        int(data['speed_limit']),
        1 if data['rush_hour'] == 'Yes' else 0,
        1 if data['light_condition'] == 'Daylight' else 0,
        1 if data['restraint_use'] == 'Yes' else 0,
        1 if data['drug_use'] == 'Yes' else 0,
        1 if data['cold_weather'] == 'Yes' else 0,
        1 if data['speeding'] == 'Yes' else 0,
        1 if data['license_status'] == 'Valid' else 0,
        1 if data['airbag_deploy'] == 'Yes' else 0,
        1 if data['driver'] == 'Yes' else 0,
        1 if data['front_seat'] == 'Yes' else 0,
        1 if data['collision'] == 'Yes' else 0,
        1 if data['ejection'] == 'Yes' else 0,
        1 if data['large_size'] == 'Yes' else 0
    ]
    
    # Make prediction
    prediction = model.predict([inputs])[0]
    
    return jsonify({'prediction': float(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
