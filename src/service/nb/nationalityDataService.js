import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class nationalityDataService {

  save(nationalObj) {
    return http(axiosUrl).put("/nationalities", nationalObj);
  }

  search(nationalObj) {
    return http(axiosUrl).post("/nationalities/search", nationalObj);
  }

  add(nationalObj) {
    return http(axiosUrl).post("/nationalities/", nationalObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/nationalities?seqId=${seqId}`);
  }
  
}

export default new nationalityDataService();
