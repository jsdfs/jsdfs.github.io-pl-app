import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class paymentMethodDataService {

  save(paymentMethodObj) {
    return http(axiosUrl).put("/payment-methods", paymentMethodObj);
  }

  search(paymentMethodObj) {
    return http(axiosUrl).post("/payment-methods/search", paymentMethodObj);
  }

  add(paymentMethodObj) {
    return http(axiosUrl).post("/payment-methods/", paymentMethodObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/payment-methods?seqId=${seqId}`);
  }
  
}

export default new paymentMethodDataService();
