var $=jQuery=require('jquery');
require("./bootstrap");

require("angular");

window.AppModule = angular.module('app', [
    // 'ngAnimate',
    // 'ngCookies',
    // 'ngResource',
    // 'ngSanitize',
    // 'ngTouch',
    // 'ngStorage',
    // 'ui.router',
    // 'ui.bootstrap',
    // 'ui.load',
    // 'ui.jq',
    // 'ui.validate',
    // 'oc.lazyLoad',
    // 'pascalprecht.translate'
]);


var positions=$("ibreadcrumb")[0].innerHTML.split("&gt;&gt;");
var ihtml="<li><span class=\"glyphicon glyphicon-th-list\"></span></li>";
for(i=0;i<positions.length;i++){
    if(i==0) positions[i]=positions[i].replace(/:/g,"");
    ihtml+="<li>"+positions[i]+"</li>";
}
$("ibreadcrumb")[0].innerHTML=ihtml;

AppModule.directive('ibreadcrumb', function() {
    return {
        restrict: 'E',
        template: 
            "<ol class=\"breadcrumb\" ng-transclude>"+
            "</ol>",
        replace: true,
        transclude: true,
        // compile: function(tElem, tAttrs, transcludeX){
        //     console.log(name + ': compile => ' + tElem.html());
        //     return {
        //       pre: function(scope, iElem, iAttrs){
        //         console.log(name + ': pre link => ' + iElem.html());
        //       },
        //       post: function(scope, iElem, iAttrs){
        //         console.log(name + ': post link => ' + iElem.html());
        //         transcludeX(scope, function(clone) {
        //             // var title= element.find('title');
        //         });
        //       }
        //     }
        // }
        link: function(scope, iElem, iAttrs){
            console.log(': link => ' + iElem.html());
        }
    };
});


AppModule.directive('imainframe', function() {
    return {
        restrict: 'E',
        scope:{
          title:'@title'
        },
        template: 
            "<div class=\"container list-group\" ng-transclude>"+
            "</div>",
        replace: true,
        transclude: true
    };
});

AppModule.directive('ibuttongroups', function() {
    return {
        restrict: 'E',
        scope:{
          clsname:'=clsname'
        },
        template: 
            "<div class=\"btn-group {{clsname}}\" role=\"group\" ng-transclude>"+
            "</div>",
        replace: true,
        transclude: true
    };
});

// var ibuttongroups=Vue.extend({
//   template: "<div class=\"btn-group {{clsname}}\" role=\"group\">"+
//             "<slot></slot>"+
//             "</div>",
//   props: ["clsname"],
//   compiled: function () {
//     // console.log('compiled: ' + this.$el.innerHTML);
//     console.log("clsname="+this.clsname);
//     if(this.clsname=="status") this.clsname="status1";
//     if(this.clsname=="sel") this.clsname="dropdown";

//     btngroupHtml=this.$el.innerHTML;
//     if (btngroupHtml.indexOf("movePage")<0) {
//         btngroupHtml=btngroupHtml.replace(/^<hr>/, '');
//         btngroupHtml=btngroupHtml.replace(/<p><\/p>$/g, '');
//         btngroupHtml=btngroupHtml.replace(/class="butnsubmit"/g, 'class="butnsubmit btn btn-default btn-danger"');
//         btngroupHtml=btngroupHtml.replace(/class="butnadd"/g, 'class="btn btn-default"');
//         btngroupHtml=btngroupHtml.replace(/class="butnreset"/g, 'class="butnsubmit btn btn-default btn-danger"');
//         btngroupHtml=btngroupHtml.replace(/class="butnback"/g, 'class="butnsubmit btn btn-default btn-danger"');
//         btngroupHtml=btngroupHtml.replace(/select /g, 'select class="btn btn-default dropdown-toggle"');
//     } else {
//         re=/([\d\D]+?)&nbsp;&nbsp;([\d\D]+?)&nbsp;&nbsp;页码：([\d]+) \/ ([\d]+) &nbsp;&nbsp;数目：([\d]+)/i;
//         var pageInfos=re.exec(btngroupHtml);
//         console.log(pageInfos);
//         if(pageInfos && pageInfos.length>5){
//             var pageUrls=pageInfos[1].split("&nbsp;");
//             var pageCurrent=parseInt(pageInfos[3]);
//             var pageTotal=parseInt(pageInfos[4]);
//             var pageRecnum=parseInt(pageInfos[5]);
//             btngroupHtml="<nav><ul class='pagination'>";
//             for(var i=0;i<pageUrls.length;i++){
// //              if(pageUrls[i].indexOf("上一页")>0)
// //                  pageUrls[i]=pageUrls[i].replace(/上一页/,"<span aria-hidden='true'>&laquo;</span>");
//                 if(pageUrls[i].indexOf("下一页")>0)
//                     pageUrls[i]=pageUrls[i].replace(/下一页/,"<span aria-hidden='true'>&raquo;</span>");
//                 btngroupHtml+="<li>"+pageUrls[i]+"</li>";
//             }
//             btngroupHtml+="</ul></nav>";
//         }
//     }

