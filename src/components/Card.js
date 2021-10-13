/** @format */

import React from "react";
import "./Card.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/house1.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/house2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/Properties"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/house4.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/Properties"
            />
            <CardItem
              src="images/house5.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/Properties"
            />
            <CardItem
              src="images/house6.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/Sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
