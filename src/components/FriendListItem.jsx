import { Component } from "react";
import PropTypes from "prop-types";
import "./FriendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <div className="status-container">
        <span className={`status ${isOnline ? "online" : "offline"}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <span className="name">{name}</span>
      </div>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
