var Vue=require("vue");

var ibreadcrumb = Vue.extend({
  template:
        "<table cellSpacing=0 cellPadding=0 border=0 width=\"640\" height=\"50\">" +
        "<TR>" +
        "<TD colspan=\"2\">" +
        "<div align=\"right\">" +
        "<img src=\"/images/header.gif\" width=\"654\" height=\"26\">" +
        "</div>" +
        "</TD>" +
        "</TR>" +
        "<TR  bgColor=#000000 height=\"20\" valign=\"top\">" +
        "<TD align=left>" +
        "<img height=24 src=\"/images/email.gif\" width=22 align=\"absmiddle\">" +
        "<font color=\"#FFFFFF\"><slot></slot></font>" +
        "</TD>" +
        "<TD align=left>" +
        "</TD>" +
        "</TR>" +
        "</TABLE>",
  compiled: function () {
    // console.log('compiled: ' + this.$el.innerHTML);
  }
});
Vue.component('ibreadcrumb', ibreadcrumb);

var imainframe = Vue.extend({
  template: 
        "<table border=\"0\" bgcolor=\"#D6D3CE\" cellspacing=\"1\" align=center> "+
        "<tr>"+
        "   <td>"+
        "       <table border=\"0\" bgcolor=\"#D6D3CE\" cellspacing=\"1\" width=\"100%%\" style=\"font-family: 宋体; font-size: 10.5pt; border: 1px ridge\"> "+
        "           <tr bgcolor=#adbee7> "+
        "               <td  background=\"/images/public_top_bg.gif\"><font color=#FFFFFF>{{title}}</font></td><td bgcolor=#adbee7 width=10 valign=center><a href=\"javascript:history.back()\"><img src=\"/images/mainfrm_close.gif\" border=0 width=\"16\" height=\"14\" ></a>"+
        "               </td>"+
        "           </tr>"+
        "       </table>"+
        "       <table border=\"0\" bgcolor=\"#D6D3CE\" cellspacing=\"1\" style=\"font-family: 宋体; font-size: 10.5pt; border: 1px ridge\"> "+
        "           <tr>"+
        "               <td valign=\"top\">&nbsp; </td>"+
        "               <td align=\"center\" >"+
        "                   <br>"+
        "                   <table width=\"640\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" bordercolorlight=\"#7C7C7C\" bordercolordark=\"#FFFFFF\"> "+
        "                       <tr>"+
        "                           <td align=\"center\">"+
        "<slot></slot>"+
        "                           </td>"+
        "                       </tr>"+
        "                   </table>"+
        "               </td>"+
        "           </tr>"+
        "       </table>"+
        "   </td>"+
        "</tr>"+
        "</table>",
  props: ["title"]
});
Vue.component('imainframe', imainframe);

var ibuttongroups=Vue.extend({
  template: "<table class1=\"{{clsname}}\" width=\"{{width}}\" border=\"0\" bgcolor=\"#D6D3CE\" cellspacing=\"0\" cellpadding=\"0\" bordercolorlight=\"#7C7C7C\" bordercolordark=\"#FFFFFF\">"+
            "<tr align=\"{{align}}\">"+
            "<td colspan=2>"+
            "<slot></slot>"+
            "</td>"+
            "</tr>"+
            "</table>",
  props: ["clsname","width","align"],
  compiled: function () {
    // console.log('compiled: ' + this.$el.innerHTML);
  }
});
Vue.component('ibuttongroups', ibuttongroups);


var icommonstatus=Vue.extend({
  template: "<table class=\"{{clsname}}\">" +
            "<tr>" +
            "<td width=40 height=40><img src=/images/c.gif width=1 height=1></td>" +
            "<td class=\"{{icsclsname}}\">{{icsname}}</td>" +
            "<td width=10></td>" +
            "<td><slot></slot></td>" +
            "</tr>" +
            "</table>",
  props: ["clsname","icsclsname","icsname"]
});
Vue.component('icommonstatus', icommonstatus);


var itypicallist=Vue.extend({
  props: {
    "typdatas":Array,
    "width":String
  },
  template:         
        "<table width=\"{{width}}\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolorlight=\"#7C7C7C\" bordercolordark=\"#FFFFFF\">" +       
        "<tr class=\"\"  bgcolor=\"#FFFFFF\" v-for=\"item in typdatas\">"+
        "<td width=\"10\" height=\"20\" bgcolor=\"#D6D3CE\">{{{item.itchk}}}</td>"+
        "<td class=\"pt2\" width=\"50\" >{{{item.itid}}}</td>"+
        "<td class=\"pt3\">{{{item.itvalue}}}</td>"+
        "</tr>"+
        "</table>"
});
Vue.component('itypicallist', itypicallist);


var griddatas=[];
var itchks=document.getElementsByName("itchk");
var itids=document.getElementsByName("itid");
var itvalues=document.getElementsByName("itvalue");
for(i=0;i<itchks.length;i++){
  griddatas[i]={
    itchk:itchks[i].innerHTML,
    itid:itids[i].innerHTML,
    itvalue:itvalues[i].innerHTML
  }
}

