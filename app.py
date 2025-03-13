from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np


app = Flask(__name__)
CORS(app)  


model = joblib.load("house_price_model.pkl")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        
        features = np.array([
            data['bedrooms'], data['bathrooms'], data['sqft_living'], 
            data['sqft_lot'], data['floors'], data['waterfront'], 
            data['view'], data['condition'], data['grade'], 
            data['sqft_above'], data['sqft_basement'], data['yr_built'], 
            data['yr_renovated'], data['zipcode'], data['lat'], 
            data['long'], data['sqft_living15'], data['sqft_lot15']
        ]).reshape(1, -1)

        
        prediction = model.predict(features)[0]

        return jsonify({'prediction': round(prediction, 2)})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
