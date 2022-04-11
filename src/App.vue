<template>
  <div :class="containerClass" @click="onWrapperClick">
    <AppTopBar
      @menu-toggle="onMenuToggle"
      :menu="menu"
      v-model="selectedMenuItem"
    />

    <div class="layout-main-container">
      <div class="layout-main">
        <!-- <div class="card">  
          <Breadcrumb
            :home="home"
            :model="items"
            style="border: none; padding: 0px"
          >
            <template #item="{ item }">
              <template v-if="item.label == 'Home'">
                <a :href="item.url">{{ item.label }}</a>
              </template>

              <template v-else>
                {{ item.label }}
              </template>
            </template>
          </Breadcrumb>
        </div> -->

        <router-view />
      </div>
      <AppFooter />
    </div>

    <AppConfig
      :layoutMode="layoutMode"
      @layout-change="onLayoutChange"
      :menu="menu"
      :selectedMenuItem="selectedMenuItem"
    />
    <transition name="layout-mask">
      <div
        class="layout-mask p-component-overlay"
        v-if="mobileMenuActive"
      ></div>
    </transition>
  </div>
</template>

<script>
import AppTopBar from "./AppTopbar.vue";
import AppConfig from "./AppConfig.vue";
import AppFooter from "./AppFooter.vue";
// import { useStore } from "vuex";
// import { computed } from "vue";
// import { ref } from "vue";

