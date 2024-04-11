import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <footer>
        <p>copyright © {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
