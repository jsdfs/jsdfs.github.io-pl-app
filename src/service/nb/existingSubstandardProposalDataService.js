import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class existingSubstandardProposalDataService {

  save(existSubsProposal) {
    return http(axiosUrl).put("/existing-substandard-proposals", existSubsProposal);
  }

  search(existSubsProposal) {
    return http(axiosUrl).post("/existing-substandard-proposals/search", existSubsProposal);
  }

  add(existSubsProposal) {
    return http(axiosUrl).post("/existing-substandard-proposals/", existSubsProposal);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/existing-substandard-proposals?seqId=${seqId}`);
  }
  
}

export default new existingSubstandardProposalDataService();
