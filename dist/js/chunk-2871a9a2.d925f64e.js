(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2871a9a2"],{1385:function(t,n,e){"use strict";e.r(n);e("b0c0");var o=e("7a23"),a={class:"card"},c={class:"flex flex-row justify-content-between mb-3"},r={class:"p-fluid formgrid grid mb-5"},u={class:"field col-12 md:col-5"},i=Object(o["j"])("label",{for:"tableNo"},"New Table Number",-1),l=Object(o["m"])(" Combination Key Select "),s=Object(o["m"])(" Selected ");function d(t,n,e,d,f,b){var j=Object(o["L"])("Button"),h=Object(o["L"])("Dropdown"),p=Object(o["L"])("PickList"),v=Object(o["M"])("tooltip");return Object(o["D"])(),Object(o["i"])("div",a,[Object(o["j"])("div",c,[Object(o["X"])(Object(o["n"])(j,{icon:"pi pi-chevron-left",type:"button",class:"p-button-outlined",onClick:d.back},null,8,["onClick"]),[[v,"Back",void 0,{top:!0}]]),Object(o["X"])(Object(o["n"])(j,{icon:"pi pi-chevron-right",type:"button",style:{"background-color":"#000080"},onClick:d.next},null,8,["onClick"]),[[v,"Next",void 0,{top:!0}]])]),Object(o["j"])("div",r,[Object(o["j"])("div",u,[i,Object(o["n"])(h,{id:"tableNo",class:"p-inputtext-sm",modelValue:d.combKeyObj.tablNo,"onUpdate:modelValue":n[0]||(n[0]=function(t){return d.combKeyObj.tablNo=t}),options:t.ddlRateTable,optionLabel:"desc",optionValue:"code",placeholder:"Select one...",required:""},null,8,["modelValue","options"])])]),Object(o["n"])(p,{modelValue:d.combKey,"onUpdate:modelValue":n[1]||(n[1]=function(t){return d.combKey=t}),listStyle:"height:342px",dataKey:"key"},{sourceheader:Object(o["W"])((function(){return[l]})),targetheader:Object(o["W"])((function(){return[s]})),item:Object(o["W"])((function(t){return[Object(o["j"])("div",null,Object(o["P"])(t.item.name),1)]})),_:1},8,["modelValue"])])}var f=e("5502"),b=e("6c02"),j=e("e29b"),h={props:{backPath:String,nextPath:String},setup:function(t){var n=Object(f["b"])(),e=Object(b["d"])(),a=Object(o["e"])((function(){return n.state.planmaster.combKeyObj})),c=Object(o["e"])((function(){return n.state.session.prevPath})),r=Object(o["I"])(null),u=function(){console.log("back: "+c.value),e.push(c.value)},i=function(){e.push(t.nextPath)};return Object(o["A"])((function(){j["a"].getCombKey().then((function(t){return r.value=[t,[]]}))})),{combKeyObj:a,prevPath:c,combKey:r,back:u,next:i}}},p=(e("f5df1"),e("6b0d")),v=e.n(p);const g=v()(h,[["render",d]]);n["default"]=g},a144:function(t,n,e){},e29b:function(t,n,e){"use strict";var o=e("d4ec"),a=e("bee2"),c=(e("d3b7"),function(){function t(){Object(o["a"])(this,t)}return Object(a["a"])(t,[{key:"getPlanObj",value:function(){return fetch("data/plancode/plandata.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getPlanStatus",value:function(){return fetch("data/plancode/planstatus.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getProposalInput",value:function(){return fetch("data/proposal/proposaldata.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getProposalInsured",value:function(){return fetch("data/proposal/proposalinsuredetails.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getProposalPolicyholder",value:function(){return fetch("data/proposal/proposalpolicyholderdetails.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getChartAccount",value:function(){return fetch("data/chartaccount/chartdata.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getProdCategory",value:function(){return fetch("data/plancode/productCategory.json").then((function(t){return t.json()}))}},{key:"getServicingUnit",value:function(){return fetch("data/servicingunit/servicingunitdata.json").then((function(t){return t.json()}))}},{key:"getExchangeRate",value:function(){return fetch("data/maintenance/nbexchangerate.json").then((function(t){return t.json()}))}},{key:"getJetCase",value:function(){return fetch("data/maintenance/jetcase.json").then((function(t){return t.json()}))}},{key:"getUnderwriterApproval",value:function(){return fetch("data/underwriter/underwriterapproval.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getStandardTat",value:function(){return fetch("data/standardtat/standardtat.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getLoadingRange",value:function(){return fetch("data/loadingrange/loadingrange.json").then((function(t){return t.json()})).then((function(t){return t}))}},{key:"getCombKey",value:function(){return fetch("data/plancode/combkey.json").then((function(t){return t.json()})).then((function(t){return t.data}))}},{key:"search",value:function(){}}]),t}());n["a"]=new c},f5df1:function(t,n,e){"use strict";e("a144")}}]);
//# sourceMappingURL=chunk-2871a9a2.d925f64e.js.map