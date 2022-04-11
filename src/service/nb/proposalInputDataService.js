import { http } from "../common/httpcommon";

class proposalInputDataService {

  save(proposalInputObj) {
    return http.put("/proposalinput/input", proposalInputObj);
  }
  
  saveInsureDetail(proposalInputObj) {
    return http.put("/proposalinput/insuredetail", proposalInputObj);
  }

  savePolicyholder(proposalInputObj) {
    return http.put("/proposalinput/policyholder", proposalInputObj);
  }

  
}

export default new proposalInputDataService();
