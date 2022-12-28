import { ADD_INSPECTIONS } from "../types";

export function setInspection(Inspections: Array<any>) {
  return {
    type: ADD_INSPECTIONS,
    payload: Inspections,
  };
}
