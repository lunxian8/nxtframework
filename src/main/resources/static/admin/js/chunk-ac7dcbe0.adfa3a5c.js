(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ac7dcbe0"],{"03f4":function(e,t,i){},4223:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-card",{staticStyle:{"margin-top":"10px"}},[i("el-form",{attrs:{"label-position":"top","label-width":"80px",model:e.formLabelAlign}},[i("el-form-item",{attrs:{label:"名称"}},[i("el-input",{model:{value:e.formLabelAlign.title,callback:function(t){e.$set(e.formLabelAlign,"title",t)},expression:"formLabelAlign.title"}})],1),e._v(" "),i("el-form-item",[i("div",{staticStyle:{"margin-top":"20px"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formLabelAlign.category_id,callback:function(t){e.$set(e.formLabelAlign,"category_id",t)},expression:"formLabelAlign.category_id"}},e._l(e.category_list,(function(e){return i("el-option",{key:e.category_id,attrs:{label:e.category_name_display,value:e.category_id}})})),1),e._v(" "),i("router-link",{attrs:{to:"/content/kind"}},[i("el-button",[e._v("类别管理")])],1)],1)]),e._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"30px"}},[i("Tinymce",{ref:"editor",attrs:{height:400},model:{value:e.formLabelAlign.detail,callback:function(t){e.$set(e.formLabelAlign,"detail",t)},expression:"formLabelAlign.detail"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"活动形式"}},[i("el-input",{model:{value:e.formLabelAlign.type,callback:function(t){e.$set(e.formLabelAlign,"type",t)},expression:"formLabelAlign.type"}})],1),e._v(" "),i("el-form-item",[i("el-checkbox",{model:{value:e.formLabelAlign.is_recommend,callback:function(t){e.$set(e.formLabelAlign,"is_recommend",t)},expression:"formLabelAlign.is_recommend"}},[e._v("推荐")])],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.handleUpdate}},[e._v("发布")])],1)],1)],1)],1)},a=[],o=(i("a481"),i("db72")),l=i("8256"),s=i("2f62"),r={components:{Tinymce:l["a"]},props:{id:{default:0}},data:function(){return{radio2:"1",checked:!1,formLabelAlign:{id:0,title:"",detail:"",category_id:0,is_recommend:!1}}},computed:Object(o["a"])({},Object(s["c"])({category_list:function(e){return e.new.CategoryListData}})),created:function(){this.load()},methods:{load:function(){var e=this.$store.state.new.ListData,t=this;e.map((function(e){e.id===t.id&&(t.formLabelAlign.id=e.id,t.formLabelAlign.title=e.contentTitle,t.formLabelAlign.detail="测试",t.formLabelAlign.category_id=e.categoryId,console.log(t.formLabelAlign),t.formLabelAlign.is_recommend=!!e.isRecommend)})),this.$store.dispatch("new/getDetail",this.id),this.$store.dispatch("new/getCategory"),this.formLabelAlign.detail=this.$store.state.new.Detail},handleUpdate:function(){this.$store.dispatch("new/updateNew",this.formLabelAlign),this.$router.replace({path:"/content/content"})}}},c=r,d=i("2877"),u=Object(d["a"])(c,n,a,!1,null,null,null);t["default"]=u.exports},"532b":function(e,t,i){},8256:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tinymce-container",class:{fullscreen:e.fullscreen},style:{width:e.containerWidth}},[i("textarea",{staticClass:"tinymce-textarea",attrs:{id:e.tinymceId}}),e._v(" "),i("div",{staticClass:"editor-custom-btn-container"},[i("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:e.imageSuccessCBK}})],1)])},a=[],o=(i("ac6a"),i("c5f6"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:e.color,borderColor:e.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("\n    upload\n  ")]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":e.fileList,"show-file-list":!0,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,action:"https://httpbin.org/post","list-type":"picture-card"}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("\n        Click upload\n      ")])],1),e._v(" "),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n      Cancel\n    ")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("\n      Confirm\n    ")])],1)],1)}),l=[],s=(i("456d"),{name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var e=this;return Object.keys(this.listObj).every((function(t){return e.listObj[t].hasSuccess}))},handleSubmit:function(){var e=this,t=Object.keys(this.listObj).map((function(t){return e.listObj[t]}));this.checkAllSuccess()?(this.$emit("successCBK",t),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("Please wait for all images to be uploaded successfully. If there is a network problem, please refresh the page and upload again!")},handleSuccess:function(e,t){for(var i=t.uid,n=Object.keys(this.listObj),a=0,o=n.length;a<o;a++)if(this.listObj[n[a]].uid===i)return this.listObj[n[a]].url=e.files.file,void(this.listObj[n[a]].hasSuccess=!0)},handleRemove:function(e){for(var t=e.uid,i=Object.keys(this.listObj),n=0,a=i.length;n<a;n++)if(this.listObj[i[n]].uid===t)return void delete this.listObj[i[n]]},beforeUpload:function(e){var t=this,i=window.URL||window.webkitURL,n=e.uid;return this.listObj[n]={},new Promise((function(a,o){var l=new Image;l.src=i.createObjectURL(e),l.onload=function(){t.listObj[n]={hasSuccess:!1,uid:e.uid,width:this.width,height:this.height}},a(!0)}))}}}),r=s,c=(i("fd60"),i("2877")),d=Object(c["a"])(r,o,l,!1,null,"3fefeeec",null),u=d.exports,m=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],f=m,h=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],b=h,p=i("2d63"),g=[];function y(){return window.tinymce}var v=function(e,t){var i=document.getElementById(e),n=t||function(){};if(!i){var a=document.createElement("script");a.src=e,a.id=e,document.body.appendChild(a),g.push(n);var o="onload"in a?l:s;o(a)}function l(t){t.onload=function(){this.onerror=this.onload=null;var e,i=Object(p["a"])(g);try{for(i.s();!(e=i.n()).done;){var n=e.value;n(null,t)}}catch(a){i.e(a)}finally{i.f()}g=null},t.onerror=function(){this.onerror=this.onload=null,n(new Error("Failed to load "+e),t)}}function s(e){e.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var t,i=Object(p["a"])(g);try{for(i.s();!(t=i.n()).done;){var n=t.value;n(null,e)}}catch(a){i.e(a)}finally{i.f()}g=null}}}i&&n&&(y()?n(null,i):g.push(n))},_=v,w="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",k={name:"Tinymce",components:{editorImage:u},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var e=this.width;return/^[\d]+(\.[\d]+)?$/.test(e)?"".concat(e,"px"):e}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(t.tinymceId).setContent(e||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var e=this;_(w,(function(t){t?e.$message.error(t.message):e.initTinymce()}))},initTinymce:function(){var e=this,t=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["en"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:b,menubar:this.menubar,plugins:f,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(i){t.value&&i.setContent(t.value),t.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",(function(){e.hasChange=!0,e.$emit("input",i.getContent())}))},setup:function(e){e.on("FullscreenStateChanged",(function(e){t.fullscreen=e.state}))},convert_urls:!1})},destroyTinymce:function(){var e=window.tinymce.get(this.tinymceId);this.fullscreen&&e.execCommand("mceFullScreen"),e&&e.destroy()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(e){var t=this;e.forEach((function(e){window.tinymce.get(t.tinymceId).insertContent('<img class="wscnph" src="'.concat(e.url,'" >'))}))}}},C=k,L=(i("a597"),Object(c["a"])(C,n,a,!1,null,"584428a8",null));t["a"]=L.exports},a597:function(e,t,i){"use strict";var n=i("03f4"),a=i.n(n);a.a},fd60:function(e,t,i){"use strict";var n=i("532b"),a=i.n(n);a.a}}]);