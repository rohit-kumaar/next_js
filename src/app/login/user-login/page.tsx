"use client";

import { useRouter } from "next/navigation";
import React from "react";

function UserLogin() {
  const router = useRouter();

  return (
    <>
      <div>UserLogin</div>
      <button onClick={() => router.push("/registration/user-registration")}>
        Go to user registration
      </button>
    </>
  );
}

export default UserLogin;
