(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f8ae17a"],{"3e81":function(t,a,e){},"593b":function(t,a,e){"use strict";e("3e81")},8028:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"canvas001"}},[e("div",{staticClass:"main-title"},[t._v("canvas picture")]),e("div",{staticClass:"main-title-time "},[t._v("2019-08-15")]),e("div",{staticClass:"box"},[e("canvas",{attrs:{id:"canvas01",width:"400",height:"400"}}),e("div",{staticClass:"btn"},[e("el-button",{staticStyle:{"margin-left":"50px"},attrs:{type:t.ifcolor?"primary":"info"},on:{click:t.changeGray}},[t._v("\n      "+t._s(t.ifcolor?"彩 色":"黑 白")+"\n    ")]),e("el-button",{attrs:{type:t.ifRev?"danger":""},on:{click:t.changeRev}},[t._v("\n      反 向\n    ")])],1)])])},i=[],s=e("75fc"),c={name:"canvas001",mixins:[],components:{},props:[],created:function(){},watch:{},mounted:function(){this.drawCanvas()},data:function(){return{ifcolor:!0,ifRev:!1,url:"https://avatars0.githubusercontent.com/u/29775873?s=460&v=4",imagePixels:[]}},methods:{drawCanvas:function(){var t=this,a=document.getElementById("canvas01"),e=a.getContext("2d"),n=new Image;n.crossOrigin="anonymous",n.src=this.url+"?time="+(new Date).getTime(),n.onload=function(){n.complete&&(e.drawImage(n,0,0,n.width,n.height),setTimeout((function(){t.imagePixels=Object(s["a"])(e.getImageData(0,0,a.width,a.height).data)}),1))}},changeGray:function(){var t=document.getElementById("canvas01"),a=t.getContext("2d"),e=a.getImageData(0,0,t.width,t.height),n=e.data;if(this.ifcolor){for(var i=0;i<n.length;i+=4){var c=n[i],o=n[i+1],r=n[i+2],d=parseInt((c+o+r)/3);e.data[i]=d,e.data[i+1]=d,e.data[i+2]=d}a.putImageData(e,0,0)}else{for(var h=Object(s["a"])(this.imagePixels),l=0;l<n.length;l+=4){var u=h[l],v=h[l+1],g=h[l+2];this.ifRev&&(u=255-u,v=255-v,g=255-g),e.data[l]=u,e.data[l+1]=v,e.data[l+2]=g}a.putImageData(e,0,0)}this.ifcolor=!this.ifcolor},changeRev:function(){this.ifRev=!this.ifRev;for(var t=document.getElementById("canvas01"),a=t.getContext("2d"),e=a.getImageData(0,0,t.width,t.height),n=e.data,i=0;i<n.length;i+=4){var s=n[i],c=n[i+1],o=n[i+2];e.data[i]=255-s,e.data[i+1]=255-c,e.data[i+2]=255-o}a.putImageData(e,0,0)}}},o=c,r=(e("593b"),e("2877")),d=Object(r["a"])(o,n,i,!1,null,"51584b3a",null);a["default"]=d.exports}}]);