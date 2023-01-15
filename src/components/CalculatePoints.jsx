import React, { useState } from "react";
import { DisplayPoints } from "./DisplayPoints";
import { apiData } from "../services/mockApi";
import { formatData, getTotalPointsForUser } from "../utils/utils";
import "./CalculatePoints.css";

export const CalculatePoints = () => {
  const [user, setUser] = useState("");
  const [loadData, setLoadData] = useState(false);
  const [pointsData, setPointsData] = useState([]);
  const [totalPoints, setTotalPoints] = useState();

  const handleClick = async () => {
    try {
      const data = await apiData(user);
      const formattedData = formatData(data);
      const totalPoints = getTotalPointsForUser(formattedData);
      setTotalPoints(totalPoints);
      setPointsData(formattedData);
      setLoadData(true);
    } catch (err) {}
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
      <button disabled={!user} onClick={handleClick}>
        Get Points
      </button>

      {loadData ? (
        <DisplayPoints points={pointsData} totalPoints={totalPoints} />
      ) : (
        <p>Enter User Name to check points (Bob, Tom, John)</p>
      )}
    </div>
  );
};
