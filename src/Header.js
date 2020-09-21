import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline';

import './Header.css';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          classname="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon />
        <input placeholder="Search Here" />
      </div>
      <div className="header_right">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
