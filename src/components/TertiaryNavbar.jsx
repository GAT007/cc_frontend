import React from "react";
import { Link } from "react-router-dom";
import "../styles/TertiaryNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function TertiaryNavbar({ section }) {
  const getNavItems = () => {
    switch (section) {
      case "network":
        return ["Community Partners", "Researchers", "Community Engaged Projects", "Office of Community Engagement"];
      case "resources":
        return ["Guides", "Tools", "Articles"];
      case "about":
        return ["Team", "Mission", "Contact"];
      default:
        return ["Community Partners", "Researchers", "Community Engaged Projects", "Office of Community Engagement"];
    }
  };

  return (
    <nav className="tertiary-navbar">
      <div className="nav-links">
        {getNavItems().map((item, index) => (
          <Link key={index} to={`/${section}/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
        ))}
      </div>
    </nav>
  );
}

export default TertiaryNavbar;
