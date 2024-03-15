"use client";
import React from "react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { useRouter } from "next/navigation";

export default function MyComponent() {
  const animationContainer = useRef(null);
  const router = useRouter();
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "/animation.json",
    });
  }, []);

  return (
    <div className="h-screen  flex justify-center align-middle">
      <div ref={animationContainer}></div>
      <p onClick={()=>{router.push('/')}}>Go back to Home Page</p>
    </div>
  );
}
