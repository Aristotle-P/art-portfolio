import React from 'react';

const divStyle = {
  height: 15,
  width: 15,
  backgroundColor: 'green',
  margin: 40
};
const Footer = () => {
  return (
    <div>
      <div className="socialLinks" style={divStyle} />
      <div className="socialLinks" style={divStyle} />
      <div className="socialLinks" style={divStyle} />
    </div>
  );
};

export default Footer;
