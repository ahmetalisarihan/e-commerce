import React from "react";
import IProduct from "../../types/productTypes";


const Product: React.FC<IProduct> = ({ product }) => {
  return (
    <div className="w-[400px] p-2 m-2">
      <img className="w-[200px] h-[200px]" src={product?.image} alt="" />
    </div>
  );
};

export default Product;
