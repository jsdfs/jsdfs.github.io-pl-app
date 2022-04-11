import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class loadingRangeDataService {
  search(searchObj) {
    return http(axiosUrl).post("/loading-ranges/search", searchObj);
  }

  addLoadingRange(addLoadingRangeObj) {
    return http(axiosUrl).post("/loading-ranges", addLoadingRangeObj);
  }

  saveLoadingRange(loadingRangeObj) {
    return http(axiosUrl).put("/loading-ranges", loadingRangeObj)
  }

  deleteLoadingRange(seqId) {
    return http(axiosUrl).delete(`/loading-ranges?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/loading-ranges/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/loading-ranges/codes", { params: paramObj });
  }

}

export default new loadingRangeDataService();
