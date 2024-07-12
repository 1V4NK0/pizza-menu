import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Ivan's React Pizza Co.</h1>
    </header>
  );
};

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 1} $</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const openHour = 12;
  const closeHour = 22;
  let isOpen = hour >= openHour && hour <= closeHour;
  // isOpen = false;
  let isClosingSoon = hour >= 20 && hour < 22;
  // isClosingSoon = true;

  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("We're closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open until {closeHour}:00</p>
          <button className="btn">Order</button>
          Time - {hour}:{minutes}
        </div>
      ) : (
        <p>We are closed! See you tomorrow!</p>
      )}
      {isClosingSoon ? "Closing soon!" : ""}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
