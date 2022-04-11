import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class uwApprovalLimitDataService {
  search(searchObj) {
    return http(axiosUrl).post("/underwriters-approval-limits/search", searchObj);
  }

  addUwApprovalLimit(addUwApprovalLimitObj) {
    return http(axiosUrl).post("/underwriters-approval-limits", addUwApprovalLimitObj);
  }

  saveUwApprovalLimit(uwApprovalLimitObj) {
    return http(axiosUrl).put("/underwriters-approval-limits", uwApprovalLimitObj)
  }

  deleteUwApprovalLimit(seqId) {
    return http(axiosUrl).delete(`/underwriters-approval-limits?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/underwriters-approval-limits/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/underwriters-approval-limits/codes", { params: paramObj });
  }

}

export default new uwApprovalLimitDataService();
