const fetchAPI = (date) => {
  let result = [];
  let random = () => Math.random();

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

const submitAPI = () => true;

export { fetchAPI, submitAPI };
