import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('nb');

class nbExchangeRateDataService {

  save(exchangeRateObj) {
    return http(axiosUrl).put("/exchange-rates", exchangeRateObj);
  }

  search(exchangeRateObj) {
    return http(axiosUrl).post("/exchange-rates/search", exchangeRateObj);
  }

  add(exchangeRateObj) {
    return http(axiosUrl).post("/exchange-rates/", exchangeRateObj);
  }

  delete(seqId) {
    return http(axiosUrl).delete(`/exchange-rates?seqId=${seqId}`);
  }
  
}

export default new nbExchangeRateDataService();
