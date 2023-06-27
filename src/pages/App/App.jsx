import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import TreatsPage from "../TreatsPage/TreatsPage";
import TreatDetailPage from "../TreatDetailPage/TreatDetailPage";
import CustomTreatPage from "../CustomTreatPage/CustomTreatPage";
import CustomTreatDetailPage from "../CustomTreatDetailPage/CustomTreatDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";
import ContactPage from "../ContactPage/ContactPage";
import AboutPage from "../AboutPage/AboutPage";
import {
  treats,
  customtreat,
  Ocassion,
  size,
  filling,
  flavour,
} from "../../data.js";
import * as treatsAPI from "../../utilities/treats-api";
import CreateOwnSweet from "../CreateOwnSweet/CreateOwnSweet";
import TreatsListPage from "../TreatsListPage/TreatsListPage";
import UpdateTreatPage from "../UpdateTreatPage/UpdateTreatPage";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  // const [cartItems, setCartItems] = useState([]);
  // const [cart, setCart] = useState(null);

  // useEffect(function() {
  //   async function getItems() {
  //     const treats = await treatsAPI.getAllTreats();
  //     setCartItems(treats);
  //   }
  //   getItems();
  //   async function getCart() {
  //     const cart = await ordersAPI.getCart();
  //     setCart(cart);
  //   }
  //   getCart();
  // }, []);

  // function onAdd(treat){
  //   const exist = cartItems.find(x => x.id === treat.id);
  //   if(exist){
  //     // setCartItems(cartItems.map(x => x.id === treat.id ? {...exist, qty: exist.qty + 1} : x ));
  //     setCartItems(cartItems.map(x => x.id === treat.id ? {...exist, qty: exist.qty + 1} : x ));
  //   } else {
  //     setCartItems([...cartItems, {...treat, qty: 1 }])
  //   }}
  //   console.log(cartItems)

  //   function onRemove(treat) {
  //     const exist = cartItems.find((x) => x.id === treat.id);
  //     if(exist.qty === 1) {
  //       setCartItems(cartItems.filter((x) => x.id !== treat.id));
  //     } else {
  //       setCartItems(cartItems.map(x => x.id === treat.id ? {...exist, qty: exist.qty - 1} : x ));

  //     }
  //   }
  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}

          <>
            <Route
              path="/createOwn"
              element={<CreateOwnSweet user={user} setUser={setUser} />}
            />
            <Route
              path="/treats"
              element={<TreatsListPage treats={treats} />}
            />
            <Route
              path="/update/:id"
              element={<UpdateTreatPage user={user} />}
            />
          </>
{/* 
          <Route path="/authpage" element={<AuthPage setUser={setUser} />} /> */}

          {/* <Route path="/createOwn" element={<CreateOwnSweet user={user} setUser={setUser} />} />

              <Route path="/treats" element={<TreatsListPage treats={treats}  />} />
              <Route path="/update/:id" element={<UpdateTreatPage user={user} />} /> */}

          {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} /> */}

          <Route path="/ordertreats" element={<TreatsPage treats={treats} />} />
          {/* onAdd={onAdd} */}

          <Route
            path="/treats/:treatName"
            element={<TreatDetailPage treats={treats} />}
          />
          {/* onAdd={onAdd} */}
          {/* <Route
              path="/treats/:treatName/posts"
              element={<TreatDetailPage treats={treats}  />}
            /> */}
          <Route
            path="/customtreat"
            element={<CustomTreatPage customtreat={customtreat} />}
          />
          <Route
            path="/customtreat/:customtreatName"
            element={<CustomTreatDetailPage customtreat={customtreat} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/"
            element={<HomePage customtreat={customtreat} treats={treats} />}
          />
          <Route path="/authpage" element={<AuthPage setUser={setUser} />} />

          {/* <Route path="/order" element={<OrderPage setUser={setUser} />} /> */}
          {/* cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}  */}
        </Routes>

        {/* <Route path="/" element={<PostLisPage  user={user} />} /> */}
      </>
    </main>
  );
}
