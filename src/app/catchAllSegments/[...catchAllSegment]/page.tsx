import React from "react";

export default function CatchAllSegment({ params }: any) {
  console.log(params);

  return (
    <>
      <div>1st Route : {params?.catchAllSegment[0]}</div>
      <div>2nd Route : {params?.catchAllSegment[1]}</div>
      <div>3rd Route : {params?.catchAllSegment[2]}</div>
      <div>4th Route : {params?.catchAllSegment[3]}</div>
      <div>5th Route : {params?.catchAllSegment[4]}</div>
    </>
  );
}
