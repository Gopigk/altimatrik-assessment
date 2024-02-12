import { ICarFilters, IServiceCar } from "../context/RootContext";

const checkBudget = (car: IServiceCar, budget: string[]) => {
  if (budget.includes("lessThan2l")) return car.price < 200000;
  if (budget.includes("2To4l"))
    return car.price >= 200000 && car.price <= 400000;
  if (budget.includes("4To6l"))
    return car.price >= 400000 && car.price <= 600000;
  return car.price > 600000;
};

export const checkAndFilterCar = (car: IServiceCar, filters: ICarFilters) => {
  const {
    location,
    bodyType,
    brand,
    owners,
    fuelType,
    transmissionType,
    budget,
  } = filters;
  if (location && location.includes(car.location.toLowerCase())) return true;
  if (bodyType && bodyType.includes(car.bodyType.toLowerCase())) return true;
  if (brand && brand.includes(car.model.toLowerCase())) return true;
  if (owners && owners.includes(car.owners)) return true;
  if (fuelType && fuelType.includes(car.fuelType.toLowerCase())) return true;
  if (
    transmissionType &&
    transmissionType.includes(car.transmissionType.toLowerCase())
  )
    return true;
  if (budget && checkBudget(car, budget)) return true;
  return false;
};
