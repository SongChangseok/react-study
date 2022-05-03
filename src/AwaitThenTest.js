import React from "react";

const url = `https://api.github.com/users/songchangseok`;

// const ThenTest = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then(console.log)
//     .catch(console.error);

//   return <></>;
// };

const AwaitTest = async () => {
  try {
    let res = await fetch(url);
    let result = await res.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return <></>;
};

export default function AwaitThenTest() {
  //   return <ThenTest />;
  return <AwaitTest />;
}
