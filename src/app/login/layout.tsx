import Link from "next/link";
import React from "react";

function Layout({ children }: any) {
  return (
    <>
      <ul>
        <li>
          <Link href="/login/admin-login">Admin Login</Link>
        </li>
        <li>
          <Link href="/login/user-login">User Login</Link>
        </li>
      </ul>

      {children}
    </>
  );
}

export default Layout;
