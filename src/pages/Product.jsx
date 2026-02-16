import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/Shopcontext";

const Product = () => {
  const { id: productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const foundProduct = products.find(
      (item) => String(item.id) === String(productId),
    );
    if (foundProduct) {
      setProductData(foundProduct);
      const initialImage = Array.isArray(foundProduct.image)
        ? foundProduct.image[0]
        : foundProduct.image;
      setImage(initialImage);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="boorder-t-2 pt-10 transition-opacity- ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex-col-reverse gap-3 sm:flex-row">
          {Array.isArray(productData.image) && (
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                  alt={productData.name || ""}
                />
              ))}
            </div>
          )}
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto"
              src={image}
              alt={productData.name || "Product image"}
            />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {productData.name}
          </h1>
          <p className="mt-4 text-2xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-4 text-gray-600">{productData.description}</p>
          {productData.sizes && (
            <div className="mt-6">
              <p className="mb-2 font-medium">Select Size</p>
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((sizeOption) => (
                  <button
                    onClick={() => setSize(sizeOption)}
                    key={sizeOption}
                    className={`border border-gray-300 px-4 py-2 text-sm hover:border-gray-800 ${size === sizeOption ? "bg-orange-500 text-white" : ""}`}
                  >
                    {sizeOption}
                  </button>
                ))}
              </div>
            </div>
          )}
          <button className="mt-6 bg-black text-white px-6 py-3 text-sm hover:bg-gray-800">
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Orignal product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description and review section */}
      <div className="mt-20">
        <div className="flex">
          <p className="border px-5 py-3 text-sm">Description</p>
          <p className="border px-5 py-3 text-sm">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 text py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae commodi corporis voluptate sapiente atque quod fugiat optio cum, culpa nemo. Omnis ipsam, dolorem earum labore impedit molestiae minima id culpa.
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum reprehenderit tempora accusantium unde vero nulla explicabo natus, sequi iure, consequatur aperiam hic eius veniam alias, a distinctio ipsam. Quas.</p>
          </p>
        </div>
      </div>

      {/* display related products */}
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
