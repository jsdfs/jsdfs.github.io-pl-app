import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class sanctionListDataService {

  save(sanctionObj) {
    return http(axiosUrl).put("/sanction-lists", sanctionObj);
  }

  search(sanctionObj) {
    return http(axiosUrl).post("/sanction-lists/search", sanctionObj);
  }

  add(sanctionObj) {
    return http(axiosUrl).post("/sanction-lists/", sanctionObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/sanction-lists?seqId=${seqId}`);
  }

}

export default new sanctionListDataService();
