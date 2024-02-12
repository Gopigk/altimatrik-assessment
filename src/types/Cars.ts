export interface ICar {
  model: string;
  imageUrl: string;
}

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
