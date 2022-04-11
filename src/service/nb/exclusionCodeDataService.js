import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class ExclusionCodeDataService {
  search(searchObj) {
    return http(axiosUrl).post("/exclusions/search", searchObj);
  }

  addExclusionCode(addExclusionCodeObj) {
    return http(axiosUrl).post("/exclusions", addExclusionCodeObj);
  }

  saveExclusionCode(exclusionCodeObj) {
    return http(axiosUrl).put("/exclusions", exclusionCodeObj)
  }

  deleteExclusionCode(seqId) {
    return http(axiosUrl).delete(`/exclusions?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/exclusions/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/exclusions/codes", { params: paramObj });
  }

}

export default new ExclusionCodeDataService();
