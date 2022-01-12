import React from "react";

function Star(props) {
  return (
    <div
      style={{
        width: "14px",
        height: "14px",
        display: "grid",
        placeItems: "center",
        marginRight: "4px",
      }}
    >
      <img
        alt="star"
        src={`${process.env.PUBLIC_URL}/images/icons/star.svg`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
}

export default Star;
