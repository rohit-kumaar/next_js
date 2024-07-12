"use client";
import React from "react";

export default function DynamicRoutePage({ params }: any) {
  console.log(params);

  return <div>Test Dynamic Router Components : {params.dynamicRoutePage}</div>;
}
