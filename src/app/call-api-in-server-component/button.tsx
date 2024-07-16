"use client";
import React from "react";

export default function Button({ email }: any) {
  const checkEmailFunction = () => {
    alert(email);
  };

  return <button onClick={checkEmailFunction}>Check Email</button>;
}
