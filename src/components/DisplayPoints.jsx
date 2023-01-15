import React from "react";
import { getMonthFromDate } from "../utils/utils";

export const DisplayPoints = ({ points, totalPoints }) => {
  return (
    <>
      {points.length > 0 ? (
        <>
          {points.map((data) => (
            <p key={data.id}>{`Points earned in the month of ${getMonthFromDate(
              data.date
            )} is ${data.totalPoints}`}</p>
          ))}
          <p>{`Total Points earned in the last 3 months is ${totalPoints}`}</p>
        </>
      ) : (
        <p>No results found</p>
      )}
    </>
  );
};
