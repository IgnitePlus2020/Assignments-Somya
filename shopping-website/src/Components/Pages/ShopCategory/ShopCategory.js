import React from "react";
import Dropdown from "../../Dropdown/dropdown";
const ShopCategory = () => {
  return (
    <div className="App">
      <h3
        style={{
          color: "black",
          boxShadow: "0px 2px 10px 1px	#D3D3D3",
          align: "center",
          padding: "10px 5px",
        }}
      >
        INVENTORY
      </h3>
      <Dropdown />
    </div>
  );
};
export default ShopCategory;
