import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
    const style={
        display:"flex",
        alignItems:"center",
        marginRight:"10px"
    }
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'} style={style}>
      <p style={{fontSize:"35px"}}>{value}</p>
      <span style={{fontSize:"16px"}}>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
