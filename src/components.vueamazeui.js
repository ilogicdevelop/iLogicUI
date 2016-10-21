// window.jQuery = window.$ = require('./jquery');
// var $=jQuery=jquery=require('./jquery');
require("./amazeui");
var Vue=require("vue");

var ibreadcrumb = Vue.extend({
  template: "<ol class=\"am-breadcrumb\">"+
            "<slot></slot>"+
            "</ol>",
  compiled: function () {
    // console.log('compiled: ' + this.$el.innerHTML);
    ihtml=this.$el.innerHTML;
    var positions=this.$el.innerHTML.split("&gt;&gt;");
      //console.log(positions)
      var postyle= positions;
      postyle[0]="<span class='postyle'>"+postyle[0]+"</span>"
    ihtml="<li><span class=\"glyphicon glyphicon-th-list\"></span></li>";
    for(i=0;i<positions.length;i++){
        if(i==0) positions[i]=positions[i].replace(/:/g,"");
        ihtml+="<li>"+positions[i]+"</li>";
    }
    ihtml+="<br><br><div class='hr'></div>"
      //console.log(ihtml)
      this.$el.innerHTML=ihtml;
  }
});
Vue.component('ibreadcrumb', ibreadcrumb);

var imainframe = Vue.extend({
    compiled:function () {
        var ihtml = this.$el.innerHTML;
          //console.log(ihtml)
        if(ihtml.indexOf("用户名,密码,称呼,电邮,组织管理,密码提示问题,密码问题答案,审核状态,用户来源") >= 0){
              ihtml = "<div class='z-border'>"+ihtml+"</div>"
        }
        this.$el.innerHTML = ihtml;
    },
  template: "<div class=\"container list-group\">"+
            "<slot></slot>"+
            "</div>"
});
Vue.component('imainframe', imainframe);

