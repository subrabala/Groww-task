"use client";

import React, { useState } from "react";
import useProductsStore from "../../stores/products-store";
import { FaCreditCard, FaMoneyCheck, FaPhone } from "react-icons/fa";
import Layout from "../layout";
import Image from "next/image";
import  { useRouter } from "next/navigation";
const Payment = () => {

  const router = useRouter();
  const paymentMethods = useProductsStore((state) => state.paymentMethods);

  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodClick = (method) => {
    setSelectedMethod(method);
  };

  function handlePayment(){
    if(selectedMethod == null){
      alert("Please select a payment method")
    }
    router.push("/success")
    
  }

  return (
    <>
      <Layout>
        <nav></nav>
        <div className="h-screen  md:p-8 gap-8 flex flex-col md:flex-row">
          <div className="w-full">
            <h1 className="p-8 text-3xl font-bold">Payment</h1>
            <h2 className="font-bold text-2xl p-8">Choose Payment Method</h2>

            <div className="p-8 md:px-32 flex w-full md:gap-20 align-middle">
              <div className="flex flex-col gap-4 w-full md:w-3/5">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-4 px-8 rounded-md justify-between cursor-pointer ${
                      selectedMethod === method
                        ? "bg-violet-300 text-black"
                        : "bg-slate-200 "
                    }`}
                    onClick={() => handleMethodClick(method)}
                  >
                    <div className="flex gap-2 text-xl">
                      {method === "UPI" && <FaPhone size={24} />}
                      {method === "CARDS" && <FaCreditCard size={24} />}
                      {method !== "UPI" && method !== "CARDS" && (
                        <FaMoneyCheck size={24} />
                      )}
                      <span className="px-2">{method}</span>
                    </div>
                    
                  </div>
                ))}
                <button
                  className="px-8 py-2 bg-primary hover:bg-violet-800 transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; text-white font-medium rounded-md"
                  onClick={handlePayment}
                >
                  Confirm Payment
                </button>
              </div>
              <div className="md:w-2/5 hidden md:block">
                <img
                  src="/payment.jpg"
                  alt="alt"
                  className="max-h-fit max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Payment;
