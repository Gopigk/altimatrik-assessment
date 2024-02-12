import React, { useContext, useMemo } from "react";
import { removeDuplicatesInArray } from "../helpers/dataHelpers.ts";
import RootContext from "../context/RootContext.ts";
import Select, { SingleValue } from "react-select";

const Label = (props: { text: string }) => {
  const { text } = props;
  return <p className="text-sm font-semibold">{text}</p>;
};

export default function ServiceFilter() {
  const { serviceFilters, updateFilters } = useContext(RootContext);

  const { serviceCars } = useContext(RootContext);

  const locationOptions = useMemo(() => {
    return serviceCars.map((car) => ({
      label: car.location,
      value: car.location.toLowerCase(),
    }));
  }, [serviceCars]);

  const bodyTypeOptions = useMemo(() => {
    const cleanedArray = removeDuplicatesInArray(
      serviceCars.map((car) => car.bodyType)
    );
    return cleanedArray.map((bodyType) => ({
      label: bodyType,
      value: bodyType.toLowerCase(),
    }));
  }, [serviceCars]);

  const brandOptions = useMemo(() => {
    const cleanedBrandOptions = removeDuplicatesInArray(
      serviceCars.map((car) => car.model)
    );

    return cleanedBrandOptions.map((brand) => ({
      label: brand,
      value: brand.toLowerCase(),
    }));
  }, [serviceCars]);

  const ownersOptions = useMemo(() => {
    return removeDuplicatesInArray(serviceCars.map((car) => car.owners));
  }, [serviceCars]);

  const handleChange = (key: string, value: string[] | number[]) => {
    updateFilters({ ...serviceFilters, [key]: value });
  };

  const handleMultipleChange = (key: string, value: string[]) => {
    const updatedValue = [...(serviceFilters[key] || []), ...value];
    updateFilters({
      ...serviceFilters,
      [key]: removeDuplicatesInArray(updatedValue),
    });
  };

  const locationFilter = () => {
    return (
      <div className="flex gap-3 items-center">
        <Label text="Location" />
        <Select
          options={locationOptions}
          onChange={(
            selectedOption: SingleValue<{ label: string; value: string }>
          ) => handleChange("location", [selectedOption?.value || "chennai"])}
        />
      </div>
    );
  };

  const bodyTypeFilter = () => {
    return (
      <div className="flex gap-3 items-center">
        <Label text="Body Type" />
        <Select
          closeMenuOnSelect={false}
          isMulti={false}
          onChange={(
            selectedOption: SingleValue<{ label: string; value: string }>
          ) => handleChange("bodyType", [selectedOption?.value || "suv"])}
          options={bodyTypeOptions}
        />
      </div>
    );
  };

  const renderBrandFilter = () => {
    return (
      <div className="flex gap-3 items-start">
        <Label text="Brand" />
        <div className="flex flex-col gap-1">
          {brandOptions.map((brand) => (
            <div className="flex flex-row items-center gap-2">
              <input
                className="border rounded px-3 text-gray-700"
                type="checkbox"
                value={brand.value}
                checked={serviceFilters?.brand?.includes(brand.value)}
                onChange={() =>
                  handleMultipleChange("brand", [
                    ...(serviceFilters.brand || []),
                    brand.value,
                  ])
                }
              />
              <label>{brand.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderOwnersFilter = () => {
    return (
      <div className="flex gap-3 items-center">
        <Label text="Owners" />
        <div className="flex flex-col gap-1">
          {ownersOptions.map((owner) => (
            <div className="flex flex-row items-center gap-2">
              <input
                className="border rounded px-3 text-gray-700"
                type="radio"
                value={owner}
                checked={serviceFilters?.owners?.includes(owner)}
                onChange={() => handleChange("owners", [owner])}
              />
              <label>{`${owner} Owner`}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBudgetFilter = () => {
    return (
      <div className="flex gap-3 items-center">
        <Label text="Budget" />
        <span
          onClick={() => handleChange("budget", ["lessThan2l"])}
          className="inline-block whitespace-nowrap rounded-full bg-gray-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
        >
          Less than 2L
        </span>
        <span
          onClick={() => handleChange("budget", ["2To4l"])}
          className="inline-block whitespace-nowrap rounded-full bg-gray-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
        >
          2L - 4L
        </span>
        <span
          onClick={() => handleChange("budget", ["4To6l"])}
          className="inline-block whitespace-nowrap rounded-full bg-gray-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
        >
          4L - 6L
        </span>
        <span
          onClick={() => handleChange("budget", [">6l"])}
          className="inline-block whitespace-nowrap rounded-full bg-gray-200 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700"
        >
          More than 6L
        </span>
      </div>
    );
  };

  const renderFuelTypeFilter = () => {
    return (
      <div className="flex gap-3 items-center">
        <Label text="Fuel Type" />
        {[
          { label: "Petrol", value: "petrol" },
          { label: "Diesel", value: "diesel" },
          { label: "CNG", value: "cng" },
        ].map((fuelType) => (
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              value={fuelType.value}
              checked={serviceFilters?.fuelType?.includes(fuelType.value)}
              onChange={(e) => handleChange("fuelType", [e.target.value])}
            />
            <label>{fuelType.label}</label>
          </div>
        ))}
      </div>
    );
  };

  const renderTransmissionFilter = () => {
    return (
      <div className="flex gap-3 items-center">
        <Label text="Transmission" />
        {[
          { label: "Manual", value: "manual" },
          { label: "Automatic", value: "automatic" },
        ].map((transmission) => (
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              value={transmission.value}
              checked={serviceFilters?.transmissionType?.includes(
                transmission.value
              )}
              onChange={(e) =>
                handleChange("transmissionType", [e.target.value])
              }
            />
            <label>{transmission.label}</label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 items-start">
      {locationFilter()}
      {bodyTypeFilter()}
      {renderBrandFilter()}
      {renderOwnersFilter()}
      {renderBudgetFilter()}
      {renderFuelTypeFilter()}
      {renderTransmissionFilter()}
    </div>
  );
}
