const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// if we don't create this config file, we will have to write it again & again when call axios.
// we are importing the .env file here directly by using procsss.env.
// process is an object where whole folder structure is stored in a javascript project.
// we don't have to import or export anything.
// .env is not visible to a hacker.
// DOM is not designed to handle .env file, it is designed to handle HTML files only.
// so, it is very safe, we need to practice more with it.

if (!API_BASE_URL) {
  throw new Error("API_URL is missing!");
}
export { API_BASE_URL };
// here exporting is done by destructuring because it is actually coming from other file, ie: .env.
// (importing by using process.env)
// so we do not need to use default keyword also here.
