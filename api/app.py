from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

app = Flask(__name__)
CORS(app)

# Load your trained model
model = joblib.load('random_forest_model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Create feature array in the same order as training
    features = [
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
    prediction = float(model.predict([features])[0])
    
    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run()
