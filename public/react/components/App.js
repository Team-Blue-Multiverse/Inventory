import React  from "react";
import { Routes, Route } from "react-router-dom";

// import and prepend the api url to any fetch calls
 import { Card, cards } from "./cards";
 import { Form, Form } from "./Form";
 import { Home } from "./Home";
 import { Register } from "./Register";

export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/cards" element={<Card />} />
        <Route path="/Form" element={<Form />} />
		    <Route path="/register" element={<Register />} /> 

      </Routes>
  );
};
