import React, { useReducer, useState, memo } from "react";

function Checkbox() {
  // const [checked, setChecked] = useState(false);

  // function toggle() {
  //     setChecked(checked => !checked);
  // }

  const [checked, toggle] = useReducer((checked) => !checked, false);
  const [, addTime] = useReducer((times, newTime) => {
    console.log(times, newTime);
    return [...times, newTime];
  }, []);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => {
          toggle();
          addTime(new Date().getTime());
        }}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

// function Test() {
//   return <Checkbox />;
// }

const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`, new Date());
  return <p onClick={() => meow(name)}>{name}</p>;
  // const result = new Date()
  // return <p>{result.toString()}</p>
};

const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);
// const PureCat2 = memo(Cat);

function Test2() {
  const [cats, setCats] = useState([]);
  // const meow = useCallback(name => console.log(`${name} has moewed`), []);
  return (
    <>
      {cats.map((name, i) => (
        // <Cat key={i} name={name} />
        <PureCat
          key={i}
          name={name}
          meow={(name) => console.log(`${name} has moewed`)}
        />
        // <PureCat2 key={i} name={name} meow={meow} />
      ))}
      <button onClick={() => setCats([...cats, prompt("Name a cat")])}>
        Add a cat
      </button>
    </>
  );
}

export function UseReducerTest() {
  return <Test2 />;
}
