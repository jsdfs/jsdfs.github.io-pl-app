(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-030f6ab8"],{"04d1":function(e,t,n){var a=n("342f"),o=a.match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},"05e9":function(e,t,n){"use strict";n("bc40")},"0688":function(e,t,n){"use strict";n.r(t);n("ac1f"),n("841c");var a=n("7a23"),o={class:"card"},l={style:{"margin-bottom":"1%"}};function r(e,t,n,r,i,u){var c=Object(a["L"])("SearchSelection"),d=Object(a["L"])("Button"),s=Object(a["L"])("ProposalInputMainDataTable"),p=Object(a["M"])("tooltip");return Object(a["D"])(),Object(a["i"])("div",o,[Object(a["n"])(c,{listitemLs:r.listitemLs,inputForm:r.inputForm,onChangeItem:t[0]||(t[0]=function(e){return r.listitemLs=e})},null,8,["listitemLs","inputForm"]),Object(a["j"])("div",l,[Object(a["X"])(Object(a["n"])(d,{icon:"pi pi-search",style:{"background-color":"#000080"},class:"mr-2 float-start",onClick:e.search},null,8,["onClick"]),[[p,"Search",void 0,{top:!0}]]),Object(a["X"])(Object(a["n"])(d,{icon:"pi pi-filter-slash",class:"p-button-danger mr-2 float-start",onClick:e.clear},null,8,["onClick"]),[[p,"Clear",void 0,{top:!0}]]),Object(a["X"])(Object(a["n"])(d,{icon:"pi pi-plus",style:{"background-color":"#000080"},class:"float-end",onClick:e.add},null,8,["onClick"]),[[p,"Add",void 0,{top:!0}]])]),Object(a["n"])(s,{dataList:r.tableData},null,8,["dataList"])])}var i=n("e29b");function u(e,t,n,o,l,r){var i=Object(a["L"])("Column"),u=Object(a["L"])("DataTable");return Object(a["D"])(),Object(a["g"])(u,{value:n.dataList,dataKey:"seqId",responsiveLayout:"scroll",class:"p-datatable-sm",selectionMode:"single",onRowClick:o.rowClick},{default:Object(a["W"])((function(){return[Object(a["n"])(i,{field:"masterPolicyNo",header:"Master Policy No"}),Object(a["n"])(i,{field:"proposalNo",header:"Proposal No"}),Object(a["n"])(i,{field:"proposalStatus",header:"Proposal Status"}),Object(a["n"])(i,{field:"applicationBranchCode",header:"Application Branch Code"}),Object(a["n"])(i,{field:"lastModifiedUserID",header:"Last Modified User ID"}),Object(a["n"])(i,{field:"insuredName",header:"Insured Name"}),Object(a["n"])(i,{field:"policyholderName",header:"Policyholder Name"}),Object(a["n"])(i,{field:"planCode",header:"Plan Code"}),Object(a["n"])(i,{field:"policyCommenceDate",header:"Policy Commence Date"}),Object(a["n"])(i,{field:"nbProductionDate",header:"NB Production Date"}),Object(a["n"])(i,{field:"premiumMode",header:"Premium Mode"}),Object(a["n"])(i,{field:"sprpr",header:"Single Prem/Regular Prem + Rider"}),Object(a["n"])(i,{field:"rtu",header:"RTU"}),Object(a["n"])(i,{field:"stu",header:"STU"}),Object(a["n"])(i,{field:"stuInstallmentPremium",header:"STU Installment Premium"})]})),_:1},8,["value","onRowClick"])}n("e9c4");var c=n("6c02"),d={name:"ProposalInputMainDataTable",props:{dataList:Object},setup:function(){var e=Object(c["d"])(),t=function(t){e.push({name:"proposalinputdet",params:{data:JSON.stringify(t.data)}})};return{rowClick:t}}},s=n("6b0d"),p=n.n(s);const m=p()(d,[["render",u]]);var b=m,f=n("b4bf"),j={name:"ProposalInputMainView",components:{ProposalInputMainDataTable:b,SearchSelection:f["a"]},setup:function(){Object(a["A"])((function(){i["a"].getProposalInput().then((function(e){return d.value=e}))}));var e=Object(a["H"])({proposalType:"",distributionChannel:"",proposalStatus:"",proposalRefNo:"",masterPolicyNo:"",hqReceivedDate:"",branchReceivedProposalDate:"",nbProductionDate:"",policyCommenceDate:"",applicationBranchCode:"",agentCode:"",insuredName:"",premiumMode:"",policyholderName:"",planCode:"",entryDateFrom:"",entryDateTo:"",lastModifiedUserID:""}),t=Object(a["I"])([{name:"EXEC - TM EXECUTIVE",value:"EXEC"},{name:"MAXI - DANA MAXIMA",value:"MAXI"},{name:"PROINV - PRO INVESTMENT FORM",value:"PROINV"},{name:"SMP - SIMPLIFY FORM",value:"SMP"},{name:"STD - STANDARD FORM",value:"STD"}]),n=Object(a["I"])([{name:"# - NOT ANALYZE",value:"#"},{name:"AGY - AGENCY",value:"AGY"},{name:"BROKER - BROKER",value:"BROKER"},{name:"CCG - CAPTIVE COMMERCIAL",value:"CCG"},{name:"COINSURE - COIN INSSURANCE",value:"COINSURE"},{name:"DIRECTCORP - DIRECT CORPORATE",value:"DIRECTCORP"}]),o=Object(a["I"])([{name:"VALIDATE - VALIDATION",value:"VALIDATE"},{name:"PROP - PROPOSAL",value:"PROP"}]),l=Object(a["I"])([{name:"1090 - JAKARTA HEAD OFFICE",value:"1090"},{name:"1091 - JAKARTA HEAD OFFICE CAPTIVE",value:"1091"},{name:"32.73.01 - KANTOR PEMASARAN BANDUNG",value:"32.73.01"},{name:"32.03.01 - KANTOR PEMASARAN CIANJUR",value:"32.03.01"},{name:"32.74.01 - KANTOR PEMASARAN CIREBON",value:"32.74.01"},{name:"51.71.01 - KANTOR PEMASARAN DENPASAR",value:"51.71.01"}]),r=Object(a["I"])([{name:"A - TAHUNAN",value:"A"},{name:"H - SEMESTERAN",value:"H"},{name:"M - BULANAN",value:"M"},{name:"Q - KUARTAL",value:"Q"},{name:"S - SEKALIGUS",value:"S"}]),u=Object(a["I"])([{name:"01.02.45 - TUGU DANA MAKSIMA",value:"01.02.45"},{name:"01.06.01 - TM POWER LINK REGULAR",value:"01.06.01"},{name:"01.06.32 - TM POWER LINK SINGLE",value:"01.06.32"},{name:"02.06.01 - MANDIRI ASURANSI PESANGON SEJAHTERA",value:"02.06.01"},{name:"02.06.03 - TM EXECUTIVE SEVERANCE",value:"02.06.03"}]),c=Object(a["I"])([{name:"proposalType",label:"Proposal Type",type:"dropdown",options:t,optionLabel:"name",optionValue:"value"},{name:"distributionChannel",label:"Distribution Channel",type:"dropdown",options:n,optionLabel:"name",optionValue:"value"},{name:"proposalNo",label:"Proposal No",type:"input"},{name:"proposalStatus",label:"Proposal Status",type:"dropdown",options:o,optionLabel:"name",optionValue:"value"},{name:"proposalRefNo",label:"Proposal Ref No",type:"input"},{name:"masterPolicyNo",label:"Master Policy No",type:"input"},{name:"hqReceivedDate",label:"HQ Received Date",type:"date"},{name:"branchReceivedProposalDate",label:"Branch Received Proposal Date",type:"date"},{name:"nbProductionDate",label:"NB Production Date",type:"date"},{name:"policyCommenceDate",label:"Policy Commence Date",type:"date"},{name:"applicationBranchCode",label:"Application Branch Code",type:"dropdown",options:l,optionLabel:"name",optionValue:"value"},{name:"agentCode",label:"Agent Code",type:"input"},{name:"insuredName",label:"Insured Name",type:"input"},{name:"premiumMode",label:"Premium Mode",type:"dropdown",options:r,optionLabel:"name",optionValue:"value"},{name:"policyholderName",label:"Policyholder Name",type:"input"},{name:"planCode",label:"Plan Code",type:"dropdown",options:u,optionLabel:"name",optionValue:"value"},{name:"entryDateFrom",label:"Entry Date From",type:"input"},{name:"entryDateTo",label:"Entry Date To",type:"input"},{name:"lastModifiedUserID",label:"Last Modified User ID",type:"input"}]),d=Object(a["I"])({});return{tableData:d,ddlProposalType:t,ddlDistributionChannel:n,ddlProposalStatus:o,ddlApplicationBranchCode:l,ddlPlanCode:u,ddlPremiumMode:r,inputForm:e,listitemLs:c}}};n("960d");const O=p()(j,[["render",r],["__scopeId","data-v-41f306b8"]]);t["default"]=O},"4e82":function(e,t,n){"use strict";var a=n("23e7"),o=n("e330"),l=n("59ed"),r=n("7b0b"),i=n("07fa"),u=n("577e"),c=n("d039"),d=n("addb"),s=n("a640"),p=n("04d1"),m=n("d998"),b=n("2d00"),f=n("512c"),j=[],O=o(j.sort),h=o(j.push),v=c((function(){j.sort(void 0)})),y=c((function(){j.sort(null)})),A=s("sort"),C=!c((function(){if(b)return b<70;if(!(p&&p>3)){if(m)return!0;if(f)return f<603;var e,t,n,a,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(a=0;a<47;a++)j.push({k:t+a,v:n})}for(j.sort((function(e,t){return t.v-e.v})),a=0;a<j.length;a++)t=j[a].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}})),I=v||!y||!A||!C,g=function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:u(t)>u(n)?1:-1}};a({target:"Array",proto:!0,forced:I},{sort:function(e){void 0!==e&&l(e);var t=r(this);if(C)return void 0===e?O(t):O(t,e);var n,a,o=[],u=i(t);for(a=0;a<u;a++)a in t&&h(o,t[a]);d(o,g(e)),n=o.length,a=0;while(a<n)t[a]=o[a++];while(a<u)delete t[a++];return t}})},"512c":function(e,t,n){var a=n("342f"),o=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},"665b":function(e,t,n){},"960d":function(e,t,n){"use strict";n("665b")},addb:function(e,t,n){var a=n("4dae"),o=Math.floor,l=function(e,t){var n=e.length,u=o(n/2);return n<8?r(e,t):i(e,l(a(e,0,u),t),l(a(e,u),t),t)},r=function(e,t){var n,a,o=e.length,l=1;while(l<o){a=l,n=e[l];while(a&&t(e[a-1],n)>0)e[a]=e[--a];a!==l++&&(e[a]=n)}return e},i=function(e,t,n,a){var o=t.length,l=n.length,r=0,i=0;while(r<o||i<l)e[r+i]=r<o&&i<l?a(t[r],n[i])<=0?t[r++]:n[i++]:r<o?t[r++]:n[i++];return e};e.exports=l},b4bf:function(e,t,n){"use strict";var a=n("7a23"),o={style:{float:"left"},class:"flex justify-content-start flex-wrap card-container green-container"},l={class:"flex align-items-center justify-content-center"},r={style:{float:"right"},class:"flex justify-content-end flex-wrap card-container green-container"},i={class:"p-fluid formgrid grid searchCol",style:{"margin-bottom":"2%"}},u=Object(a["j"])("div",{class:"field col-12 md:col-12"},null,-1);function c(e,t,n,c,d,s){var p=Object(a["L"])("Button"),m=Object(a["L"])("Dropdown"),b=Object(a["L"])("SearchComponent");return Object(a["D"])(),Object(a["i"])(a["a"],null,[Object(a["j"])("div",null,[Object(a["j"])("div",o,[Object(a["j"])("div",l,[Object(a["n"])(p,{icon:"pi pi-chevron-left",type:"button",class:"p-button-outlined mr-2 mb-2",onClick:c.back},null,8,["onClick"])])]),Object(a["j"])("div",r,[Object(a["n"])(m,{class:"w-100",id:"listitem",modelValue:c.dropDownValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.dropDownValue=e}),options:c.listitemList,optionLabel:"label",optionValue:"name",onChange:t[1]||(t[1]=function(e){return c.onChange(e)}),placeholder:"Search filter"},null,8,["modelValue","options"])])]),Object(a["j"])("div",i,[u,Object(a["n"])(b,{displayItem:c.displayItem,modelValue:n.modelValue,inputForm:n.inputForm,onRemoveItem:t[2]||(t[2]=function(e){return c.removeItem(e)})},null,8,["displayItem","modelValue","inputForm"])])],64)}n("4de4"),n("d3b7"),n("b0c0"),n("4e82"),n("b64b");var d=n("6c02"),s={class:"d-flex"},p={class:"p-float-label d-inline-block",style:{width:"90%","margin-right":"1%"}},m=["for"];function b(e,t,n,o,l,r){var i=Object(a["L"])("Dropdown"),u=Object(a["L"])("InputText"),c=Object(a["L"])("Calendar"),d=Object(a["L"])("Button");return Object(a["D"])(!0),Object(a["i"])(a["a"],null,Object(a["J"])(o.displayThings,(function(e){return Object(a["D"])(),Object(a["i"])("div",{class:"field col-12 md:col-6",style:{"margin-top":"2%"},key:e.name},[Object(a["j"])("div",s,[Object(a["j"])("span",p,["dropdown"==e.type?(Object(a["D"])(),Object(a["g"])(i,{key:0,class:"w-100",id:e.name,modelValue:o.inputFormObj[e.name],"onUpdate:modelValue":function(t){return o.inputFormObj[e.name]=t},options:e.options,optionLabel:e.optionLabel,optionValue:e.optionValue},null,8,["id","modelValue","onUpdate:modelValue","options","optionLabel","optionValue"])):Object(a["h"])("",!0),"input"==e.type?(Object(a["D"])(),Object(a["g"])(u,{key:1,class:"w-100",id:e.name,type:"text",modelValue:o.inputFormObj[e.name],"onUpdate:modelValue":function(t){return o.inputFormObj[e.name]=t}},null,8,["id","modelValue","onUpdate:modelValue"])):Object(a["h"])("",!0),"date"==e.type?(Object(a["D"])(),Object(a["g"])(c,{key:2,class:"p-inputtext-sm w-100",id:e.name,modelValue:o.inputFormObj[e.name],"onUpdate:modelValue":function(t){return o.inputFormObj[e.name]=t},showIcon:!0,showOnFocus:!1,dateFormat:"dd/mm/yy"},null,8,["id","modelValue","onUpdate:modelValue"])):Object(a["h"])("",!0),Object(a["j"])("label",{for:e.name},Object(a["P"])(e.label),9,m)]),Object(a["n"])(d,{icon:"pi pi-times",class:"p-button-rounded p-button-danger p-button-text d-inline-block",onClick:function(t){return o.removeItem(e.name)}},null,8,["onClick"])])])})),128)}var f={emits:["update:modelValue"],props:{modelValue:String,displayItem:Object,inputForm:Object},setup:function(e,t){var n=t.emit,o=Object(a["R"])(e,"displayItem"),l=function(e){n("removeItem",e)},r=Object(a["R"])(e,"inputForm");return{removeItem:l,inputFormObj:r,displayThings:o}}},j=n("6b0d"),O=n.n(j);const h=O()(f,[["render",b]]);var v=h,y={emits:["update:modelValue"],props:{modelValue:String,listitemLs:Object,inputForm:Object,backRoutePath:String},components:{SearchComponent:v},setup:function(e,t){var n=t.emit,o=Object(d["d"])(),l=Object(a["R"])(e,"listitemLs"),r=Object(a["R"])(e,"inputForm"),i=[],u=Object(a["I"])([]),c=Object(a["I"])(""),s=Object(a["e"])({get:function(){return e.modelValue},set:function(e){n("update:modelValue",e)}}),p=function(e){var t=l.value.filter((function(t){return t.name===e.value}));return console.log("push wat",t[0]),u.value.push(t[0]),l.value=l.value.filter((function(t){return t.name!=e.value})),n("changeItem",l.value.filter((function(t){return t.name!=e.value}))),console.log("displayy first?",u.value),t},m=function(e){s.value="",r.value[e]="";var t=u.value.filter((function(t){return t.name===e}));l.value.push(t[0]),l.value.length=i.length,l.value.sort((function(e,t){return i.indexOf(e)-i.indexOf(t)})),u.value=u.value.filter((function(t){return t.name!=e})),c.value="",n("changeItem",l.value.filter((function(e){return 0!==Object.keys(e).length})))},b=function(){"undefined"!=typeof e.backRoutePath?o.push(e.backRoutePath):o.push("/")};return Object(a["A"])((function(){i=l.value,p(Object(a["I"])(l.value[0].name))})),{dropDownValue:s,listitemList:l,listitemLsTemp:i,displayItem:u,selectedListitem:c,onChange:p,removeItem:m,inputFormObj:r,back:b}}};n("05e9");const A=O()(y,[["render",c]]);t["a"]=A},b64b:function(e,t,n){var a=n("23e7"),o=n("7b0b"),l=n("df75"),r=n("d039"),i=r((function(){l(1)}));a({target:"Object",stat:!0,forced:i},{keys:function(e){return l(o(e))}})},bc40:function(e,t,n){},d998:function(e,t,n){var a=n("342f");e.exports=/MSIE|Trident/.test(a)},e29b:function(e,t,n){"use strict";var a=n("d4ec"),o=n("bee2"),l=(n("d3b7"),function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,[{key:"getPlanObj",value:function(){return fetch("data/plancode/plandata.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getPlanStatus",value:function(){return fetch("data/plancode/planstatus.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getProposalInput",value:function(){return fetch("data/proposal/proposaldata.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getProposalInsured",value:function(){return fetch("data/proposal/proposalinsuredetails.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getProposalPolicyholder",value:function(){return fetch("data/proposal/proposalpolicyholderdetails.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getChartAccount",value:function(){return fetch("data/chartaccount/chartdata.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getProdCategory",value:function(){return fetch("data/plancode/productCategory.json").then((function(e){return e.json()}))}},{key:"getServicingUnit",value:function(){return fetch("data/servicingunit/servicingunitdata.json").then((function(e){return e.json()}))}},{key:"getExchangeRate",value:function(){return fetch("data/maintenance/nbexchangerate.json").then((function(e){return e.json()}))}},{key:"getJetCase",value:function(){return fetch("data/maintenance/jetcase.json").then((function(e){return e.json()}))}},{key:"getUnderwriterApproval",value:function(){return fetch("data/underwriter/underwriterapproval.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getStandardTat",value:function(){return fetch("data/standardtat/standardtat.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getLoadingRange",value:function(){return fetch("data/loadingrange/loadingrange.json").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"getCombKey",value:function(){return fetch("data/plancode/combkey.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"search",value:function(){}}]),e}());t["a"]=new l}}]);
//# sourceMappingURL=chunk-030f6ab8.847cfb10.js.map