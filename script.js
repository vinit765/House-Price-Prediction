document.getElementById('prediction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        bedrooms: parseFloat(document.getElementById('bedrooms').value),
        bathrooms: parseFloat(document.getElementById('bathrooms').value),
        sqft_living: parseFloat(document.getElementById('sqft_living').value),
        sqft_lot: parseFloat(document.getElementById('sqft_lot').value),
        floors: parseFloat(document.getElementById('floors').value),
        waterfront: parseInt(document.getElementById('waterfront').value),
        view: parseInt(document.getElementById('view').value),
        condition: parseInt(document.getElementById('condition').value),
        grade: parseInt(document.getElementById('grade').value),
        sqft_above: parseFloat(document.getElementById('sqft_above').value),
        sqft_basement: parseFloat(document.getElementById('sqft_basement').value),
        yr_built: parseInt(document.getElementById('yr_built').value),
        yr_renovated: parseInt(document.getElementById('yr_renovated').value),
        zipcode: parseInt(document.getElementById('zipcode').value),
        lat: parseFloat(document.getElementById('lat').value),
        long: parseFloat(document.getElementById('long').value),
        sqft_living15: parseFloat(document.getElementById('sqft_living15').value),
        sqft_lot15: parseFloat(document.getElementById('sqft_lot15').value),
    };

    fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => document.getElementById('prediction-output').textContent = "$" + data.prediction)
    .catch(error => console.error('Error:', error));
});
