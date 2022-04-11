import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class standardTatDataService {
  search(searchObj) {
    return http(axiosUrl).post("/standard-tats/search", searchObj);
  }

  addStandardTat(addStandardTatObj) {
    return http(axiosUrl).post("/standard-tats", addStandardTatObj);
  }

  saveStandardTat(standardTatObj) {
    return http(axiosUrl).put("/standard-tats", standardTatObj)
  }

  deleteStandardTat(seqId) {
    return http(axiosUrl).delete(`/standard-tats?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/standard-tats/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/standard-tats/codes", { params: paramObj });
  }

}

export default new standardTatDataService();
