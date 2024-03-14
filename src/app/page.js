"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Layout from "./layout";

const Page = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://groww-intern-assignment.vercel.app/v1/api/order-details"
        );

        if (response.data.products && response.data.products.length > 0) {
          setProducts(response.data.products);
        }
        console.log("Data", response);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function calculateTotal() {
      const totalPrice = products.reduce(
        (acc, prod) => acc + prod.price * prod.quantity,
        0
      );
      setTotal(totalPrice);
    }
    calculateTotal();
  }, [products]);


  function handleNavigatePayment() {
    router.push("/payment");
  };

  return (
    <Layout>
    <div className="h-screen p-8 gap-8 flex">
      <div className="w-3/5">
        <h1 className="p-8 text-3xl font-medium">Checkout</h1>
        {products.length === 0 ? (
          <p className="p-4 text-center">No products available</p>
        ) : (
          <div className="flex flex-col gap-6 p-8">
            {products.map((product) => (
              <div key={product.id} className="flex ">
                <div className="flex  mx-8">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col w-full justify-between">
                  <div className="flex flex-col gap-2">
                    <div>{product.title}</div>
                    <span className="border border-primary w-20 text-center rounded-md px-1.5">
                      Qty : {product.quantity}
                    </span>
                  </div>
                  <div className="font-bold ml-auto text-green-600">
                    ${product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="h-0.5 bg-[#9a9a9a] m-4"></div>
        <div className=" p-8 px-14">
          <h2 className="font-bold text-2xl pb-6">Order Summary</h2>
          <ul className="flex  flex-col gap-1 w-full ">
            <li className="flex justify-between">
              <span>Order Amount</span>
              <span className="ml-auto">10.000</span>
            </li>
            <li className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="ml-auto">10.000</span>
            </li>
            <li className="flex justify-between">
              <span>Discount</span>
              <span className="ml-auto">10.000</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-2/5  h-1/2 p-16 gap-8 flex flex-col py-4 bg-slate-100 rounded-lg justify-center">
        <div className="font-semibold text-xl  flex justify-between">
          Total :<span className="font-bold text-2xl">${total}</span>
        </div>
        <div className="flex gap-2">
          <input className="w-3/4 p-2 rounded-md" placeholder="Discount Code" />
          <button className="w-1/4 text-center p-2 px-4 border border-primary rounded-md">
            Apply
          </button>
        </div>
        <button
          className="px-8 py-2 bg-primary text-white font-medium rounded-md"
          onClick={handleNavigatePayment}
        >
          Payment
        </button>
      </div>
    </div>
    </Layout>
  );
};

export default Page;
