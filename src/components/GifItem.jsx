import React from "react";
import "./stylos.css";
export const GifItem = ({ title, url, id }) => {
  return (
    <div className="cardStyle" style={{ textAlign: "center" }}>
      <img src={url} alt={title} className="imageStyle" />
      <p
        style={{
          background: "#575757",
          marginLeft: 570,
          marginRight: 570,
          color: "#fff",
          borderRadius: 10,
        }}
      >
        {title}
      </p>
    </div>
  );
};
