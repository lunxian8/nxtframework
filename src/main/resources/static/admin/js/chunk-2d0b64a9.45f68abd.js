(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b64a9"],{"1d11":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-card",{staticStyle:{"margin-top":"10px"}},[l("el-table",{ref:"multipleTable",staticStyle:{width:"100%","min-height":"300px","margin-bottom":"20px"},attrs:{data:e.ListData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),l("el-table-column",{attrs:{label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.messageDatelineReadable))]}}])}),e._v(" "),l("el-table-column",{attrs:{prop:"messageContent",label:"内容"}}),e._v(" "),l("el-table-column",{attrs:{prop:"guestName",label:"联系人","show-overflow-tooltip":""}}),e._v(" "),l("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("查看")]),e._v(" "),l("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1),e._v(" "),l("el-dialog",{attrs:{title:"",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[l("el-form-item",{attrs:{label:"留言人"}},[l("el-input",{attrs:{disabled:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"联系方式"}},[l("el-input",{attrs:{disabled:""},model:{value:e.form.link,callback:function(t){e.$set(e.form,"link",t)},expression:"form.link"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"内容"}},[l("el-input",{attrs:{type:"textarea",disabled:""},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"时间"}},[l("el-input",{attrs:{disabled:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}})],1)],1)],1)],1)},n=[],o=(l("ac6a"),{data:function(){return{tableData:[{date:"2016-05-03 19:23",title:"测试内容",kind:"Linand"}],dialogVisible:!1,multipleSelection:[],form:{name:"Linda",link:"188888888",content:"测试测试测试测试测试测试",date:"2020-07-24 19:45"}}},computed:{ListData:function(){return this.$store.state.message.ListData}},created:function(){this.load()},methods:{load:function(){this.$store.dispatch("message/getList",1)},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleEdit:function(e,t){console.log(e),console.log(t),this.form.name=t.guestName,this.form.link=t.guestPhone,this.form.content=t.messageContent,this.form.date=t.messageDatelineReadable,this.dialogVisible=!0},handleDelete:function(e,t){console.log(e),console.log(t),this.$store.dispatch("message/deleteMessage",t.id),this.load()}}}),i=o,s=l("2877"),r=Object(s["a"])(i,a,n,!1,null,null,null);t["default"]=r.exports}}]);