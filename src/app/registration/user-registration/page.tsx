"use client";
import { useRouter } from "next/navigation";
import React from "react";

function UserRegistration() {
  const router = useRouter();

  return (
    <>
      <div>UserRegistration</div>
      <button onClick={() => router.push("/login/user-login")}>
        Go to login page
      </button>
    </>
  );
}

export default UserRegistration;
