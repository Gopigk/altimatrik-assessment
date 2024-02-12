import React, { useContext, useMemo } from "react";
import ServiceFilter from "./ServiceFilter.tsx";
import RootContext from "../context/RootContext.ts";
import { checkAndFilterCar } from "../helpers/carHelper.ts";
import { IServiceCar } from "../types/Cars.ts";

export default function Service() {
  const { serviceCars, serviceFilters } = useContext(RootContext);

  const isFilterApplied = useMemo(() => {
    return Object.keys(serviceFilters).length > 0;
  }, [serviceFilters]);

  const cars = useMemo(() => {
    if (!Object.keys(serviceFilters)?.length) return serviceCars;
    return serviceCars.filter((car: IServiceCar) =>
      checkAndFilterCar(car, serviceFilters)
    );
  }, [serviceFilters, serviceCars]);

  const renderCarItem = (car: IServiceCar, index: number) => {
    return (
      <div className="grid grid-cols-2 gap-2 items-center ">
        <label className="cols-span-1">{car.model}</label>
        <img
          src={car.imageUrl}
          className="cols-span-1 h-28 w-36 border border-gray-300 rounded shadow"
          alt={car.model}
        />
      </div>
    );
  };

  const renderResult = () => {
    return <>{cars.map(renderCarItem)}</>;
  };

  return (
    <div className="grid grid-cols-2">
      <ServiceFilter />
      <div className="flex flex-col gap-4 items-start">
        <p className="font-bold">
          {isFilterApplied ? "Search Results" : "Cars"}
        </p>
        {renderResult()}
      </div>
    </div>
  );
}
