export default {
  namespaced: true,
  state() {
    return {
      planMasterSearch: {},
      combKeyObj: {
        combKey: "",
        tablNo: "",
      },
      combKeySelect: [
        { name: "Distribution Channel", key: "D" },
        { name: "Gender", key: "G" },
        { name: "Smoker / Non smoker", key: "S" },
        { name: "Coverage Expiry Age", key: "C" },
        { name: "Pension Age / Benefit Expiry Age", key: "A" },
        { name: "Premium Payment Expiry Age", key: "R" },
        { name: "Coverage Term", key: "T" },
        { name: "Benefit Term", key: "B" },
        { name: "Premium Payment Period", key: "Y" },
        { name: "Benefit Component Code", key: "O" },
        { name: "Monthly / Yearly", key: "M" },
      ],
      planMasterObj: {
        planHeader: {
          planCode: "01.02.45",
          planName: "TUGU DANA MAKSIMA",
          planStatus: "A",
          approvedDt: "21/06/2013",
          launchDtFr: "21/06/2013",
          launchDtTo: "21/06/2099",
          prodCategory: "ILP",
          benefitType: "A - Approved",
          participationCode: "N - Non Participating",
          planType: "B - Base",
          planCurrency: "keyR - keyR",
          division: "L - Life",
          pprInd: "N - No",
          bikRkeyer: "N - No",
          notionalPlan: "N - No",
        },
        planInd: {
          commBackDt: 84,
          commForwardDt: 0,
          nbProdBackDt: 12,
          nbProdForwardDt: 0,
          coolOffPeriod: 14,
          maxRkeyerCov: "",
          allowBasicRkeyer: "POWERLKREG",
          allowRkeyerRkeyer: "",
          compulsoryRkeyer: "",
        },
        premRateInd: {
          singlePremium: "N",
          premiumAgeBasis: "R",
          ageBasedOn: "EA",
          automaticPremium: "N",
          minInitPremMonthly: "0",
          premRateFormula: "FA",
          premRateDate: "COMM",
          loadingRateFormula: "FAPBR",
          benefitComponent: "ADDB",
          cashFlowAgeBand: "BSNPL",
          minAnnPrem: "MIN 200K",
          minPremPerPymt: "MIN 200K",
          minPremPerPlan: "MIN 200K",
          allowPremMethod: "ALL",
          noClaimDisc: "",
          renewDisc: "",
          famDisc: "",
          noClaimBonus: "",
          maxTPPerLife: "",
          maxSingPremPerLife: "",
          serviceTax: "",
          staffDisc: "",
          advPremPymtDisc: "",
          advPremPymtBal: "",
          stampDuty: "",
          policyFee: "",
          toleranceLevel: "",
          premiumDiscount: "",
          guaranteedAnnPymt: "3G15/3G15+",
          guaranteedTriennialCashPymt: "BJK2",
          assetsShare: "TABLE1",
          extraLoadingForInstPrem: "10%",
          sumAssuredByAnnPrem: "",
          sumAssuredRate: "",
          guaranteedReviseSum: "",
          cashFlowProfitLoading: "",
          cashFlowPrem: "",
          cashFlowSurrenderVal: "",
        },
      },
    };
  },
};
