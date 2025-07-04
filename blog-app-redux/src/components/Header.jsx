import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="Header">
      <h1>Redux Blog App</h1>
      <nav>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/post")}>Add Post</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
