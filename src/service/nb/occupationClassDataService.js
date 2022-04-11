import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class occupationClassDataService {

  save(occClassObj) {
    return http(axiosUrl).put("/occupation-classes", occClassObj);
  }

  search(occClassObj) {
    return http(axiosUrl).post("/occupation-classes/search", occClassObj);
  }

  add(occClassObj) {
    return http(axiosUrl).post("/occupation-classes/", occClassObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/occupation-classes?seqId=${seqId}`);
  }
  
}

export default new occupationClassDataService();
