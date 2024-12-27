import React, { useState } from "react";
import './allin.css';

const Windows96 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="windows96-container">
      <div className="title-bar">
        <div className="title">Windows 96</div>
        <div className="control-buttons">
          <button>-</button>
          <button>[ ]</button>
          <button>X</button>
        </div>
      </div>
      <div className="menu-bar">
        <div className="menu-item" onClick={toggleMenu}>
          File
        </div>
        <div className="menu-item">Edit</div>
        <div className="menu-item">View</div>
      </div>
      {menuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">New</div>
          <div className="dropdown-item">Open</div>
          <div className="dropdown-item">Save</div>
          <div className="dropdown-item">Exit</div>
        </div>
      )}
      <div className="content-area">
        <p>This is what Windows 96 looked like.</p>
      </div>
    </div>
  );
};

export default Windows96;
