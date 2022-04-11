import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig("ps");

class servicingUnitDataService {
  save(servicingUnitbj) {
    return http(axiosUrl).put("/servicing-units-postcodes", servicingUnitbj);
  }

  search(servicingUnitbj) {
    return http(axiosUrl).post("/servicing-units-postcodes/search", servicingUnitbj);
  }

  add(servicingUnitbj) {
    return http(axiosUrl).post("/servicing-units-postcodes/", servicingUnitbj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/servicing-units-postcodes?seqId=${seqId}`);
  }
}

export default new servicingUnitDataService();
