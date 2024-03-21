const { profileData } = require("../LCData");
const { fetchData } = require("../api");
require("dotenv").config();

// global
const ENDPOINT = process.env.API_ENDPOINT;

const getPublicProfile = async (req, res, next) => {
  const query = profileData.publicProfile.query;
  const variables = req.body;

  try {
    const data = await fetchData(query, variables, ENDPOINT);
    return res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStats = async (req, res, next) => {
  const query = profileData.stats.query;
  const variables = req.body;

  try {
    const data = await fetchData(query, variables, ENDPOINT);
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};



module.exports = { getPublicProfile, getStats };
