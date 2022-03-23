import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../home/Home";
import Query from "../../query/Query";
import Register from "../../register/Register";


export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/query" element={<Register />} />
        <Route path="/register" element={<Query />} />
        <Route path="*" element={<Home />} />
    </Routes>