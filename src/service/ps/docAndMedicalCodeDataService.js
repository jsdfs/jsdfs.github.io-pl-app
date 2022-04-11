import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ps');

class DocAndMedicalCodeByGlobalDataService {
  search(searchObj) {
    return http(axiosUrl).post("/document-medical-codes/search", searchObj);
  }

  addDocAndMedicalCode(addDocAndMedicalCodeObj) {
    console.log("see jhad", addDocAndMedicalCodeObj)
    return http(axiosUrl).post("/document-medical-codes", addDocAndMedicalCodeObj);
  }

  saveDocAndMedicalCode(docAndMedicalCodeObj) {
    return http(axiosUrl).put("/document-medical-codes", docAndMedicalCodeObj)
  }

  deleteDocAndMedicalCode(seqId) {
    return http(axiosUrl).delete(`/document-medical-codes?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/document-medical-codes/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/document-medical-codes/codes", { params: paramObj });
  }

}

export default new DocAndMedicalCodeByGlobalDataService();
