export interface ICar {
  model: string;
  imageUrl: string;
}

type IActionType = "UPDATE_CARS" | "SHOW_SUBMISSION_FORM" | "ADD_CAR";

export interface IAction {
  type: IActionType;
  payload: ICar[];
}

export interface ICarsRootState {
  showSubmissionForm: boolean;
  cars: ICar[];
}

export const carsReducer = (
  state = {
    showSubmissionForm: false,
    cars: [],
  } as ICarsRootState,
  action: IAction
) => {
  switch (action.type) {
    case "SHOW_SUBMISSION_FORM":
      return { ...state, showSubmissionForm: !state.showSubmissionForm };
    case "UPDATE_CARS":
      return { ...state, cars: [...state.cars, ...action.payload] };
    case "ADD_CAR":
      return {
        ...state,
        cars: [...state.cars, action.payload],
        showSubmissionForm: !state.showSubmissionForm,
      };
    default:
      return state;
  }
};
