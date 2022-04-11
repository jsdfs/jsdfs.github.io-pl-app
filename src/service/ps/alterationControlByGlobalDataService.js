import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ps');

class AlterationControlByGlobalDataService {
  search(searchObj) {
    return http(axiosUrl).post("/global-alteration-controls/search", searchObj);
  }

  addAlterationControl(addAlterationControlObj) {
    return http(axiosUrl).post("/global-alteration-controls", addAlterationControlObj);
  }

  saveAlterationControl(alterationControlObj) {
    return http(axiosUrl).put("/global-alteration-controls", alterationControlObj)
  }

  deleteAlterationControl(seqId) {
    return http(axiosUrl).delete(`/global-alteration-controls?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/global-alteration-controls/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/global-alteration-controls/codes", { params: paramObj });
  }

}

export default new AlterationControlByGlobalDataService();
