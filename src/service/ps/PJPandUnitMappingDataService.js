import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig("ps");

class servicingUnitDataService {
  save(pjpUnitObj) {
    return http(axiosUrl).put("/pjps-and-unit-mappings", pjpUnitObj);
  }

  search(pjpUnitObj) {
    return http(axiosUrl).post("/pjps-and-unit-mappings/search", pjpUnitObj);
  }

  add(pjpUnitObj) {
    return http(axiosUrl).post("/pjps-and-unit-mappings/", pjpUnitObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/pjps-and-unit-mappings?seqId=${seqId}`);
  }
}

export default new servicingUnitDataService();
