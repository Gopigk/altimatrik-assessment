import React from "react";
import { ICar } from "../store/reducer/CarsReducer";
import { useAppSelector } from "../hooks/hooks.ts";
import store from "../store/store.ts";
import CarSubmissionForm from "./CarSubmissionForm.tsx";

export default function Home() {
  const carsRootData = useAppSelector((state) => state.cars);
  const { cars, showSubmissionForm } = carsRootData;

  const handleClick = () => {
    store.dispatch({
      type: "SHOW_SUBMISSION_FORM",
    });
  };

  const renderCarItem = (car: ICar, index: number) => {
    return (
      <div
        key={`${index}_${car.model}`}
        className="block w-40 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
        onClick={handleClick}
      >
        <img src={car.imageUrl} className="h-20 w-36" alt={car.model} />
        <h2 className="mt-2 font-semibold float-bottom">{car.model}</h2>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-7 grid-flow-row gap-y-8">
        {cars.map(renderCarItem)}
      </div>
      {showSubmissionForm ? <CarSubmissionForm /> : null}
    </div>
  );
}
