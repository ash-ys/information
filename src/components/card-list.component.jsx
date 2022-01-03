import React from "react";
import Card from "./card.component";

const CardList = ({ datas }) => {
  return (
    <div className="card-list">
      {datas.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};

export default CardList;
