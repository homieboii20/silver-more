const responseFormatter = (isError = false, data) => {
  let payload;
  if (isError) {
    payload = {
      isError: true,
      statusCode: data.output.payload.statusCode,
      body: {
        error: data.output.payload.error,
        details: data.output.payload.message,
      },
    };
  } else {
    payload = {
      error: false,
      statusCode: 200,
      body: data,
    };
  }
  return payload;
};

export default responseFormatter;
