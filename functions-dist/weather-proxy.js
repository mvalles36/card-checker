// weather-proxy.js
const axios = require('axios');

exports.handler = async function(event, context) {
    try {
        const { address } = JSON.parse(event.body);
        
        // Make the API request to drroof.com
        const response = await axios.post('https://www.drroof.com/ws/retrieve-weather-results', { address });
        
        // Return the response data
        return {
        statusCode: 200,
        body: JSON.stringify(response.data)
        };
    } catch (error) {
        console.error(error);
        
        // Return an error response
        return {
        statusCode: 500,
        body: JSON.stringify({ error: 'An error occurred' })
        };
    }
};

