import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from "react";
import { useMousePosition, useWindowSize } from "./hooks/customeHooks";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    // console.log('add');
    window.addEventListener("keydown", forceRender);
    return () => {
      // console.log('remove');
      window.removeEventListener("keydown", forceRender);
    };
  });
};

function WordCount({ children = "" }) {
  useAnyKeyToRender();

  // const words = children.split(" ");
  const words = useMemo(() => children.split(" "), [children]);
  // const a = useMemo(() => children, [children]);
  // const words = a.split(" ");

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length}</strong>
      </p>
    </>
  );
}

function Test() {
  useAnyKeyToRender();

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

  useEffect(() => {
    console.log("fresh render");
    fn();
  }, [fn]);

  return <></>;
}

function Test2() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));
  return <div>ready</div>;
}

function Test3() {
  const [x, y] = useMousePosition();

  useEffect(() => {
    console.log(x, y);
    return console.log("end");
  }, [x, y]);

  return <div id="aa"></div>;
}

function Test4() {
  const [x, y] = useWindowSize();

  useEffect(() => {
    console.log(x, y);
  }, [x]);

  return <div id="aa"></div>;
}

export default function UseEffectTest() {
  return (
    // <WordCount>You are not going to belive this but...</WordCount>
    <Test4 />
  );
}
