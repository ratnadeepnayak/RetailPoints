import { points } from "../data/data";

export const apiData = (user) => {
  return new Promise((resolve, reject) => {
    if (user) {
      setTimeout(resolve(filterDataByName(points, user)), 1000 * Math.random());
    } else {
      reject("Bad Request");
    }
  });
};

const filterDataByName = (data, user) =>
  data.filter((d) => {
    return d.name === user.toLowerCase().trim();
  });
