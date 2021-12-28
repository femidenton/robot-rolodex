import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => (
  <div className="card-list">
    {props.robots.map((robot) => (
      <Card id={robot.id} robot={robot} />
    ))}
  </div>
);
export default CardList;
