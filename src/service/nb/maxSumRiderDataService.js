import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class maxSumRiderDataService {

  save(maxSumRiderObj) {
    return http(axiosUrl).put("/max-sum-assured-for-riders", maxSumRiderObj);
  }

  search(maxSumRiderObj) {
    return http(axiosUrl).post("/max-sum-assured-for-riders/search", maxSumRiderObj);
  }

  add(maxSumRiderObj) {
    return http(axiosUrl).post("/max-sum-assured-for-riders/", maxSumRiderObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/max-sum-assured-for-riders?seqId=${seqId}`);
  }
  
}

export default new maxSumRiderDataService();
