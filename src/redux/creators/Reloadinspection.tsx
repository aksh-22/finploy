import { RELOAD_INSPECTIONS } from "../types";

export function setReloadInspection(ReloadInspection: boolean) {
  return {
    type: RELOAD_INSPECTIONS,
    payload: ReloadInspection,
  };
}
