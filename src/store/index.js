import { createStore } from "vuex";
import master from "../store/admin/masterstore";
import proposalstatus from "../store/nb/proposalstatusstore";
import exclusion from "../store/nb/exclusioncodestore";
import occupation from "../store/nb/occupationstore";
import chartofaccount from "../store/accounting/chartofaccountstore";
import codestringglentries from "../store/accounting/codestringglentriesstore";
import planmaster from "./planmaster/planmasterstore";
import proposalinput from "../store/nb/proposalinputstore";
import exchangerate from "../store/nb/exchangeratestore";
import jetcase from "../store/nb/jetcasestore";
import sanctionlist from "../store/nb/sanctionliststore";
import eligibleproductcode from "../store/nb/eligibleproductcodestore";
import occupationclass from "../store/nb/occupationclassstore";
import nationality from "../store/nb/nationalitystore";
import paymentmethod from "../store/nb/paymentmethodstore";
import maxsumrider from "../store/nb/maxsumriderstore";
import healthquestion from "../store/nb/healthquestionstore";
import existingsubstandardproposal from "../store/nb/existingsubstandardproposalstore";
import singlepremiumpolicy from "../store/nb/singlepremiumpolicystore";
import standardtat from "../store/nb/standardtatstore.js";
import loadingrange from "../store/nb/loadingrangestore";
import uwapprovallimit from "../store/nb/uwapprovallimitstore";
import uwgrouptable from "../store/nb/uwgrouptablestore";
import servicingunit from "../store/ps/servicingunitstore";
import alterationcontrol from "../store/ps/alterationcontrolbyglobalstore";
import alterationstatus from "../store/ps/alterationstatusstore";
import docandmedicalreq from "../store/ps/docandmedicalreqstore";
import docandmedicalcode from "../store/ps/docandmedicalcodestore";
import pjpandunitmapping from "../store/ps/pjpandunitmappingstore";
import breadcrumb from "../store/breadcrumb/breadCrumbStore";
import financialclosingperiod from "../store/accounting/financialclosingperiodstore";
import session from "./security/sessionstore";

export default createStore({
  modules: {
    session,
    master,
    proposalstatus,
    exclusion,
    occupation,
    planmaster,
    chartofaccount,
    proposalinput,
    exchangerate,
    jetcase,
    sanctionlist,
    eligibleproductcode,
    occupationclass,
    nationality,
    financialclosingperiod,
    paymentmethod,
    breadcrumb,
    codestringglentries,
    maxsumrider,
    healthquestion,
    existingsubstandardproposal,
    singlepremiumpolicy,
    standardtat,
    loadingrange,
    uwapprovallimit,
    uwgrouptable,
    servicingunit,
    alterationcontrol,
    docandmedicalreq,
    docandmedicalcode,
    alterationstatus,
    pjpandunitmapping,
  },
});
