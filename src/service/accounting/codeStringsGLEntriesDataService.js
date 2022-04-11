import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ac');

class codeStringsGLEntriesDataService {

  save(codeStringObj) {
    return http(axiosUrl).put("/code-strings-gl-entries", codeStringObj);
  }

  search(codeStringObj) {
    return http(axiosUrl).post("/code-strings-gl-entries/search", codeStringObj);
  }

  add(codeStringObj) {
    return http(axiosUrl).post("/code-strings-gl-entries/", codeStringObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/code-strings-gl-entries?seqId=${seqId}`);
  }
  
}

export default new codeStringsGLEntriesDataService();
