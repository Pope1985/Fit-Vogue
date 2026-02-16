import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { Link as LInk } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <LInk className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="h-40 sm:h-48 md:h-56 lg:h-64 w-full object-cover hover:scale-110 transition ease-in-out"
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">{currency} {price}</p>
    </LInk>
  );
};

export default ProductItem;
