import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class proposalStatusDataService {
  search(searchObj) {
    return http(axiosUrl).post("/proposal-status-controls/search", searchObj);
  }

  addProposalStatusHeader(addProposalStatusObj) {
    return http(axiosUrl).post("/proposal-status-controls", addProposalStatusObj);
  }

  saveProposalStatusHeader(proposalStatusObj) {
    console.log("passed obj:", proposalStatusObj)
    return http(axiosUrl).put("/proposal-status-controls", proposalStatusObj)
  }

  getId(seqId) {
    return http(axiosUrl).get(`/proposal-status-controls/${seqId}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/proposal-status-controls/codes", { params: paramObj });
  }
  
  deleteProposalStatusHeader(seqId) {
    return http(axiosUrl).delete(`/proposal-status-controls?seqId=${seqId}`);
  }

  addUpdateProposalStatusDetail(addUpdateProposalStatusDetailObj) {
    return http(axiosUrl).post("/proposal-status-controls/details", addUpdateProposalStatusDetailObj);
  }

  getByIdWithDetails(id) {
    return http(axiosUrl).get(`/proposal-status-controls/details?id=${id}&details=true`);
  }

  deleteProposalStatusDetail(deleteProposalStatusDetailObj) {
    return http(axiosUrl).delete("/proposal-status-controls/details", { data: deleteProposalStatusDetailObj});
  }


  
}   

export default new proposalStatusDataService();
