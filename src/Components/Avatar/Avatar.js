import React from "react";
import "./Avatar.scss";


const Avatar = ({firstName, lastName, width, height, fontSize, icon, rightGutter, style, color}) => {
  const name = firstName.toUpperCase().slice(0, 1);
  return (
    <div className="user">
        <div className="avatar" style={{width: width, height: height, fontSize: fontSize,backgroundColor: "#ecd3ff", color: "#9f46e4", marginRight: rightGutter ? "5px": "0px", ...style }}>
          {firstName && !icon && name}
          {lastName && !icon && lastName.toUpperCase().slice(0, 1)}
          {icon && <img src={icon} alt={firstName} />}
        </div>
      {/* <p>{userName}</p> */}
    </div>
  );
};

export default Avatar;
