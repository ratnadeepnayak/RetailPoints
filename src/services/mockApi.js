import { points } from "../data/data";

export const apiData = (user) => {
  return new Promise((resolve) => {
    setTimeout(resolve(filterDataByName(points, user)), 1000);
  });
};

const filterDataByName = (data, user) =>
  data.filter((d) => {
    return d.name === user.toLowerCase().trim();
  });
