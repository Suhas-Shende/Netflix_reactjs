import React from "react";
function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="no" className="img_info" />
        <div className="card_info">
          <span className="card_categary"></span>
          <h3 className="card_title">{props.sname}</h3>
          <a href={props.link} alt="">
            <button>watch now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
