import { createContext } from "react";
import { IServiceCar, ICarFilters } from "../types/Cars";

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
