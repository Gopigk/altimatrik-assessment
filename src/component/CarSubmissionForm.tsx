import React, { useState } from "react";
import store from "../store/store.ts";
import { checkKeysHasValue } from "../helpers/dataHelpers.tsx";

type IKeys =
  | "model"
  | "color"
  | "yearOfManufacture"
  | "insuranceValidUpto"
  | "kms"
  | "location"
  | "owners"
  | "transmission"
  | "fitment"
  | "imageUrl";

const FORM_KEYS: IKeys[] = [
  "model",
  "color",
  "yearOfManufacture",
  "insuranceValidUpto",
  "kms",
  "location",
  "owners",
  "transmission",
  "fitment",
];

export default function CarSubmissionForm() {
  const [carDetails, setCarDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState("" as string | null);

  const handleChange = (key: IKeys, e: React.ChangeEvent<HTMLInputElement>) => {
    setCarDetails({
      ...carDetails,
      [key]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkKeysHasValue(carDetails, FORM_KEYS))
      return setErrorMessage("Fill all fields");
    setErrorMessage(null);
    store.dispatch({
      type: "ADD_CAR",
      payload: carDetails,
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex flex-row gap-4 items-center justify-center">
          <h1 className="text-center text-2xl font-bold mb-4">
            Car Submission
          </h1>
          <p className="text-red-500 text-sm font-semibold italic mb-4">
            {errorMessage}
          </p>
        </div>
        <div className="grid grid-cols-2">
          <div className="cols-span-1">
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="model"
              >
                Model
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="model"
                type="text"
                placeholder="Model"
                onChange={(e) => handleChange("model", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="color"
              >
                Color
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="color"
                type="text"
                placeholder="Color"
                onChange={(e) => handleChange("color", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="yearOfManufacture"
              >
                Year Of Manufacture
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="yearOfManufacture"
                type="text"
                placeholder="Year Of Manufacture"
                onChange={(e) => handleChange("yearOfManufacture", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="insuranceValidUpto"
              >
                Insurance Valid Upto
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="insuranceValidUpto"
                type="Text"
                placeholder="Insurance Valid Upto"
                onChange={(e) => handleChange("insuranceValidUpto", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="kms"
              >
                Kms
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="kms"
                type="text"
                placeholder="Kms"
                onChange={(e) => handleChange("kms", e)}
              />
            </div>
          </div>
          <div className="cols-span-1">
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="location"
                type="text"
                placeholder="Location"
                onChange={(e) => handleChange("location", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="owners"
              >
                No of owners
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="owners"
                type="text"
                placeholder="No of owners"
                onChange={(e) => handleChange("owners", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="transmission"
              >
                Transmission
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="transmission"
                type="text"
                placeholder="Transmission"
                onChange={(e) => handleChange("transmission", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fitment"
              >
                External Fitment
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="fitment"
                type="Text"
                placeholder="External Fitment"
                onChange={(e) => handleChange("fitment", e)}
              />
            </div>
            <div className="mb-4 flex flex-row items-center gap-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photo"
              >
                Photo
              </label>
              <input
                className="border rounded py-2 px-3 text-gray-700"
                id="photo"
                type="file"
                placeholder="Choose file"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
