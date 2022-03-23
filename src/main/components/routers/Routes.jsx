import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../home/Home";
import Query from "../../query/Query";
import Register from "../../register/Register";
import AllRegister from "../../register/AllRegister";


export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/query" element={<Query />} />
        <Route path="/allregister" element={<AllRegister />} />
        <Route path="*" element={<Home />} />
    </Routes>