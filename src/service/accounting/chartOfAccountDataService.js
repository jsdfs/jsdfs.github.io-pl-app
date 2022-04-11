import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ac');

class chartOfAccountDataService {

  save(chartOfAccountObj) {
    return http(axiosUrl).put("/chart-accounts", chartOfAccountObj);
  }

  search(chartOfAccountObj) {
    return http(axiosUrl).post("/chart-accounts/search", chartOfAccountObj);
  }

  add(chartOfAccountObj) {
    return http(axiosUrl).post("/chart-accounts/", chartOfAccountObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/chart-accounts?seqId=${seqId}`);
  }
  
}

export default new chartOfAccountDataService();
