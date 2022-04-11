import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "./components/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/planmaster",
    name: "planmaster",
    module: "planmaster",
    component: () => import("./components/admin/planmaster/PlanMaintView.vue"),
  },
  {
    path: "/planmasterdet",
    name: "planmasterdet",
    module: "planmaster",
    component: () =>
      import("./components/admin/planmaster/PlanMaintDetail.vue"),
    children: [
      {
        path: "/premrateind",
        name: "premrateind",
        module: "planmaster",
        component: () =>
          import("./components/admin/planmaster/PremiumRateKeyIndicator.vue"),
      },
    ],
  },
  {
    path: "/combkeyselect",
    name: "combkeyselect",
    module: "planmaster",
    component: () => import("./components/common/planmaster/CombKeySelect.vue"),
  },
  {
    path: "/masters",
    name: "masters",
    component: () => import("./components/admin/mastercode/MasterView.vue"),
  },
  {
    path: "/sanctionlistadd",
    name: "sanctionlistadd",
    component: () => import("./components/nb/maintenance/SanctionListAdd.vue"),
  },
  {
    path: "/nbexchangerateadd",
    name: "nbexchangerateadd",
    component: () =>
      import("./components/nb/maintenance/NBExchangeRateAdd.vue"),
  },
  {
    path: "/nbexchangeratedet",
    name: "nbexchangeratedet",
    component: () =>
      import("./components/nb/maintenance/NBExchangeRateDetail.vue"),
  },
  {
    path: "/jetcaseadd",
    name: "jetcaseadd",
    component: () => import("./components/nb/maintenance/JetCaseAdd.vue"),
  },
  {
    path: "/jetcasedet",
    name: "jetcasedet",
    component: () => import("./components/nb/maintenance/JetCaseDetail.vue"),
  },
  {
    path: "/nbexchangerate",
    name: "nbexchangerate",
    component: () =>
      import("./components/nb/maintenance/NBExchangeRateView.vue"),
  },
  {
    path: "/jetcase",
    name: "jetcase",
    component: () => import("./components/nb/maintenance/JetCaseView.vue"),
  },
  {
    path: "/exclusioncode",
    name: "exclusioncode",
    component: () =>
      import("./components/nb/maintenance/ExclusionCodeView.vue"),
  },
  {
    path: "/eligibleproductcode",
    name: "eligibleproductcode",
    component: () =>
      import("./components/nb/maintenance/EligibleProductCodeView.vue"),
  },
  {
    path: "/occupationclass",
    name: "occupationclass",
    component: () =>
      import("./components/nb/maintenance/OccupationClassView.vue"),
  },
  {
    path: "/paymentmethod",
    name: "paymentmethod",
    component: () =>
      import("./components/nb/maintenance/PaymentMethodView.vue"),
  },
  {
    path: "/maxsumrider",
    name: "maxsumrider",
    component: () => import("./components/nb/maintenance/MaxSumRiderView.vue"),
  },
  {
    path: "/healthquestion",
    name: "healthquestion",
    component: () =>
      import("./components/nb/maintenance/HealthQuestionView.vue"),
  },
  {
    path: "/existingsubstandardproposal",
    name: "existingsubstandardproposal",
    component: () =>
      import("./components/nb/maintenance/ExistingSubstandardProposalView.vue"),
  },
  {
    path: "/singlepremiumpolicy",
    name: "singlepremiumpolicy",
    component: () =>
      import("./components/nb/maintenance/SinglePremiumPolicyView.vue"),
  },
  {
    path: "/nationality",
    name: "nationality",
    component: () => import("./components/nb/maintenance/NationalityView.vue"),
  },
  {
    path: "/sanctionlist",
    name: "sanctionlist",
    component: () => import("./components/nb/maintenance/SanctionListView.vue"),
  },
  {
    path: "/sanctionlistdet",
    name: "sanctionlistdet",
    component: () =>
      import("./components/nb/maintenance/SanctionListDetail.vue"),
  },
  {
    path: "/chartaccountdet",
    name: "chartaccountdet",
    component: () =>
      import("./components/accounting/maintenance/ChartOfAccountDetail.vue"),
  },
  {
    path: "/occupation",
    name: "occupation",
    component: () => import("./components/nb/maintenance/OccupationView.vue"),
  },
  {
    path: "/proposalstatus",
    name: "proposalstatus",
    component: () =>
      import("./components/nb/maintenance/ProposalStatusView.vue"),
  },
  {
    path: "/proposalinputdet",
    name: "proposalinputdet",
    component: () =>
      import("./components/nb/process/proposalinput/ProposalInputDetail.vue"),
  },
  {
    path: "/codestring",
    name: "codestring",
    component: () =>
      import("./components/accounting/maintenance/CodeStringsGLEntriesView.vue"),
  },
  {
    path: "/codestringdet",
    name: "codestringdet",
    component: () =>
      import("./components/accounting/maintenance/CodeStringsGLEntriesDetail.vue"),
  },
  {
    path: "/codestringadd",
    name: "codestringadd",
    component: () =>
      import("./components/accounting/maintenance/CodeStringsGLEntriesAdd.vue"),
  },
  {
    path: "/financialclosing",
    name: "financialclosing",
    component: () =>
      import("./components/accounting/maintenance/FinancialClosingPeriodView.vue"),
  },
  {
    path: "/financialclosingdet",
    name: "financialclosingdet",
    component: () =>
      import("./components/accounting/maintenance/FinancialClosingPeriodDetail.vue"),
  },
  {
    path: "/financialclosingadd",
    name: "financialclosingadd",
    component: () =>
      import("./components/accounting/maintenance/FinancialClosingPeriodAdd.vue"),
  },
  {
    path: "/chartofaccount",
    name: "chartofaccount",
    component: () =>
      import("./components/accounting/maintenance/ChartOfAccountView.vue"),
  },
  {
    path: "/chartofaccountadd",
    name: "chartofaccountadd",
    component: () =>
      import("./components/accounting/maintenance/ChartOfAccountAdd.vue"),
  },
  {
    path: "/servicingunit",
    name: "servicingunit",
    component: () =>
      import("./components/ps/maintenance/ServicingUnitAndPostcodeView.vue"),
  },
  {
    path: "/pjpunitmapping",
    name: "pjpunitmapping",
    component: () =>
      import("./components/ps/maintenance/PJPandUnitMappingView.vue"),
  },
  {
    path: "/proposalstatus",
    name: "proposalstatus",
    component: () =>
      import("./components/nb/maintenance/ProposalStatusView.vue"),
  },
  {
    path: "/uwapprovallimit",
    name: "uwapprovallimit",
    component: () =>
      import("./components/nb/maintenance/UwApprovalLimitView.vue"),
  },
  {
    path: "/uwapprovallimitadd",
    name: "uwapprovallimitadd",
    component: () =>
      import("./components/nb/maintenance/UwApprovalLimitAdd.vue"),
  },
  {
    path: "/uwapprovallimitdet",
    name: "uwapprovallimitdet",
    component: () =>
      import("./components/nb/maintenance/UwApprovalLimitDetail.vue"),
  },
  {
    path: "/standardtat",
    name: "standardtat",
    component: () => import("./components/nb/maintenance/StandardTATView.vue"),
  },
  {
    path: "/exclusioncode",
    name: "exclusioncode",
    component: () =>
      import("./components/nb/maintenance/ExclusionCodeView.vue"),
  },
  {
    path: "/exclusioncodeadd",
    name: "exclusioncodeadd",
    component: () => import("./components/nb/maintenance/ExclusionCodeAdd.vue"),
  },
  {
    path: "/exclusioncodedet",
    name: "exclusioncodedet",
    component: () =>
      import("./components/nb/maintenance/ExclusionCodeDetail.vue"),
  },
  {
    path: "/loadingrange",
    name: "loadingrange",
    component: () => import("./components/nb/maintenance/LoadingRangeView.vue"),
  },
  {
    path: "/loadingrangeadd",
    name: "loadingrangeadd",
    component: () => import("./components/nb/maintenance/LoadingRangeAdd.vue"),
  },
  {
    path: "/loadingrangedet",
    name: "loadingrangedet",
    component: () =>
      import("./components/nb/maintenance/LoadingRangeDetail.vue"),
  },
  {
    path: "/occupation",
    name: "occupation",
    component: () => import("./components/nb/maintenance/OccupationView.vue"),
  },
  {
    path: '/alterationcontrol',
    name: 'alterationcontrol',
    component: () => import('./components/ps/maintenance/AlterationControlByGlobalView.vue')
  },
  {
      path: '/alterationcontroladd',
      name: 'alterationcontroladd',
      component: () => import('./components/ps/maintenance/AlterationControlByGlobalAdd.vue')
  },   
  {
      path: '/alterationcontroldet',
      name: 'alterationcontroldet',
      component: () => import('./components/ps/maintenance/AlterationControlByGlobalDetail.vue')
  },       
  {
      path: '/docandmedicalreq',
      name: 'docandmedicalreq',
      component: () => import('./components/ps/maintenance/DocAndMedicalReqView.vue')
  },
  {
      path: '/docandmedicalreqadd',
      name: 'docandmedicalreqadd',
      component: () => import('./components/ps/maintenance/DocAndMedicalReqAdd.vue')
  },   
  {
      path: '/docandmedicalreqdet',
      name: 'docandmedicalreqdet',
      component: () => import('./components/ps/maintenance/DocAndMedicalReqDetail.vue')
  }, 
  {
    path: '/docandmedicalcode',
    name: 'docandmedicalcode',
    component: () => import('./components/ps/maintenance/DocAndMedicalCodeView.vue')
  },
  {
    path: "/sysdates",
    name: "sysdates",
    component: () => import("./components/EmptyPage.vue"),
  },
  {
    path: "/formlayout",
    name: "formlayout",
    component: () => import("./components/FormLayoutDemo.vue"),
  },
  {
    path: "/proposalinput",
    name: "proposalinput",
    component: () =>
      import("./components/nb/process/proposalinput/ProposalInputMainView.vue"),
  },
  {
    path: "/input",
    name: "input",
    component: () => import("./components/InputDemo.vue"),
  },
  {
    path: "/floatlabel",
    name: "floatlabel",
    component: () => import("./components/FloatLabelDemo.vue"),
  },
  {
    path: "/invalidstate",
    name: "invalidstate",
    component: () => import("./components/InvalidStateDemo.vue"),
  },
  {
    path: "/button",
    name: "button",
    component: () => import("./components/ButtonDemo.vue"),
  },
  {
    path: "/table",
    name: "table",
    component: () => import("./components/TableDemo.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () => import("./components/ListDemo.vue"),
  },
  {
    path: "/tree",
    name: "tree",
    component: () => import("./components/TreeDemo.vue"),
  },
  {
    path: "/panel",
    name: "panel",
    component: () => import("./components/PanelsDemo.vue"),
  },
  {
    path: "/overlay",
    name: "overlay",
    component: () => import("./components/OverlayDemo.vue"),
  },
  {
    path: "/menu",
    component: () => import("./components/MenuDemo.vue"),
    children: [
      {
        path: "",
        component: () => import("./components/menu/PersonalDemo.vue"),
      },
      {
        path: "/menu/seat",
        component: () => import("./components/menu/SeatDemo.vue"),
      },
      {
        path: "/menu/payment",
        component: () => import("./components/menu/PaymentDemo.vue"),
      },
      {
        path: "/menu/confirmation",
        component: () => import("./components/menu/ConfirmationDemo.vue"),
      },
    ],
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("./components/MessagesDemo.vue"),
  },
  {
    path: "/file",
    name: "file",
    component: () => import("./components/FileDemo.vue"),
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("./components/ChartDemo.vue"),
  },
  {
    path: "/misc",
    name: "misc",
    component: () => import("./components/MiscDemo.vue"),
  },
  {
    path: "/crud",
    name: "crud",
    component: () => import("./pages/CrudDemo.vue"),
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("./pages/TimelineDemo.vue"),
  },
  {
    path: "/empty",
    name: "empty",
    component: () => import("./components/EmptyPage.vue"),
  },
  {
    path: "/documentation",
    name: "documentation",
    component: () => import("./components/Documentation.vue"),
  },
  {
    path: "/blocks",
    name: "blocks",
    component: () => import("./components/BlocksDemo.vue"),
  },
  {
    path: "/icons",
    name: "icons",
    component: () => import("./components/IconsDemo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
