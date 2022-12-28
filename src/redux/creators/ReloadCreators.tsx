import { RELOAD_INSPECTIONS } from "../types";

export function setReload(ReloadStatus: boolean) {
  return {
    type: RELOAD_INSPECTIONS,
    payload: ReloadStatus,
  };
}
