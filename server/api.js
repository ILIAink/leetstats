const axios = require("axios");
const fetchData = async (query, variables, endpoint) => {
  try {
    const response = await axios({
      url: endpoint,
      method: "post",
      data: {
        query,
        variables,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

module.exports = { fetchData };
