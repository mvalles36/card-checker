exports.handler = async (event) => {
    const request = require("request-promise-native");
    
    const options = {
    method: "POST",
    uri: "http://www.drroof.com/ws/retrieve-weather-results",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    Cookie:
        "ARRAffinity=ebe2790d749702022a54ce9bf5ef49208f8970a38b82360408bfec3955380433; ARRAffinitySameSite=ebe2790d749702022a54ce9bf5ef49208f8970a38b82360408bfec3955380433",
    },
    body: "address=" + encodeURIComponent(event.queryStringParameters.address),
    };
    
    try {
        const result = await request(options);
        return {
        statusCode: 200,
        body: result,
        };
    } catch (error) {
        return {
        statusCode: 500,
        body: JSON.stringify({ error: "An error occurred" }),
        };
    }
};

