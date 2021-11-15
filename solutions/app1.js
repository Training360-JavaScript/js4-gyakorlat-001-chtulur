const converterPromise = (arr) => {
  const newP = new Promise((resolve, reject) => {
    if (arr.every((element) => typeof element === "string")) {
      resolve(arr);
    } else {
      reject(`Error: Not all elements are string type!`);
    }
  });

  return newP.then((arr) => arr.map((element) => element.toUpperCase()));
};

export default converterPromise;
