import React from "react";
import "./Header.css";
import Netfliexlogo from "../../assets/Images/Netflixlogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  return (
    <div>
      <div className="Header-outer-container">
        <div className="Header-container">
          <div className="Header-left">
            <ul>
              <li>
                <img src={Netfliexlogo} alt="Netfliex logo" width="100" />
              </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browes by Languages</li>
            </ul>
          </div>
          <div className="Header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
