export const formatData = (data) => {
  for (const value of data) {
    value.totalPoints = calculateTotalPoints(value.amountSpent);
  }

  const userObj = {};
  const result = data.reduce((r, obj) => {
    const key = obj.name + "-" + obj.date;

    if (!userObj[key]) {
      userObj[key] = Object.assign({}, obj);
      r.push(userObj[key]);
    } else {
      userObj[key].totalPoints += obj.totalPoints;
    }

    return r;
  }, []);

  return result;
};

const calculateTotalPoints = (amountSpent) => {
  let totalPoints = 0;
  if (amountSpent > 50 && amountSpent <= 100) {
    totalPoints = amountSpent;
  } else if (amountSpent > 100) {
    totalPoints = 2 * (amountSpent - 100) + 50;
  }
  return totalPoints;
};

export const getTotalPointsForUser = (formattedData) =>
  formattedData.reduce((acc, obj) => acc + parseInt(obj.totalPoints), 0);

export const getMonthFromDate = (date) =>
  new Date(date).toLocaleString("default", { month: "long" });
