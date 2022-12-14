import React from "react";
import Styles from "./box.module.css";
import Text from "../text";

const ProductBox = ({ item = {}, handleCheck = () => { }, isChecked }) => {

  const specs = {
    "furniture": "Dimensions: " + parseFloat(item?.furniture_height_cm) + " x " + parseFloat(item?.furniture_width_cm) + " x " + parseFloat(item?.furniture_length_cm),
    "book": "Size: " + parseFloat(item?.book_weight_kg) + " MB",
    "dvd": "Weight: " + parseFloat(item?.dvd_size_mb) + " Kg"
  }

  return (
    <div className={`${Styles.mainBox} p-3 my-2 h-100`}>
      <div className="row justify-content-start">
        <input
          className={`${Styles.checkbox} delete-checkbox`}
          type="checkbox"
          onChange={() => handleCheck(item?.id)}
          checked={isChecked(item?.id)}
        />
      </div>
      <div className="row text-center">
        <Text noWrap={false} className={`${Styles.sku} mt-1`}>{item?.sku}</Text>
        <Text noWrap={false} className={`${Styles.name} mt-1`}>{item?.name}</Text>
        <Text noWrap={false} className={`${Styles.price} mt-1`}>{parseFloat(item?.price).toFixed(2)} $</Text>
        <Text noWrap={false} className={`${Styles.specs} mt-1`}>{specs[item?.type]}</Text>
      </div>
    </div>
  );
};

export default ProductBox;
