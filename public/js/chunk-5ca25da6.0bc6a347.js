(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ca25da6"],{"0926":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-md-3 "},[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300",tile:""}},[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},[i("router-link",{attrs:{to:"/videos","active-class":"active"}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-home")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("الفيديوهات")])],1)],1)],1),i("router-link",{attrs:{to:"/trend"}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-cogs")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("تعديل الإعدادات")])],1)],1)],1),t.$store.getters.isLoggedIn?i("div",[i("router-link",{attrs:{to:"/account"}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("حسابي")])],1)],1)],1),i("router-link",{attrs:{to:"/addpost"}},[i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-upload")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("إضافة فيديو")])],1)],1)],1)],1):t._e()],1)],1)],1)],1)},a=[],o=i("2877"),n=i("6544"),l=i.n(n),r=i("b0af"),c=i("132d"),d=i("8860"),u=i("da13"),m=i("5d23"),v=i("1baa"),h=i("34c3"),p={},g=Object(o["a"])(p,s,a,!1,null,null,null);e["a"]=g.exports;l()(g,{VCard:r["a"],VIcon:c["a"],VList:d["a"],VListItem:u["a"],VListItemContent:m["a"],VListItemGroup:v["a"],VListItemIcon:h["a"],VListItemTitle:m["b"]})},1681:function(t,e,i){},"9d06":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"container mt-4"},[i("div",{staticClass:"row"},[i("NavRight"),i("v-card",{staticClass:"col-md-6 pa-4 "},[i("h3",{staticClass:"col-md-12"},[i("i",{staticClass:"mdi mdi-video"}),t._v(" إضافة فيديو جديد ")]),i("v-divider"),i("div",[t.showProg?t._e():i("div",[i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-text-field",{attrs:{label:"عنوان الفيديو",outlined:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-textarea",{attrs:{label:"وصف الفيديو","auto-grow":"",outlined:"",rows:"3","row-height":"25",shaped:""},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1),i("v-col",{attrs:{cols:"12",sm:"12"}},[i("v-text-field",{attrs:{label:" الفيديو","auto-grow":"",outlined:""},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1),i("div",{staticClass:"text-center"},[i("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addPost()}}},[i("i",{staticClass:"mdi mdi-upload"}),t._v(" تحميل الأن ")])],1)],1),t.showProg?i("div",{staticClass:"text-center pa-3",staticStyle:{"margin-top":"120px"}},[i("h4",[t._v(t._s(t.textupload))]),i("v-divider",{staticClass:"ma-4"}),i("v-progress-linear",{attrs:{rounded:"",height:"25"},model:{value:t.mm,callback:function(e){t.mm=e},expression:"mm"}},[i("strong",[t._v(t._s(Math.ceil(t.mm))+"%")])]),i("v-divider",{staticClass:"ma-4"}),t.trys?i("v-btn",{attrs:{color:"info"},on:{click:function(e){return t.tryagain()}}},[i("i",{staticClass:"mdi mdi-plus"}),t._v(" إضافة فيديو جديد")]):t._e()],1):t._e()]),i("v-divider",{staticClass:"ma-4"})],1)],1)])])},a=[],o=(i("9911"),i("0926")),n={name:"Home",components:{NavRight:o["a"]},data:function(){return{title:"",desc:"",showProg:!1,trys:!1,mm:0,textupload:"",knowledge:100}},methods:{tryagain:function(){this.showProg=!1,this.mm=0},addPost:function(){var t=this;if(this.textupload="جاري تحميل الفيديو إنتضر من فضلك",this.showProg=!0,""==this.link||""==this.title)this.$swal.fire("معدرة","المرجو إضافة الفيديو وصورة معبرة","error"),this.showProg=!1;else{var e=new FormData;e.append("link",this.link),e.append("desc",this.desc),e.append("title",this.title),e.append("userId",this.$store.getters.getUserId);var i={onUploadProgress:function(e){t.mm=Math.round(100*e.loaded/e.total),100==t.mm&&(t.trys=!0)},onDownloadProgress:function(e){t.mm=Math.round(100*e.loaded/e.total),100==t.mm&&(t.trys=!0)},headers:{Accept:"application/json,*/*","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Authorization",Authorization:"Bearer "+this.$store.getters.getToken}};this.$http.post("/posts/add",e,i).then((function(e){t.$swal.fire("success",e.data.message,"success"),t.textupload="تم تحميل الفيديو بنجاح  الأن في المراجعة من طرف التقنيين",t.thumbnail="",t.video=""})).catch((function(e){t.showProg=!1,alert(e.message)}))}}}},l=n,r=i("2877"),c=i("6544"),d=i.n(c),u=i("8336"),m=i("b0af"),v=i("62ad"),h=i("ce7e"),p=i("8e36"),g=i("8654"),f=i("a844"),w=Object(r["a"])(l,s,a,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:u["a"],VCard:m["a"],VCol:v["a"],VDivider:h["a"],VProgressLinear:p["a"],VTextField:g["a"],VTextarea:f["a"]})},a844:function(t,e,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("1681"),i("8654")),o=i("58df"),n=Object(o["a"])(a["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-5ca25da6.0bc6a347.js.map