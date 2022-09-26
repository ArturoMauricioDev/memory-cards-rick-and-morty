const API_URL = "https://rickandmortyapi.com/api";

let data;
let error;
const getData = async () => {
  const res = await fetch(API_URL);
  res
    .json()
    .then((res) => (data = res))
    .catch((err) => (error = err));

  return data;
};
export { getData };
