(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69374e82"],{1681:function(t,e,a){},"62b8":function(t,e,a){"use strict";a("7f1b")},"7f1b":function(t,e,a){},9036:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("p",[t._v("spons ads :")]),a("Adsense",{attrs:{"data-ad-client":"ca-pub-9225575939386535","data-ad-slot":"5528189542","data-ad-format":"auto","data-full-width-responsive":!0}}),t.loadData?a("div",[a("iframe",{attrs:{width:"100%",height:"415px",src:"https://www.youtube.com/embed/"+t.url,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("h3",{staticClass:"col-md-12"},[t._v(" "+t._s(t.title)+" ")]),a("span",{staticClass:" ml-9 mt-5"},[a("i",{staticClass:"mdi mdi-eye"}),t._v(" "+t._s(t.views)+" ")]),a("span"),a("div",[a("v-divider",{staticClass:"ma-3"}),a("v-avatar",{attrs:{color:"primary",size:"36"}},[t._v("AB")]),a("strong",{staticClass:"mr-2"},[t._v(t._s(t.userChaine.fullname))]),a("v-btn",{staticClass:"float-left",attrs:{href:"https://www.youtube.com/channel/UCTp_u3uEBYZ0n-oUDraLoYg",target:"_blank",color:"red"}},[a("i",{staticClass:"mdi mdi-video"}),t._v(" إشتراك")])],1),a("v-divider",{staticClass:"ma-3"}),a("p",[t._v(" يحتوي الموقع على أفلام ومسلسلات مغربية وكدلك عربية سلسلة قصيرة من التلفزة المفربية يمكنك مشاهدة أي فيلم كان على موقعنا بدون تقطيع ")]),a("hr",{staticStyle:{clear:"both",width:"auto"}}),a("div",{attrs:{id:"container-3d32b6ba70305fe7c3dd7373c3e75554"}}),a("p",[t._v("spons ads :")]),a("InArticleAdsense",{attrs:{"data-ad-client":"ca-pub-9225575939386535","data-ad-slot":"5528189542","data-ad-format":"auto","data-full-width-responsive":!0}}),a("v-divider",{staticClass:"ma-5"})],1):a("v-skeleton-loader",t._b({attrs:{type:"card-avatar, article, actions"}},"v-skeleton-loader",t.attrs,!1)),a("div",[a("p",{staticClass:"grey--text"},[t._v(t._s(t.getData.length)+" "),a("span",[t._v("تعليق")])]),t.$store.getters.isLoggedIn?a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-textarea",{attrs:{"prepend-icon":"mdi-account-circle",rows:"1",label:"أضف تعليقك",hint:"أضف تعليقك",clearable:"","clear-icon":"mdi-close-circle"},on:{input:t.emitTyping,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void e.preventDefault()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.sendMessage()}},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1):a("div",{staticClass:"text-center"},[t._v("لكي تتمكن من التعليق عليك التسجيل")]),t.typing?a("div",{staticClass:"ma-1 red--text",staticStyle:{"font-size":"10px"}},[t._v(" جاري كتابة تعليق ")]):t._e(),t.nocom?a("div",[a("p",{staticClass:"grey--text text-center"},[a("v-icon",[t._v("mdi-message")]),t._v(" لا توجد أي تعليقات لهدا الفيديو ")],1)]):t.getData.length?t._l(t.getData.slice().reverse(),(function(e,s){return a("div",{key:s,staticClass:"mt-4"},[a("v-avatar",{attrs:{color:"primary",size:"36"}},[t._v("AB")]),a("span",{staticClass:"mr-2"},[a("strong",[t._v(t._s(e.username_u))]),t._v(" "),a("span",[t._v(".")]),a("span",[a("span",{staticStyle:{"font-size":"8px"}},[a("timeago",{staticClass:"float-center grren--text",attrs:{datetime:e.dateCreate,"auto-update":60}})],1)]),a("br"),a("span",{staticClass:"mr-12"},[t._v(t._s(e.text))])]),a("v-divider",{staticClass:"ma-2"})],1)})):a("div",t._l(8,(function(e){return a("div",{key:e,staticClass:"mt-4"},[a("v-skeleton-loader",t._b({attrs:{type:"article"}},"v-skeleton-loader",t.attrs,!1))],1)})),0)],2)],1)},i=[],n=a("1da1"),o=(a("96cf"),a("498a"),a("9911"),{name:"Home",components:{},data:function(){return{title:"",nocom:!1,views:"",loadData:!1,msg:"",getData:[],typing:!1,attrs:""}},sockets:{connect:function(){console.log("socket connected")},recev:function(t){this.soundEffect.play(),this.getData.push(t),this.nocom=!1},typings:function(t){var e=this;return clearTimeout(this.timeOutId),this.typing=!0,this.typs=t.nickname,this.timeOutId=setTimeout((function(){e.typing=!1}),2e3),t}},metaInfo:function(){return{title:this.title,meta:[{name:"description",content:this.title},{property:"og:title",content:this.title},{property:"og:site_name",content:"videos"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},methods:{emitTyping:function(){this.$socket.emit("typing",{nickname:this.$store.getters.getUserName})},sendMessage:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""!=this.msg.trim()&&(this.$socket.emit("add",{text:this.msg,userId:this.$store.getters.getUserId,username_u:this.$store.getters.getUserName,dateCreate:this.$moment().format("YYYY-MM-DD HH:mm:ss"),groupe:this.$route.params.id}),this.lenData=!1,this.getData.push({text:this.msg,userId:this.$store.getters.getUserId,username_u:this.$store.getters.getUserName,dateCreate:this.$moment().format("YYYY-MM-DD HH:mm:ss")}),this.sendInDataBase(this.msg),this.nocom=!1,this.msg="");case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),sendInDataBase:function(t){var e=new FormData;e.append("text",t),e.append("userId",this.$store.getters.getUserId),e.append("postId",this.$route.params.id),e.append("username_u",this.$store.getters.getUserName),this.$http.post("/comments/add",e,{headers:{Accept:"application/json,*/*","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Authorization",Authorization:"Bearer "+this.$store.getters.getToken}}).then((function(t){return t})).catch((function(t){alert(t)}))},dataPosts:function(t){var e=this;this.$http.get("/posts/watch/"+t).then((function(t){e.loadData=!0,e.title=t.data.title,e.views=t.data.views,e.url=t.data.link,e.poster="/thumbnail/".concat(t.data.imagepost),e.userChaine=t.data.user[0]})).catch((function(t){return t}))}},mounted:function(){var t=this;this.dataPosts(this.$route.params.id),this.$socket.emit("joinGroup",this.$route.params.id),this.$http.get("/comments/read/"+this.$route.params.id).then((function(e){0==e.data.length?t.nocom=!0:t.getData=e.data}))}}),r=o,c=(a("62b8"),a("2877")),l=a("6544"),u=a.n(l),d=a("8212"),p=a("8336"),h=a("62ad"),m=a("ce7e"),g=a("132d"),v=a("3129"),f=a("a844"),y=Object(c["a"])(r,s,i,!1,null,null,null);e["default"]=y.exports;u()(y,{VAvatar:d["a"],VBtn:p["a"],VCol:h["a"],VDivider:m["a"],VIcon:g["a"],VSkeletonLoader:v["a"],VTextarea:f["a"]})},a844:function(t,e,a){"use strict";var s=a("5530"),i=(a("a9e3"),a("1681"),a("8654")),n=a("58df"),o=Object(n["a"])(i["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(s["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-69374e82.afa6aa19.js.map