var ifieldintoform=Vue.extend({
  template: 
        "<table width=\"{{width}}\" border=\"0\" bgcolor=\"#D6D3CE\" cellspacing=\"1\" style=\"font-family: 宋体; font-size: 10.5pt\">"+
        "   <tr>"+
        "       <td width=\"20%%\"  valign=\"center\" class=\"pt1\" height=\"20\"><slot name=\"iffname\"></slot></td>"+
        "       <td width=\"80%%\"><slot></slot></td>"+
        "   </tr> "+
        "</table>",
  props:["width"],
  compiled: function () {
    // console.log('compiled: ' + this.$el.innerHTML);
  }
});
Vue.component('ifieldintoform', ifieldintoform);

var ifieldintoformdevidor=Vue.extend({
  template: 
  "<table width=\"{{width}}\" border=\"0\" bgcolor=\"#D6D3CE\" cellspacing=\"0\" cellpadding=\"0\" bordercolorlight=\"#7C7C7C\" bordercolordark=\"#FFFFFF\"> "+
        "<tr height=\"{{height}}\" align=\"{{align}}\" bgcolor=#229AE1>"+
        "   <td colspan=2><slot></slot></td>"+
        "</tr> "+
        "</table>",
  props:["width","height","align"]
});
Vue.component('ifieldintoformdevidor', ifieldintoformdevidor);

var ipaggrid=Vue.extend({
  props: ['columns', 'rows', 'colnames',"width"],
  template: 
      "<table width=\"{{width}}\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolorlight=\"#7C7C7C\" bordercolordark=\"#FFFFFF\">"+
        '<thead class="panel-heading">'+
          '<tr>'+
            '<th v-for="column in colnames">'+
              '{{{column}}}'+
            '</th>'+
          '</tr>'+
        '</thead>'+
        '<tbody>'+
          '<tr v-for="row in rows">'+
            '<td v-for="column in columns">'+
              '{{{row[column]}}}'+
            '</td>'+
          '</tr>'+
        '</tbody>'+
      "</table>"
});
Vue.component('ipaggrid', ipaggrid);

var pagcolumns=[];
var pagcolnames=[];
var pagdatas=[];
if(document.getElementById("igridheader"))
{
  var gridheader=document.getElementById("igridheader").innerHTML;
  // console.log(gridheader);
  var gridths=gridheader.match(/<th.+?<\/th>/gi);
  // console.log(gridths.length);
  re1=/<th([^>]+?) id=([^>]+?)>(.+?)<\/th>/i;
  re2=/<th([^>]*?)>(.+?)<\/th>/i;
  for(i=0;i<gridths.length;i++){
    // console.log(gridths[i]);
    var tharray=re1.exec(gridths[i]);
    if(tharray){
      pagcolumns[i]=tharray[2];
      pagcolnames[i]=tharray[3];
    }
    else{
      tharray=re2.exec(gridths[i]);
      pagcolumns[i]="col"+i;
      pagcolnames[i]=tharray[2];
    }
    
  }
  // console.log(pagcolnames);
  // console.log(pagcolumns);
  var igriddatas=document.getElementsByName("igriddata");
  var icolnum=gridths.length;
  var irownum=igriddatas.length/icolnum;
  var nData=0;
  for(i=0;i<irownum;i++){
    var irowdata={};
    for(j=0;j<icolnum;j++){
      irowdata[pagcolumns[j]]=igriddatas[nData++].innerHTML;
      // console.log(irowdata[pagcolumns[j]]);
    }
    pagdatas[i]=irowdata;
  } 
  // console.log(pagdatas);
}

// var iLogicComponents={
//     "genlist_total_begin":
//         "<table width=\"__VARINT__\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\" bordercolorlight=\"#7C7C7C\" bordercolordark=\"#FFFFFF\">",
//     "genlist_vert":
//         "<tr class=__VARSTR__ __VARSTR__>__VARSTR__</tr>",
//     "genlist_hori": 
//         "<td class=__VARSTR__ __VARSTR__>__VARSTR__</td>",
//     "genlist_total_end":
//         "</table>"

// }


// var ncol=0;
// function gen_genlist_header(){
//     var gridheader=document.getElementById("iheader").innerHTML;
//     var gridths=gridheader.match(/<th[^>]+?>[^<]+?<\/th>/gi);
//     ncol=gridths.length;
//     document.write(iLogicComponents.genlist_vert.replace(/\_\_VARSTR\_\_/, "").replace(/\_\_VARSTR\_\_/, "").replace(/\_\_VARSTR\_\_/, gridheader));
// }

// var nrow=0;
// function gen_genlist_vert(clsname,properties,nrow){
//     var igriddatas=document.getElementsByName("igriddata");
//     var irowhtml="";
//     for(i=nrow*ncol;i<(nrow+1)*ncol;i++){
//         irowhtml+= iLogicComponents.genlist_hori.replace(/\_\_VARSTR\_\_/,igriddatas[i].getAttribute("clsname")).replace(/\_\_VARSTR\_\_/,igriddatas[i].getAttribute("properties")).replace(/\_\_VARSTR\_\_/, igriddatas[i].innerHTML);
//     }
//     document.write(iLogicComponents.genlist_vert.replace(/\_\_VARSTR\_\_/,clsname).replace(/\_\_VARSTR\_\_/,properties).replace(/\_\_VARSTR\_\_/, irowhtml));
// }


// 创建根实例
new Vue({
  el: 'html',
  data:{
    griddatas:griddatas,
    pagdatas:pagdatas,
    pagcolumns:pagcolumns,
    pagcolnames:pagcolnames
  }

})




