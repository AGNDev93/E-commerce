import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Pruebas from "../component/Pruebas";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Pruebas />
    </div>
  );
};
