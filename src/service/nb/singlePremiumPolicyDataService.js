import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb'); 

class singlePremiumPolicyDataService {

  save(singlePremPolicyObj) {
    return http(axiosUrl).put("/single-premium-policies", singlePremPolicyObj);
  }

  search(singlePremPolicyObj) {
    return http(axiosUrl).post("/single-premium-policies/search", singlePremPolicyObj);
  }

  add(singlePremPolicyObj) {
    return http(axiosUrl).post("/single-premium-policies/", singlePremPolicyObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/single-premium-policies?seqId=${seqId}`);
  }
  
}

export default new singlePremiumPolicyDataService();
