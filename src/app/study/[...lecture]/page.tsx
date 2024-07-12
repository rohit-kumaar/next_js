import React from "react";

export default function Lecture({ params }: any) {
  console.log(params);

  return (
    <>
      <div>1st Route : {params?.lecture[0]}</div>
      <div>2nd Route : {params?.lecture[1]}</div>
      <div>3rd Route : {params?.lecture[2]}</div>
      <div>4th Route : {params?.lecture[3]}</div>
      <div>5th Route : {params?.lecture[4]}</div>
    </>
  );
}
