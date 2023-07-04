import logo from "./logo.svg";
import "./App.css";
import Homepage from "./HomePage/HomePage";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { Routes, Route, useNavigate } from "react-router-dom";
import Search from "./Search/Search";
import { Navigate } from "react-router-dom";
import Display from "./Display/Display";
import { useState } from "react";

function App() {
  const queryqlient = new QueryClient();

 
  function give(id) {}

  return (
    <div>
      {/* <QueryClientProvider client={queryqlient}>
        <Homepage />
      </QueryClientProvider> */}

      <Routes>
        <Route
          path="/"
          element={
            <QueryClientProvider client={queryqlient}>
              <Homepage />
            </QueryClientProvider>
          }
        />
        <Route
          path="/search"
          element={
            <QueryClientProvider client={queryqlient}>
              <Search  />
            </QueryClientProvider>
          }
        />
        <Route
          path="/product/:productid"
          element=<QueryClientProvider client={queryqlient}>
            {<Display />}
          </QueryClientProvider>
        />
      </Routes>
    </div>
  );
}

export default App;
