"use client";
import React from "react";

function TestDynamicRouter({ params }: any) {
  console.log(params);

  return <div>Test Dynamic Router Components : {params.test}</div>;
}

export default TestDynamicRouter;