var ibuttongroups=Vue.extend({
  template: "<div class=\"z-btn-group {{clsname}}\" role=\"group\">"+
            "<slot></slot>"+
            "</div>",
  props: ["clsname"],
    /*ready:function () {
      var btngroup = document.createElement("div");
        var inputs = document.getElementsByTagName('input');
        var btnarr = [];
        for(var i = 0 ;i <inputs.length;i++){
            if(inputs[i].value == '补选' || inputs[i].value == '全选' || inputs[i].value == '消选'){
                btngroup.appendChild(inputs[i]);
            }
        }
        var box = document.getElementsByClassName('z-btn-group z-input-spacing ')[0];
        console.log(box)
        box.appendChild(btngroup)

    },*/
  compiled: function () {
    // console.log('compiled: ' + this.$el.innerHTML);
    if(this.clsname=="status") this.clsname="status1";
    if(this.clsname=="sel") this.clsname="";

    btngroupHtml=this.$el.innerHTML;
        if (btngroupHtml.indexOf("页记录")>0 && false) {
            console.log(btngroupHtml)
            btngroupHtml=btngroupHtml.replace(/class="z-btn-group sel"/g,'class="z-btn-group sel pagemove"');
        }
       else if (btngroupHtml.indexOf("movePage")<0) {
            btngroupHtml=btngroupHtml.replace(/<select name="poly">/g,'<select name="poly">')

            btngroupHtml=btngroupHtml.replace(/<select name="poly">[\w\W]+?<option value="1" selected="">gb<\/option>[\w\W]+?<\/select>/,'</div><div class="am-btn-group am-btn-group-xs z-input-spacing"><select name="poly"> <option value="1" selected="">gb</option> </select></div>');
            btngroupHtml=btngroupHtml.replace(/<select name="field"/g,'<div class="am-btn-group am-btn-group-xs z-input-spacing"><select name="field"')
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  添加" /g,'<div class="am-btn-group am-btn-group-xs z-input-spacing"><input type="button" value="  添加" ')
            btngroupHtml=btngroupHtml.replace(/<select name="show_level1"/g,'</div><div class="am-btn-group am-btn-group-xs z-input-spacing"><select name="show_level1"');
            btngroupHtml=btngroupHtml.replace(/myform,'doc_rewind'\)">/g,'myform,\'doc_rewind\')">')
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  补选" /g,'</div><div class="am-btn-group am-btn-group-xs z-input-spacing"><input type="button" value="  补选" ')
            btngroupHtml=btngroupHtml.replace(/<\/div>/g,'</div></div>');
            btngroupHtml=btngroupHtml.replace(/按/g,'<div class="am-btn-group  am-btn-group-xs z-input-spacing"><span class="z-form-el">按</span>');
            btngroupHtml=btngroupHtml.replace(/倒,页/g,'<span class="z-form-el">倒,页</span>');
            btngroupHtml=btngroupHtml.replace(/onclick="document\.form1\.page\.value=1;document\.form1\.submit\(\);">/g,'onclick="document.form1.page.value=1;document.form1.submit();"></div>');
            btngroupHtml=btngroupHtml.replace(/<select/g,'<select class="z-form-el"  data-am-selected="\{btnSize: \'sm\'\}" ');
            //btngroupHtml=btngroupHtml.replace(/value="  消选" class="butnadd"/g,'value="  消选" class="am-btn am-btn-group am-btn-default am-icon-weixin"')
            btngroupHtml=btngroupHtml.replace(/class="butnadd"/g, 'class="am-btn am-btn-default z-form-el"');
            btngroupHtml=btngroupHtml.replace(/class="butnsubmit"/g, 'class="am-btn am-btn-group am-btn-warning z-btn am-radius"');
            btngroupHtml=btngroupHtml.replace(/class="butnreset"/g, 'class="am-btn am-btn-group am-btn-danger z-btn am-radius"');
            btngroupHtml=btngroupHtml.replace(/class="butnback"/g, 'class="am-btn am-btn-group am-btn-success z-btn am-radius"');
            btngroupHtml=btngroupHtml.replace(/<input type="text"/g,'<input type="text" class="z-form-el"');
            btngroupHtml=btngroupHtml.replace(/<input type="checkbox"/g,'<input type="checkbox" class="z-form-el"');
            //console.log(btngroupHtml)
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  显示" class="am-btn am-btn-default z-form-el" onclick="document\.form1\.page\.value=1;document\.form1\.submit\(\);">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="document.form1.page.value=1;document.form1.submit();"><span class="am-icon-file-text-o"></span>显示</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  添加" class="am-btn am-btn-default z-form-el" onclick="window\.open\('doc_new_face\?--key--=m49qxHrDlAc-9z832hh7GWpMxLAuhzo8tcg\.aq\.I9tkwlBLtwzKi-t90lhWK9nIIX-UW-VbRZYnBZdtkMumVdeYmWBQFhgKuHwIyidlR-dgHoXYO57Is3xG9F6zaCgei44SI9E4uNCf\.gLyj8sWhQh3apjNbh8lnOcvNKAX-Sg5ge\.ZpfAWUDQsOK4jpeVTDBiI2DrOf7EcRY2e\.vtERJvY1mwTi0P4iHxG5Gjiw4MeVuhYSIuHx7nMhkKHmejIzcFY3iRKHQurW3CWFH0yR1\.XWxbVHF9RLshXy-EES3Th4RgWFFfCb87s8zFe3hFpVCGZ4ZjRMDjXerZkHycLB0QcTMBTHkUV8YlrdjctBUZlMSjrrst7UhfNIrCJhPwZKg4oV-v8fnGRTSZYMM4a8lxvwaWSo-2a-bIkgs7Vs8VaarFF2tBRqMYC6MmD4PssSQhjLbRYQ3QCcZNk71pI3m6sGgvUZQGPhUbZFRFodPX\.r','_self'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="window.open(\'doc_new_face?--key--=m49qxHrDlAc-9z832hh7GWpMxLAuhzo8tcg.aq.I9tkwlBLtwzKi-t90lhWK9nIIX-UW-VbRZYnBZdtkMumVdeYmWBQFhgKuHwIyidlR-dgHoXYO57Is3xG9F6zaCgei44SI9E4uNCf.gLyj8sWhQh3apjNbh8lnOcvNKAX-Sg5ge.ZpfAWUDQsOK4jpeVTDBiI2DrOf7EcRY2e.vtERJvY1mwTi0P4iHxG5Gjiw4MeVuhYSIuHx7nMhkKHmejIzcFY3iRKHQurW3CWFH0yR1.XWxbVHF9RLshXy-EES3Th4RgWFFfCb87s8zFe3hFpVCGZ4ZjRMDjXerZkHycLB0QcTMBTHkUV8YlrdjctBUZlMSjrrst7UhfNIrCJhPwZKg4oV-v8fnGRTSZYMM4a8lxvwaWSo-2a-bIkgs7Vs8VaarFF2tBRqMYC6MmD4PssSQhjLbRYQ3QCcZNk71pI3m6sGgvUZQGPhUbZFRFodPX.r\',\'_self\'"><span class="am-icon-plus-square-o"></span>添加</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  合成" class="am-btn am-btn-default z-form-el" onclick="actionclick\(self\.document\.myform,'doc_makeup'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="actionclick(self.document.myform,\'doc_makeup\')"><span class="am-icon-folder-open-o"></span>合成</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  发布" class="am-btn am-btn-default z-form-el" onclick="actionclick\(self\.document\.myform,'doc_publish'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="actionclick(self.document.myform,\'doc_publish\')"><span class="am-icon-share-square-o"></span>发布</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  撤单" class="am-btn am-btn-default z-form-el" onclick="actionclick\(self\.document\.myform,'doc_rewind'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="actionclick(self.document.myform,\'doc_rewind\')"><span class="am-icon-mail-reply"></span>撤单</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  补选" class="am-btn am-btn-default z-form-el" onclick="SelectNoPublished\(true,self\.document\.myform,'d_id'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="SelectNoPublished(true,self.document.myform,\'d_id\')"><span class="am-icon-check-circle-o"></span>补选</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  消选" class="am-btn am-btn-default z-form-el" onclick="SelectUnSelectAll\(false,self\.document\.myform,'d_id'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="SelectUnSelectAll(false,self.document.myform,\'d_id\')"><span class="am-icon-close"></span>消选</div>');
            btngroupHtml=btngroupHtml.replace(/<input type="button" value="  全选" class="am-btn am-btn-default z-form-el" onclick="SelectUnSelectAll\(true,self\.document\.myform,'d_id'\)">/g,
                '<div  class="am-btn am-btn-default  am-btn-xs z-form-el" onclick="SelectUnSelectAll(true,self.document.myform,\'d_id\')"><span class="am-icon-check-square-o"></span>全选</div>');
        }

        else {
            re=/([\d\D]+?)&nbsp;&nbsp;([\d\D]+?)&nbsp;&nbsp;页码：([\d]+) \/ ([\d]+) &nbsp;&nbsp;数目：([\d]+)/i;
            var pageInfos=re.exec(btngroupHtml);
            //console.log(pageInfos);
            if(pageInfos && pageInfos.length>5){
                var pageUrls=pageInfos[1].split("&nbsp;");
                var pageCurrent=parseInt(pageInfos[3]);
                var pageTotal=parseInt(pageInfos[4]);
                var pageRecnum=parseInt(pageInfos[5]);
                btngroupHtml="<div class='pagemove'><span class='pageindex am-pagination am-pagination-centered' style='position: absolute;left: 0;'>共 15 页记录</span><nav class='z-page'><ul class='am-pagination am-pagination-centered'>";
                for(var i=0;i<pageUrls.length;i++){
                    if(pageUrls[i].indexOf("下一页")>0) {
                        pageUrls[i] = pageUrls[i].replace(/下一页/, "<span aria-hidden='true'>&raquo;</span>");
                    }
                    btngroupHtml+="<li>"+pageUrls[i]+"</li>";
                }
                btngroupHtml+="</ul></nav></div>";
            }
        }
      btngroupHtml=btngroupHtml.replace(/class="number">4<\/a>/g,'class="number">4</a></li><li>');
    this.$el.innerHTML=btngroupHtml;
  },
//              if(pageUrls[i].indexOf("上一页")>0)
//                  pageUrls[i]=pageUrls[i].replace(/上一页/,"<span aria-hidden='true'>&laquo;</span>");
//onclick="SelectUnSelectAll(false,self\.document\.myform,'d_id')">
});
Vue.component('ibuttongroups', ibuttongroups);

