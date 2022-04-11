import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig("nb");

class healthQuestionDataService {
  save(healthQuestionObj) {
    return http(axiosUrl).put("/health-questions", healthQuestionObj);
  }

  search(healthQuestionObj) {
    return http(axiosUrl).post("/health-questions/search", healthQuestionObj);
  }

  add(healthQuestionObj) {
    return http(axiosUrl).post("/health-questions/", healthQuestionObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/health-questions?seqId=${seqId}`);
  }
}

export default new healthQuestionDataService();
