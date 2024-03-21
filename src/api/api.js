const fetchData = async (variables, endpoint, route) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(variables),
    };

    const response = await fetch(`${endpoint}${route}`, requestOptions);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getPublicProfile = async (variables, endpoint) => {
  const data = fetchData(variables, endpoint, "/api/v1/profile");
  return data;
};

export const getStats = async (variables, endpoint) => {
  const data = fetchData(variables, endpoint, "/api/v1/profile/stats");
  return data;
};