var iselect = Vue.extend({
    props:["opvalue","option"],
    template:'<option value={{opvalue}}>{{option}}</option>'
});
Vue.component('iselect',iselect);


var icommonstatus=Vue.extend({
    props: ["icsname"],
    template:'<table class="am-table"><tr><td class="z-td-left">{{icsname}}</td><td width="10%"></td><td class="z-td-right"><slot></slot></td></tr></table>'
});
Vue.component('icommonstatus',icommonstatus);

var itypicallist=Vue.extend({
  props: {"typdatas":Array},
  template: "<table class=\"am-table am-table-striped am-table-hover\">"+
            "<tr class='z-active' v-for=\"item in typdatas\"><td>{{{item.itchk}}}</td><td>{{{item.itid}}}</td><td>{{{item.itvalue}}}</td></tr>"+
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
  //template: "<label class=\"input-group\"><div class=\"input-group-addon btn-success\"><slot name=\"iffname\"></slot></div><slot></slot></label>",
    template:'<div class="am-input-group doc-example">' +
    '<span class="z-input-title">' +
    '<slot name=\"iffname\"></slot>' +
    '</span><slot></slot></div>',
  compiled: function () {
    ihtml=this.$el.innerHTML;
    ihtml=ihtml
      .replace(/<input type="text" id="_fieldvalue/, '<input type="text" class="am-form-field am-radius" id="_fieldvalue')
      .replace(/<select/, '<select class="am-radius"  data-am-selected="\{btnSize: \'sm\'\}" ')
      .replace(/<input type="button"/, '<input type="button" class="am-btn am-btn-xs"')
        .replace(/<div slot="iffname">[\w\W]*?组织管理/g,'<div slot="iffname" style="height:75px">组织管理')
        .replace(/<input type="radio" name="pub_type" value="0">即时合成发布&nbsp;/,'<label><input type=radio name="pub_type"" value="0">即时合成发布&nbsp;</label>')
        .replace(/<input type="radio" name="pub_type" value="1">提交给后台发布&nbsp;/,'<label><input type=radio name="pub_type"" value="1">提交给后台发布&nbsp;</label>')
        .replace(/<input type="radio" name="pub_type" value="2">只入库不合成&nbsp;/,'<label><input type=radio name="pub_type"" value="2">只入库不合成&nbsp;</label>')
        .replace(/<input type="radio" name="pub_type" value="3" checked="">只合成不发布&nbsp;/,'<label><input type=radio name="pub_type"" value="3" checked>只合成不发布&nbsp;</label>')
        .replace(/<input type="radio" name="__urlradio_1" value="default"/g,'<div class="am-radio-group"><input type="radio" name="__urlradio_1" value="default"')
        .replace(/value="缺省" onclick="setDefaultURL\(1\)">/g,'value="缺省" onclick="setDefaultURL(1)"></div>')
        .replace(/<input type="radio" name="__urlradio_1" value="new_outer"/g,'<div class="am-radio-group"><input type="radio" name="__urlradio_1"')
        .replace(/引用本地网站内容请补全该网站外部访问地址!&quot;\);\}">/g,'引用本地网站内容请补全该网站外部访问地址!&quot;);}"></div>')
        .replace(/<textarea id="_fieldvalue/, '<textarea class="am-form-field" id="_fieldvalue" style="height:77px" ');
      //console.log(ihtml)
    this.$el.innerHTML=ihtml;
  }
});
Vue.component('ifieldintoform', ifieldintoform);

var ifieldintoformdevidor=Vue.extend({
  template: "<div class=\"z-form\"><slot></slot></div>",
    compiled: function () {
        ihtml=this.$el.innerHTML;
        ihtml=ihtml
            .replace(/<select/, '<select class="am-radius am-btn am-btn-xs"  data-am-selected="\{btnSize: \'sm\'\}" ')
            .replace(/<input type="button"/, '<input type="button" class="am-btn am-btn-xs"')
            .replace(/gb样式/g,'<span>gb样式</span>')
            .replace(/选择设置/g,'<span>选择设置</span>');
        //console.log(ihtml)
        this.$el.innerHTML=ihtml;
    }
});
Vue.component('ifieldintoformdevidor', ifieldintoformdevidor);

var igroup = Vue.extend({
    prop:['type'],
    template:'<input class={{type}}>'
});
Vue.component('igroup',igroup);

var ipaggrid=Vue.extend({
  props: ['columns', 'rows', 'colnames'],
  compiled:function () {
      paggridHtml=this.$el.innerHTML;
      paggridHtml=paggridHtml.replace(/<td>不需要<\/td><td><a/g,'<td>不需要</td><td style="display: block" class="am-btn-group am-btn-group-xs"><a')
      paggridHtml=paggridHtml.replace(/>查看/g,'class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-file-text"></span> 查看');
      paggridHtml=paggridHtml.replace(/>修改/g,'class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-font"></span> 修改');
      paggridHtml=paggridHtml.replace(/>删除/g,'class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除');
      this.$el.innerHTML=paggridHtml;
  },
  template: 
  '<div class="panel panel-default">'+
    '<table class="am-table am-table-striped am-table-hover">'+
      '<thead class="panel-heading">'+
        '<tr>'+
          '<th v-for="column in colnames">'+
            '{{{column}}}'+
          '</th>'+
        '</tr>'+
      '</thead>'+
      '<tbody>'+
        '<tr class="z-active" v-for="row in rows">'+
          '<td v-for="column in columns">'+
            '{{{row[column]}}}'+
          '</td>'+
        '</tr>'+
      '</tbody>'+
    '</table>'+
  '</div>'
});
Vue.component('ipaggrid', ipaggrid);

var pagcolumns=[];
var pagcolnames=[];
var pagdatas=[];
if(document.getElementById("igridheader"))
{
  var gridheader=document.getElementById("igridheader").innerHTML;
  var gridths=gridheader.match(/<th[^>]+?>[^<]+?<\/th>/gi);
  re=/<th ([^>]+?)id=([^>]+?)>([^<]+?)<\/th>/i;
  for(i=0;i<gridths.length;i++){
    // console.log(gridths[i]);
    var tharray=re.exec(gridths[i]);
    pagcolumns[i]=tharray[2];
    pagcolnames[i]=tharray[3];
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


