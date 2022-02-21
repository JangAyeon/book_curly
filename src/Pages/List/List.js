import React from "react";
import { Title, Sortby } from "../../Components/Layout/Title/Title";
import Grid from "../../Components/Layout/Grid/Grid";
import { OrderStandard } from "../../Shared/OrderStandard";
import Category from "../../Components/Layout/Category/Category";

const List = (props) => {
  const { key, value } = props.location.state;
  const { type } = props.match.params;
  console.log("리스트", key, value, type);
  return (
    <div className="List">
      <Title Title={value} />

      <Grid
        id={key}
        orders={OrderStandard}
        type={type}
        header={value}
        query={value}
      />
    </div>
  );
};

export default List;
