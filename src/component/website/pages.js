import React from "react";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./pages.css";

export function Home() {
  return (
    <div className="home">
      <h1>[홈]</h1>
      <nav>
        <Link to="about">회사 소개</Link>
        <Link to="events">이벤트</Link>
        <Link to="products">제품</Link>
        <Link to="contact">고객 지원</Link>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[회사소개]</h1>
      <Outlet />
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[이벤트]</h1>
    </div>
  );
}

export function Products() {
  return (
    <div>
      <h1>[제품]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[고객지원]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location);
  return (
    <div className="whoops-404">
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

export function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </div>
  );
}

export function Location() {
  return (
    <div>
      <h2>Our Services</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
    </div>
  );
}
