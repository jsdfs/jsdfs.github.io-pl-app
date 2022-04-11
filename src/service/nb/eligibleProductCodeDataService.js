import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig("nb");

class eligibleProductCodeDataService {
  save(prodCodeObj) {
    return http(axiosUrl).put("/eligible-product-codes", prodCodeObj);
  }

  search(prodCodeObj) {
    return http(axiosUrl).post("/eligible-product-codes/search", prodCodeObj);
  }

  add(prodCodeObj) {
    return http(axiosUrl).post("/eligible-product-codes/", prodCodeObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/eligible-product-codes?seqId=${seqId}`);
  }
}

export default new eligibleProductCodeDataService();
