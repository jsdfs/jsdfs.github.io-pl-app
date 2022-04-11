import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ac');

class financialClosingPeriodDataService {

  save(finincialObj) {
    return http(axiosUrl).put("/financial-closing-periods", finincialObj);
  }

  search(finincialObj) {
    return http(axiosUrl).post("/financial-closing-periods/search", finincialObj);
  }

  add(finincialObj) {
    return http(axiosUrl).post("/financial-closing-periods/", finincialObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/financial-closing-periods?seqId=${seqId}`);
  }
  
}

export default new financialClosingPeriodDataService();
