import { createContext } from "react";
import { IServiceCar, ICarFilters } from "../types/Cars";

interface RootContextType {
  serviceCars: IServiceCar[];
  serviceFilters: ICarFilters;
  updateFilters: (data: { [key in keyof ICarFilters] }) => void;
  resetFilters: () => void;
}

const RootContext = createContext<RootContextType>({
  serviceCars: [],
  serviceFilters: {} as ICarFilters,
  updateFilters: () => {},
  resetFilters: () => {},
});

export default RootContext;
