"use client";
import React from "react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function MyComponent() {
  const animationContainer = useRef(null);

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
    </div>
  );
}
