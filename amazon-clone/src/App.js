import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //any cleanup opertions go in here
      unsubscribe();
    };
  }, [user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
