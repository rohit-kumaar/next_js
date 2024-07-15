import { NextResponse } from "next/server";

export default function functionName(request: any) {
  // if (request.nextUrl.pathname != "/login") {
  return NextResponse.redirect(new URL("/login", request.url));
  // }
}

export const config = {
  matcher: ["/study/:path*", "/registration/:path*"],
};
