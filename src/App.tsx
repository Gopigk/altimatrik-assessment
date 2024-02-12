import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header.tsx";
import ErrorBoundary from "./component/ErrorBoundary.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles.css";
import Home from "./component/Home.tsx";
import Cars from "./JSON/carList.json";
import ServiceCars from "./JSON/serviceCarsLists.json";

import { connect } from "react-redux";
import store from "./store/store.ts";
import Service from "./component/Service.tsx";
import RootContext from "./context/RootContext.ts";
import { ICarFilters } from "./types/Cars.ts";

const App = () => {
  const [filters, setFilters] = useState<ICarFilters>({} as ICarFilters);

  const handleUpdateFilters = (data: ICarFilters) =>
    setFilters((prevFilters) => ({ ...prevFilters, ...data }));

  useEffect(() => {
    if (store.getState().cars.cars.length > 0) return;
    store.dispatch({
      type: "UPDATE_CARS",
      payload: Cars,
    });
  }, []);

  return (
    <RootContext.Provider
      value={{
        serviceCars: ServiceCars,
        serviceFilters: filters,
        updateFilters: handleUpdateFilters,
      }}
    >
      <ErrorBoundary>
        <link href="../src/styles.css" rel="stylesheet"></link>
        <Router>
          <div className="App">
            <Header />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ErrorBoundary>
    </RootContext.Provider>
  );
};

function mapStateToProps(state) {
  const { cars } = state;
  return cars;
}

export default connect(mapStateToProps)(App);
