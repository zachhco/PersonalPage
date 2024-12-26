import React from 'react';
import Layout from '../../components/Layout/Layout';
import '../../styles/ProjectPage.css';

const CarSafetyDashProject = () => {
  return (
    <Layout>
      <div className="project-page">
        <h1>Car Safety Prediction Dashboard</h1>
        <div className="project-content">
          <p>
          This dashboard predicts the probability of death while driving given a set of user-selected inputs. 
          By adjusting different parameters such as weather conditions, road type, time of day, and other relevant factors,
          users can see how these variables affect their probability of a fatal accident. The predictions are powered by
          a pre-tuned random forest model that has been trained on historical accident data.
          </p>
          
          {/* Car Safety Dashboard App Container */}
          <div className="dashboard-container">
            <iframe
              src="https://car-dash-app.onrender.com"
              title="Car Safety Dashboard"
              width="100%"
              height="1200px"
              frameBorder="0"
              allowFullScreen
              style={{
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#f8f9fa'
              }}
            />
          </div>
        
        </div>
      </div>
    </Layout>
  );
};

export default CarSafetyDashProject;
