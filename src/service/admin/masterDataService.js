import { initAxiosConfig, http } from "../common/httpcommon.js";

let axiosUrl = initAxiosConfig('admin');

class MasterDataService {
  search(searchObj) {
    return http(axiosUrl).post("/masters/search", searchObj);
  }

  getDetailByHeaderId(id, isDetail) {
    let result = http(axiosUrl).get(`/masters/details?id=${id}`);

    if (isDetail) {
      result = http(axiosUrl).get(`/masters/details?id=${id}&details=${isDetail}`);
    }

    return result;
  }

  addMasterHeader(addMastersObj) {
    return http(axiosUrl).post("/masters", addMastersObj);
  }

  saveMasterHeader(mastersObj) {
    return http(axiosUrl).put("/masters", mastersObj);
  }

  saveMasterDetail(mastersObj) {
    return http(axiosUrl).post("/masters/details", mastersObj);
  }
  
  deleteMasterDetail(mastersObj) {
    return http(axiosUrl).delete("/masters/details", { data: mastersObj });
  }

  getDetailByHeaderCode(code) {
    return http(axiosUrl).get(`/masters/details/codes?code=${code}`);
    // .then(res => {
    //   console.log('test: ' + JSON.stringify(res.data.map(concateCodeDesc)));
    //   return res.data.map(concateCodeDesc);
    // }); 
  }
  
  getDetailCode(code){
    return http(axiosUrl).get(`/masters/details/codes?code=${code}`);
  }

  getCode(paramObj) {
    return http(axiosUrl).get("/masters/codes", { params: paramObj });
  }

	getPlanStatus() {
		return fetch("data/plancode/planstatus.json");
	}

	getProdCategory() {
		return fetch("data/plancode/productCategory.json");
	}
}

export default new MasterDataService();
