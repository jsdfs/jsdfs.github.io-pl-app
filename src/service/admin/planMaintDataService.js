class PlanMaintDataService {
  getPlanObj() {
    return fetch("data/plancode/plandata.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getPlanStatus() {
    return fetch("data/plancode/planstatus.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getProposalInput() {
    return fetch("data/proposal/proposaldata.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getProposalInsured() {
    return fetch("data/proposal/proposalinsuredetails.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getProposalPolicyholder() {
    return fetch("data/proposal/proposalpolicyholderdetails.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getChartAccount() {
    return fetch("data/chartaccount/chartdata.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getProdCategory() {
    return fetch("data/plancode/productCategory.json").then((res) => {
      return res.json();
    });
  }

  getServicingUnit() {
    return fetch("data/servicingunit/servicingunitdata.json").then((res) => {
      return res.json();
    });
  }

  getExchangeRate() {
    return fetch("data/maintenance/nbexchangerate.json").then((res) => {
      return res.json();
    });
  }

  getJetCase() {
    return fetch("data/maintenance/jetcase.json").then((res) => {
      return res.json();
    });
  }

  getUnderwriterApproval() {
    return fetch("data/underwriter/underwriterapproval.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getStandardTat() {
    return fetch("data/standardtat/standardtat.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getLoadingRange() {
    return fetch("data/loadingrange/loadingrange.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
  }

  getCombKey() {
    return fetch("data/plancode/combkey.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.data;
      });
  }

  search() {}
}

export default new PlanMaintDataService();
