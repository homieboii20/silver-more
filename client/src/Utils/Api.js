import axios from "axios";
const apiURI =
  process.env.NODE_ENV === "production"
    ? "https://betna.herokuapp.com"
    : "http://localhost:8080";

const _responseParser = (payload) => {
  // Check for 4XX or 5XX responses
  const { data } = payload;
  if (
    data &&
    data.statusCode &&
    (data.statusCode.toString()[0] == 4 || data.statusCode.toString()[0] == 5)
  ) {
    return {
      isError: data.isError,
      error: {
        code: data.statusCode,
        message: data.body.error,
        details: data.body.details,
      },
    };
  }
  return data.body;
};

const get = async (url) => {
  const res = await axios.get(apiURI + url);
  return res.data;
};
const post = async (url, requestBody) => {
  let res;
  try {
    res = await axios.post(apiURI + url, requestBody);
    console.log(res);
    const result = _responseParser(res);
    return result;
  } catch (error) {
    const result = _responseParser(error.response);
    return result;
  }
};
const callAPI = {
  get,
  post,
};
export default callAPI;
