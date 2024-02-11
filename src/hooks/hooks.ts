import { useDispatch, useSelector } from "react-redux";
import type { IRootState, IAppDispatch } from "../store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<IAppDispatch>();
export const useAppSelector = useSelector.withTypes<IRootState>();