export default {
  // setup() {
  //   const store = useStore();
  //   const items = computed(() => store.getters["breadcrumb/getBreadCrumbObj"]);
  //   const selectedMenuItem = ref("Configuration");

  //   return {
  //     items,
  //     selectedMenuItem,
  //   };
  // },
  data() {
    return {
      selectedMenuItem: "Configuration",
      layoutMode: "overlay",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false,
      home: { label: "Home", url: "/" },
      menu: [
        {
          // label: 'Home',
          items: [
            // {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
            {
              label: "Configuration",
              icon: "pi pi-fw pi-bookmark",
              items: [
                {
                  label: "Maintenance",
                  icon: "",
                  items: [
                    {
                      label: "Plan Config",
                      icon: "pi pi-fw pi-briefcase",
                      to: "/planmaster",
                    },
                    {
                      label: "Master Codes",
                      icon: "pi pi-fw pi-paperclip",
                      to: "/masters",
                    },
                    {
                      label: "System Dates",
                      icon: "pi pi-fw pi-eject",
                      to: "/sysdates",
                    },
                  ],
                },
              ],
            },
            {
              label: "New Business",
              icon: "pi pi-fw pi-sitemap",
              items: [
                {
                  label: "Maintenance",
                  icon: "",
                  items: [
                    {
                      label: "Proposal Status Control",
                      icon: "pi pi-fw pi-slack",
                      to: "/proposalstatus",
                    },
                    {
                      label: "Underwriter Approval Limit",
                      icon: "pi pi-fw pi-moon",
                      to: "/uwapprovallimit",
                    },
                    {
                      label: "Standard TAT",
                      icon: "pi pi-fw pi-sun",
                      to: "/standardtat",
                    },
                    {
                      label: "Exclusion Code",
                      icon: "pi pi-fw pi-youtube",
                      to: "/exclusioncode",
                    },
                    {
                      label: "Loading Range",
                      icon: "pi pi-fw pi-vimeo",
                      to: "/loadingrange",
                    },
                    {
                      label: "Occupation",
                      icon: "pi pi-fw pi-book",
                      to: "/occupation",
                    },
                    {
                      label: "Sanction List",
                      icon: "pi pi-fw pi-compass",
                      to: "/sanctionlist",
                    },
                    {
                      label: "Exchange Rate",
                      icon: "pi pi-fw pi-ticket",
                      to: "/nbexchangerate",
                    },
                  ],
                },
                {
                  label: "Enquiry",
                  icon: "",
                  items: [
                    {
                      label: "Jet Case",
                      icon: "pi pi-fw pi-sitemap",
                      to: "/jetcase",
                    },
                    {
                      label: "Underwriter Approval Limit",
                      icon: "pi pi-fw pi-sliders-h",
                      to: "/uwapprovallimit",
                    },
                    {
                      label: "Standard TAT",
                      icon: "pi pi-fw pi-heart",
                      to: "/standardtat",
                    },
                    {
                      label: "Exclusion Code",
                      icon: "pi pi-fw pi-comment",
                      to: "/exclusioncode",
                    },
                    {
                      label: "Loading Range",
                      icon: "pi pi-fw pi-briefcase",
                      to: "/loadingrange",
                    },
                    {
                      label: "Occupation",
                      icon: "pi pi-fw pi-share-alt",
                      to: "/occupation",
                    },
                    {
                      label: "Sanction List",
                      icon: "pi pi-fw pi-paperclip",
                      to: "/sanctionlist",
                    },
                    {
                      label: "Exchange Rate",
                      icon: "pi pi-fw pi-bell",
                      to: "/nbexchangerate",
                    },
                  ],
                },
                {
                  label: "Process",
                  icon: "",
                  items: [
                    {
                      label: "Proposal Input",
                      icon: "pi pi-fw pi-images",
                      to: "/proposalinput",
                    },
                    {
                      label: "Proposal Status Control",
                      icon: "pi pi-fw pi-dollar",
                      to: "/proposalstatus",
                    },
                    {
                      label: "Underwriter Approval Limit",
                      icon: "pi pi-fw pi-eye",
                      to: "/uwapprovallimit",
                    },
                    {
                      label: "Standard TAT",
                      icon: "pi pi-fw pi-table",
                      to: "/standardtat",
                    },
                    {
                      label: "Exclusion Code",
                      icon: "pi pi-fw pi-lock-open",
                      to: "/exclusioncode",
                    },
                  ],
                },
                {
                  label: "Report",
                  icon: "",
                  items: [
                    {
                      label: "Proposal Status Control",
                      icon: "pi pi-fw pi-clone",
                      to: "/proposalstatus",
                    },
                    {
                      label: "Underwriter Approval Limit",
                      icon: "pi pi-fw pi-file",
                      to: "/uwapprovallimit",
                    },
                    {
                      label: "Standard TAT",
                      icon: "pi pi-fw pi-trash",
                      to: "/standardtat",
                    },
                    {
                      label: "Exclusion Code",
                      icon: "pi pi-fw pi-calendar",
                      to: "/exclusioncode",
                    },
                    {
                      label: "Loading Range",
                      icon: "pi pi-fw pi-bars",
                      to: "/loadingrange",
                    },
                    {
                      label: "Occupation",
                      icon: "pi pi-fw pi-mobile",
                      to: "/occupation",
                    },
                    {
                      label: "Sanction List",
                      icon: "pi pi-fw pi-map-marker",
                      to: "/sanctionlist",
                    },
                    {
                      label: "Exchange Rate",
                      icon: "pi pi-fw pi-chart-bar",
                      to: "/nbexchangerate",
                    },
                  ],
                },
              ],
            },
            {
              label: "Policy Servicing",
              icon: "pi pi-fw pi-sitemap",
              items: [
                {
                  label: "Maintenance",
                  icon: "",
                  items: [
                    {
                      label: "Alteration Control By Global",
                      icon: "pi pi-fw pi-chart-bar",
                      to: "/alterationcontrol",
                    },
                    {
                      label: "Servicing Unit and Postcode Mapping",
                      icon: "pi pi-fw pi-map-marker",
                      to: "/servicingunit",
                    },
                    {
                      label: "PJP and Unit Mapping",
                      icon: "pi pi-fw pi-bars",
                      to: "/pjpunitmapping",
                    },
                  ],
                },
                {
                  label: "Enquiry",
                  icon: "",
                  items: [],
                },
                {
                  label: "Process",
                  icon: "",
                  items: [],
                },
                {
                  label: "Report",
                  icon: "",
                  items: [],
                },
              ],
            },
            {
              label: "Accounting",
              icon: "pi pi-fw pi-sitemap",
              items: [
                {
                  label: "Maintenance",
                  icon: "",
                  items: [
                    {
                      label: "Chart Of Account",
                      icon: "pi pi-fw pi-paperclip",
                      to: "/chartofaccount",
                    },
                    {
                      label: "Code Strings and GL Entries",
                      icon: "pi pi-fw pi-clone",
                      to: "/codestring",
                    },
                    {
                      label: "Financial Closing Period",
                      icon: "pi pi-fw pi-paperclip",
                      to: "/financialclosing",
                    },
                  ],
                },
                {
                  label: "Enquiry",
                  icon: "",
                  items: [],
                },
                {
                  label: "Process",
                  icon: "",
                  items: [],
                },
                {
                  label: "Report",
                  icon: "",
                  items: [],
                },
              ],
            },
          ],
        },
      ],
      // menu: [
      //   {
      //     // label: 'Home',
      //     items: [
      //       // {label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/'},
      //       {
      //         label: "Configuration",
      //         icon: "pi pi-fw pi-bookmark",
      //         items: [
      //           { label: "Plan Config", icon: "", to: "/plancode" },
      //           { label: "Master Codes", icon: "", to: "/masters" },
      //           { label: "System Dates", icon: "", to: "/sysdates" },
      //         ],
      //       },
      //       {
      //         label: "New Business",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [
      //               {
      //                 label: "Proposal Status Control",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/proposalstatus",
      //               },
      //               {
      //                 label: "Underwriter Approval Limit",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/uwapprovallimit",
      //               },
      //               {
      //                 label: "Standard TAT",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/standardtat",
      //               },
      //               {
      //                 label: "Exclusion Code",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/exclusioncode",
      //               },
      //               {
      //                 label: "Loading Range",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/loadingrange",
      //               },
      //               {
      //                 label: "Occupation",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/occupation",
      //               },
      //               {
      //                 label: "Sanction List",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/sanctionlist",
      //               },
      //               {
      //                 label: "Exchange Rate",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/nbexchangerate",
      //               },
      //               {
      //                 label: "Jet Case",
      //                 icon: "pi pi-fw pi-sitemap",
      //                 to: "/jetcase",
      //               },
      //             ],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [
      //               {
      //                 label: "Proposal Input",
      //                 icon: "",
      //                 to: "/proposalinput",
      //               },
      //             ],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Policy Servicing",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [
      //               {
      //                 label: "Servicing Unit and Postcode Mapping",
      //                 icon: "",
      //                 to: "/servicingunit",
      //               },
      //             ],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Accounting",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [
      //               {
      //                 label: "Chart Of Account",
      //                 icon: "",
      //                 to: "/chartofaccount",
      //               },
      //             ],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Coll & Payment",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Claim",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "Tax",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "AG Admin",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "AG Comp",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "RI",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "CS",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //       {
      //         label: "MISC",
      //         icon: "pi pi-fw pi-sitemap",
      //         items: [
      //           {
      //             label: "Maintenance",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Enquiry",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Process",
      //             icon: "",
      //             items: [],
      //           },
      //           {
      //             label: "Report",
      //             icon: "",
      //             items: [],
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   // {
      //   //     label: "Configuration", icon: 'pi pi-fw pi-sitemap',
      //   //     items:[
      //   //         { label: 'Master Codes', icon: 'pi pi-fw pi-list',  to: '/masters' },
      //   //         { label: 'System Dates', icon: 'pi pi-fw pi-calendar',  to: '/sysdates' },
      //   //     ]
      //   // },
      //   // {
      //   // 	label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
      //   // 	items: [
      //   // 		{label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout'},
      //   // 		{label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input'},
      //   //         {label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel"},
      //   //         {label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate"},
      //   // 		{label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button'},
      //   // 		{label: 'Table', icon: 'pi pi-fw pi-table', to: '/table'},
      //   // 		{label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
      //   // 		{label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
      //   // 		{label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
      //   // 		{label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
      //   // 		{label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menu'},
      //   // 		{label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
      //   // 		{label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
      //   // 		{label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
      //   // 		{label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
      //   // 	]
      //   // },
      //   // {
      //   //     label: 'UI Blocks',
      //   //     items: [
      //   //         {label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: "NEW"},
      //   //         {label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-vue'}
      //   //     ]
      //   // },
      //   // {
      //   //     label: 'Icons',
      //   //     items: [
      //   //         {label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/icons'}
      //   //     ]
      //   // },
      //   // {
      //   // 	label: 'Pages', icon: 'pi pi-fw pi-clone',
      //   // 	items: [
      //   // 		{label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/crud'},
      //   // 		{label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},
      //   // 		{label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty'},
      //   // 	]
      //   // },
      //   // {
      //   //     label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
      //   //     items: [
      //   //         {
      //   //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
      //   //             items: [
      //   //                 {
      //   //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
      //   //                     items: [
      //   //                         {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
      //   //                         {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
      //   //                         {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
      //   //                     ]
      //   //                 },
      //   //                 {
      //   //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
      //   //                     items: [
      //   //                         {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
      //   //                         {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
      //   //                     ]
      //   //                 },
      //   //             ]
      //   //         },
      //   //         {
      //   //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
      //   //             items: [
      //   //                 {
      //   //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
      //   //                     items: [
      //   //                         {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
      //   //                         {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
      //   //                         {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
      //   //                     ]
      //   //                 },
      //   //                 {
      //   //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
      //   //                     items: [
      //   //                         {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
      //   //                         {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
      //   //                     ]
      //   //                 }
      //   //             ]
      //   //         }
      //   //     ]
      //   // },
      //   // {
      //   //     label: 'Get Started',
      //   //     items: [
      //   //         {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},
      //   //         {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location = "https://github.com/primefaces/sakai-vue"}}
      //   //     ]
      //   // }
      // ],
    };
  },
  watch: {
    $route() {
      this.menuActive = false;
      this.$toast.removeAllGroups();
    },
  },
  methods: {
    onWrapperClick() {
      if (!this.menuClick) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }

      this.menuClick = false;
    },
    onSidebarClick() {
      this.menuClick = true;
    },
    onMenuItemClick(event) {
      if (event.item && !event.item.items) {
        this.overlayMenuActive = false;
        this.mobileMenuActive = false;
      }
    },
    onLayoutChange(layoutMode) {
      this.layoutMode = layoutMode;
    },
    addClass(element, className) {
      if (element.classList) element.classList.add(className);
      else element.className += " " + className;
    },
    removeClass(element, className) {
      if (element.classList) element.classList.remove(className);
      else
        element.className = element.className.replace(
          new RegExp(
            "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
            "gi"
          ),
          " "
        );
    },
    isDesktop() {
      return window.innerWidth >= 992;
    },
    isSidebarVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === "static") return !this.staticMenuInactive;
        else if (this.layoutMode === "overlay") return this.overlayMenuActive;
      }

      return true;
    },
  },
  computed: {
    containerClass() {
      return [
        "layout-wrapper",
        {
          "layout-overlay": this.layoutMode === "overlay",
          "layout-static": this.layoutMode === "static",
          "layout-static-sidebar-inactive":
            this.staticMenuInactive && this.layoutMode === "static",
          "layout-overlay-sidebar-active":
            this.overlayMenuActive && this.layoutMode === "overlay",
          "layout-mobile-sidebar-active": this.mobileMenuActive,
          "p-input-filled": this.$primevue.config.inputStyle === "filled",
          "p-ripple-disabled": this.$primevue.config.ripple === false,
          "layout-theme-light": this.$appState.theme.startsWith("saga"),
        },
      ];
    },
    logo() {
      return this.$appState.darkTheme
        ? "images/logo-white.svg"
        : "images/logo.svg";
    },
  },
  beforeUpdate() {
    if (this.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  },
  components: {
    AppTopBar: AppTopBar,
    AppConfig: AppConfig,
    AppFooter: AppFooter,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
