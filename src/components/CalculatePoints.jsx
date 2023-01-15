import React, { useState } from "react";
import { apiData } from "../services/mockApi";
import { formatData,getTotalPointsForUser,getMonthFromDate } from "../utils/utils";
import "./CalculatePoints.css"

export const CalculatePoints = () => {
  const [user, setUser] = useState("");
  const [pointsData, setPointsData] = useState([]);
  const [totalPoints, setTotalPoints] = useState();

  const handleClick = async () => {
    const data = await apiData(user);
    const formattedData = formatData(data)
    const totalPoints = getTotalPointsForUser(formattedData)
    setTotalPoints(totalPoints);
    setPointsData(formattedData);
  };

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Enter User Name"
        value={user}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Get Points</button>

      {pointsData.length > 0  ? <>
        {pointsData.map((data) => (
        <p key={data.id}>{`Points earned in Month of ${getMonthFromDate(data.date)} is ${data.totalPoints}`}</p>
      ))}
      <p>{`Total Points earned in the last 3 months is ${totalPoints}` }</p></> : null  }  
    </div>
  );
};
