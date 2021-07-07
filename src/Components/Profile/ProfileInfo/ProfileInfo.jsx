import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={classes.profile_info}>
      <img src="https://via.placeholder.com/1200x300" />

      <div> ava + discription </div>
    </div>
  );
};

export default ProfileInfo;
