import React from "react";
import Eitemcard from "./Eitemcard";
import { data } from "../../Ecomerce/data";
const Ehome = () => {
  return (
    <div>
      <div>
        <h1 className="text-danger mt-5 text-center">Ecommerce Page</h1>
        <div>
          <section className=" py-5 container">
            <div className="row justify-content-center">
              {data.prouctData.map((item, index) => {
                return (
                  <Eitemcard
                    image={item.image}
                    title={item.title}
                    des={item.des}
                    description={item.description}
                    price={item.price}
                    category={item.category}
                    item={item}
                    key={index}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Ehome;
