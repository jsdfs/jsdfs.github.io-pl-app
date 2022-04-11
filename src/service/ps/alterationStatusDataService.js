import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ps');

class alterationStatusDataService {
  search(searchObj) {
    return http(axiosUrl).post("/alteration-statuses/search", searchObj);
  }

  getAllRecords() {
    return http(axiosUrl).post("/alteration-statuses/get-all");
  }

  addAlterationStatus(addAlterationStatusObj) {
    return http(axiosUrl).post("/alteration-statuses", addAlterationStatusObj);
  }

  saveAlterationStatus(alterationStatusObj) {
    return http(axiosUrl).put("/alteration-statuses", alterationStatusObj)
  }

  deleteAlterationStatus(seqId) {
    return http(axiosUrl).delete(`/alteration-statuses?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/alteration-statuses/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/alteration-statuses/codes", { params: paramObj });
  }

  addUpdateProposalStatusDetail(addUpdateAlterationStatusDetailObj) {
    return http(axiosUrl).post("/alteration-statuses/details", addUpdateAlterationStatusDetailObj);
  }

  getByIdWithDetails(id) {
    return http(axiosUrl).get(`/alteration-statuses/details?id=${id}&details=true`);
  }

  deleteAlterationStatusDetail(deleteAlterationStatusDetailObj) {
    return http(axiosUrl).delete("/alteration-statuses/details", { data: deleteAlterationStatusDetailObj});
  }

  getAlterationStatussById(id) {
    return http(axiosUrl).get(`/alteration-statuses?id=${id}`);
  }

  getUsers() {
    return fetch("data/scmuser.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }
}

export default new alterationStatusDataService();
