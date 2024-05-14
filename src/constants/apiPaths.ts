const API_PATHS = {
  //product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  product: process.env.PRODUCT_API_URL,
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  //import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: process.env.IMPORT_API_URL,
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

export default API_PATHS;