//     this.$el.innerHTML=btngroupHtml;
//   }
// });
// Vue.component('ibuttongroups', ibuttongroups);

AppModule.directive('icommonstatus', function() {
    return {
        restrict: 'E',
        scope:{
          clsname: '=clsname',
          icsclsname: '=icsclsname', 
          icsname:'@icsname'
        },
        template: 
          "<div class=\"list-group-item\"><span class=\"status\">{{icsname}}</span><span class=\"status_td_left\" ng-transclude></span></div>",
        replace: true,
        transclude: true
    };
});


// var itypicallist=Vue.extend({
//   props: {"typdatas":Array},
//   template: "<table class=\"table table-bordered table-1\">"+
//             "<tr v-for=\"item in typdatas\"><td>{{{item.itchk}}}</td><td>{{{item.itid}}}</td><td>{{{item.itvalue}}}</td></tr>"+
//             "</table>"
// });
// Vue.component('itypicallist', itypicallist);

// var griddatas=[];
// var itchks=document.getElementsByName("itchk");
// var itids=document.getElementsByName("itid");
// var itvalues=document.getElementsByName("itvalue");
// for(i=0;i<itchks.length;i++){
//   griddatas[i]={
//     itchk:itchks[i].innerHTML,
//     itid:itids[i].innerHTML,
//     itvalue:itvalues[i].innerHTML
//   }
// }

// var ifieldintoform=Vue.extend({
//   template: "<div class=\"input-group\"><div class=\"input-group-addon btn-danger\"><slot name=\"iffname\"></slot></div><slot></slot></div>",
//   compiled: function () {
//     ihtml=this.$el.innerHTML;
//     ihtml=ihtml
//       .replace(/<input type="text" id="_fieldvalue/, '<input type="text" class="form-control" id="_fieldvalue')
//       .replace(/<textarea id="_fieldvalue/, '<textarea class="form-control" id="_fieldvalue');
//     this.$el.innerHTML=ihtml;
//   }
// });
// Vue.component('ifieldintoform', ifieldintoform);

// var ifieldintoformdevidor=Vue.extend({
//   template: "<div class=\"well well-sm\"><slot></slot></div>"
// });
// Vue.component('ifieldintoformdevidor', ifieldintoformdevidor);

// var ipaggrid=Vue.extend({
//   props: ['columns', 'rows', 'colnames'],
//   template: 
//   '<div class="panel panel-default">'+
//     '<table class="table">'+
//       '<thead class="panel-heading">'+
//         '<tr>'+
//           '<th v-for="column in colnames">'+
//             '{{{column}}}'+
//           '</th>'+
//         '</tr>'+
//       '</thead>'+
//       '<tbody>'+
//         '<tr v-for="row in rows">'+
//           '<td v-for="column in columns">'+
//             '{{{row[column]}}}'+
//           '</td>'+
//         '</tr>'+
//       '</tbody>'+
//     '</table>'+
//   '</div>'
// });
// Vue.component('ipaggrid', ipaggrid);

// var pagcolumns=[];
// var pagcolnames=[];
// var pagdatas=[];
// if(document.getElementById("igridheader"))
// {
//   var gridheader=document.getElementById("igridheader").innerHTML;
//   // var gridths=gridheader.match(/<th[^>]+?>[^<]+?<\/th>/gi);
//   // re=/<th([^>]+?) id=([^>]+?)>([^<]+?)<\/th>/i;
//   var gridths=gridheader.match(/<th.+?<\/th>/gi);
//   re1=/<th([^>]+?) id=([^>]+?)>(.+?)<\/th>/i;
//   re2=/<th([^>]*?)>(.+?)<\/th>/i;
//   for(i=0;i<gridths.length;i++){
//     // console.log(gridths[i]);
//     var tharray=re1.exec(gridths[i]);
//     if(tharray){
//       pagcolumns[i]=tharray[2];
//       pagcolnames[i]=tharray[3];
//     }
//     else{
//       tharray=re2.exec(gridths[i]);
//       pagcolumns[i]="col"+i;
//       pagcolnames[i]=tharray[2];
//     }
//   }
//   // console.log(pagcolnames);
//   // console.log(pagcolumns);
//   var igriddatas=document.getElementsByName("igriddata");
//   var icolnum=gridths.length;
//   var irownum=igriddatas.length/icolnum;
//   var nData=0;
//   for(i=0;i<irownum;i++){
//     var irowdata={};
//     for(j=0;j<icolnum;j++){
//       irowdata[pagcolumns[j]]=igriddatas[nData++].innerHTML;
//       // console.log(irowdata[pagcolumns[j]]);
//     }
//     pagdatas[i]=irowdata;
//   } 
//   // console.log(pagdatas);
// }


//手动启动！
angular.bootstrap(document,['app']);

