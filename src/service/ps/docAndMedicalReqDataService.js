import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('ps');

class DocAndMedicalReqByGlobalDataService {
  search(searchObj) {
    return http(axiosUrl).post("/document-medical-requirements/search", searchObj);
  }

  addDocAndMedicalReq(addDocAndMedicalReqObj) {
    return http(axiosUrl).post("/document-medical-requirements", addDocAndMedicalReqObj);
  }

  saveDocAndMedicalReq(docAndMedicalReqObj) {
    return http(axiosUrl).put("/document-medical-requirements", docAndMedicalReqObj)
  }

  deleteDocAndMedicalReq(seqId) {
    return http(axiosUrl).delete(`/document-medical-requirements?seqId=${seqId}`);
  }

  getId(id) {
    return http(axiosUrl).get(`/document-medical-requirements/${id}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/document-medical-requirements/codes", { params: paramObj });
  }

}

export default new DocAndMedicalReqByGlobalDataService();
