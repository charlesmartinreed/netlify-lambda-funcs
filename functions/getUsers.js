// https://api.github.com/users?client_id=d3537cbd5d58f03bb88a&client_secret=790f16aad8de5b2087949e4743feeea8e92540f0
const axios = require("axios");

exports.handler = function(event, content, callback) {
  const API_URL = "https://api.github.com/users";
  const API_CLIENT_ID = "d3537cbd5d58f03bb88a";
  const API_CLIENT_SECRET = "790f16aad8de5b2087949e4743feeea8e92540f0";

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

  // send response to user
  const send = body => {
    console.log("sendinggggggggggggggggg");
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  };

  // Perform API call to Github
  const getUsers = async () => {
    try {
      const res = await axios.get(URL);
      send(res.data);
    } catch (err) {
      send(err);
    }
  };

  // Only GET requests are valid
  if (event.httpMethod == "GET") {
    getUsers();
  }
};
