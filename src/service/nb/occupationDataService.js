import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class occupationDataService {
  search(searchObj) {
    return http(axiosUrl).post("/occupations/search", searchObj);
  }

  addOccupation(addOccupationObj) {
    return http(axiosUrl).post("/occupations/", addOccupationObj);
  }

  saveOccupation(occupationObj) {
    return http(axiosUrl).put("/occupations/", occupationObj)
  }

  getId(seqId) {
    return http(axiosUrl).get(`/occupations/${seqId}`);
  }

  deleteOccupation(seqId) {
    return http(axiosUrl).delete(`/occupations?seqId=${seqId}`);
  }

}   

export default new occupationDataService();
