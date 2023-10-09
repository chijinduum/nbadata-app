import axios from "axios";

export const fetchTeamData = async () => {
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/teams",
    params: {
      league: "12",
      season: "2022-2023",
    },
    headers: {
      "X-RapidAPI-Key": "5711f47113mshb1384ac780fd2aap11c802jsn6d40963a6c73",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.response;
  } catch (error) {
    console.error(error);
  }
};

export const fetchStatData = async () => {
  const options = {
    method: "GET",
    url: "https://api-basketball.p.rapidapi.com/standings",
    params: {
      league: "12",
      season: "2022-2023",
    },
    headers: {
      "X-RapidAPI-Key": "5711f47113mshb1384ac780fd2aap11c802jsn6d40963a6c73",
      "X-RapidAPI-Host": "api-basketball.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.response[0];
  } catch (error) {
    console.error(error);
  }
};
