import { createContext } from "react";
import { ICar } from "../store/reducer/CarsReducer";

export interface ICarFilters {
  location: string[];
  bodyType: string[];
  brand: string[];
  owners: number[];
  budget: string[];
  fuelType: string[];
  transmissionType: string[];
}

export interface IServiceCar extends ICar {
  price: number;
  location: string;
  owners: number;
  bodyType: string;
  fuelType: string;
  transmissionType: string;
}

interface RootContextType {
  serviceCars: IServiceCar[];
  serviceFilters: ICarFilters;
  updateFilters: (data: { [key in keyof ICarFilters] }) => void;
}

const RootContext = createContext<RootContextType>({
  serviceCars: [],
  serviceFilters: {} as ICarFilters,
  updateFilters: () => {},
});

export default RootContext;
