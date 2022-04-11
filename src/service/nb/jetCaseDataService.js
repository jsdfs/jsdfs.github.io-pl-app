import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class jetCaseDataService {

  save(jetCaseObj) {
    return http(axiosUrl).put("/jet-cases", jetCaseObj);
  }

  search(jetCaseObj) {
    return http(axiosUrl).post("/jet-cases/search", jetCaseObj);
  }

  add(jetCaseObj) {
    return http(axiosUrl).post("/jet-cases/", jetCaseObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/jet-cases?seqId=${seqId}`);
  }
  
}

export default new jetCaseDataService();
