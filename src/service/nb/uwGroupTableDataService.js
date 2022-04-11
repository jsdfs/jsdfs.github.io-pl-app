import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class uwGroupTableDataService {
  search(searchObj) {
    return http(axiosUrl).post("/uw-group-tables/search", searchObj);
  }

  getAllRecords() {
    return http(axiosUrl).post("/uw-group-tables/get-all");
  }

  addUwGroupTable(addUwGroupTableObj) {
    return http(axiosUrl).post("/uw-group-tables", addUwGroupTableObj);
  }

  saveUwGroupTable(uwGroupTableObj) {
    return http(axiosUrl).put("/uw-group-tables", uwGroupTableObj)
  }

  deleteUwGroupTable(seqId) {
    return http(axiosUrl).delete(`/uw-group-tables?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/uw-group-tables/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/uw-group-tables/codes", { params: paramObj });
  }

  addUpdateProposalStatusDetail(addUpdateUwGroupTableDetailObj) {
    return http(axiosUrl).post("/uw-group-tables/details", addUpdateUwGroupTableDetailObj);
  }

  getByIdWithDetails(id) {
    return http(axiosUrl).get(`/uw-group-tables/details?id=${id}&details=true`);
  }

  deleteUwGroupTableDetail(deleteUwGroupTableDetailObj) {
    return http(axiosUrl).delete("/uw-group-tables/details", { data: deleteUwGroupTableDetailObj});
  }

  getUwGroupTablesById(id) {
    return http(axiosUrl).get(`/uw-group-tables?id=${id}`);
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

export default new uwGroupTableDataService();
