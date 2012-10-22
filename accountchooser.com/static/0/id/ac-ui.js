/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(){var b=void 0,f=!0,h=null,i=!1,j=window,k=jQuery;function m(a,c){return a.execute=c}function aa(a,c){return a.language=c}
var n="replace",p="attr",q="html",s="location",t="close",u="empty",ba="label",v="images",w="addClass",x="page",y="click",z="param",A="length",B="title",D="prototype",E="labels",F="call",G="appendTo",H="append",da="",ea=" (",fa='")',ga="&lang=",ha="', ignored!",ia=")",ka=".widget-error",la=".widget-error p",ma=".widget-footer a.widget-account-add",na=".widget-footer a.widget-button-skip",oa=".widget-footer a.widget-keyhole-button",pa="/favicon.ico",I="<a>",qa="<br>",ra="<center>",K="<div>",sa="<h1>",
ta="<h2>",L="<img>",ua="<input type=",va="<input type=button>",wa="<input type=checkbox>",xa="<label>",M="<li>",ya="<nobr>",N="<ol>",O="<p>",P="<span>",za="<strong>",Ba="<table>",Q="<td>",Ca="<tr>",Da=">",Ea="?",Fa="?lang=",Ga="Beberapa laman akan meminta sandi Anda, tetapi laman yang lain akan membuat Anda masuk secara otomatis setelah Anda mengeklik nama akun.",Ha="Empty request received, ignored.",Ia="Error request type: expect type is {",Ja="Ingat akun ini",Ka="Invalid Request",La="Konfirmasi detail yang akan ditampilkan di Pemilih Akun Anda.",
Ma="Lelah karena keseringan masuk? Tambahkan akun Anda di sini. Aplikasi baru (misalnya situs web berbelanja) bahkan dapat memungkinkan Anda mendaftar cukup dengan mengeklik akun atau memasukkan sandinya.",Na="Method not found",Oa="Parameter must be a Request type.",Pa="Service is disabled. Method is not available.",Qa="Setelah menambahkan akun ke perangkat ini, Anda tidak perlu mengetik alamat email setiap kali laman meminta Anda untuk masuk. Cukup pilih akun yang benar dari daftar.",Ra="Tambahkan akun",
Sa="Tambahkan akun Anda ke perangkat ini",Ta="Tentang Pemilih Akun",Ua="Unimplemented 'execute' method!",Va="Unrecognized config parameter '",Wa="_blank",Xa="account",Ya="account.email",Za="accountchooserpageurl",$a="anytabheader",ab="apiversion",bb="arrowUrl",cb="backgroundImage",db="border",eb="both",fb="busyIcon",gb="busyLabel",hb="callbackurl",R="caption",ib="cdsclientcallbackurl",jb="cdsemptyresponsehandler",kb="cellpadding",lb="cellspacing",mb="checked",nb="checkusernameformat",ob="cl",pb="clear",
qb="clientCallbackUrl",rb="companyname",sb="container",tb="defaultPhotoUrl",ub="developerkey",vb="display",wb="dropdownmenu",xb="email",yb="federatedsignupurl",zb="forgoturl",Ab="gitclient",S="handler",Bb="homeurl",T="href",Cb="http://",Db="idp",Eb="idpFilter",Fb="idpId",Gb="idpconfig",U="idps",Hb="index",Ib="infoHtml",Jb="inputClass",V="javascript: void(0)",Kb="keyholeUrl",W="label",Lb="labelHtml",Mb="language",Nb="legacy",Ob="li",Pb="li:eq(",Qb="linkHtml",Rb="linkUrl",Sb="localtabheader",Tb="loginurl",
Ub="logouthandler",Vb="logouturl",Wb="menuArray",Xb="mode",Yb="nascarIdpList",Zb="negativeCallbackUrl",$b="none",ac="object",bc="onAccountClicked",cc="onAddAccountClicked",dc="onCloseIconClicked",ec="onShareCancelClicked",fc="onShareConfirmedClicked",gc="onUpdateCancelClicked",hc="onUpdateConfirmedClicked",ic="opt_closeIcon",jc="opt_handler",kc="parent",lc="password",mc="photoUrl",nc="positiveCallbackUrl",oc="readonly",pc="realm",qc="removable",rc="removeHandler",sc="removeTitle",tc="resource",uc=
"returntourl",vc="selectable",wc="showAll",xc="showaccountsmenu",yc="signupurl",zc="sitedisplaynameid",Ac="siteemailid",Bc="sitelogourl",Cc="sitepasswordid",Dc="sitephotourlid",X="src",Ec="storeaccount",Fc="string",Gc="styleClass",Hc="supportlegacyusername",Ic="target",Jc="text",Y="title",Kc="tryfederatedfirst",Lc="uiconfig",Mc="url or handler",Nc='url("',Oc="usecacheduserstatus",Pc="usecds",Qc="usecontextparam",Rc="usefullpageredirect",Sc="usernameregex",Tc="userstatusurl",Uc="widget-account",Vc=
"widget-account-add",Wc="widget-account-email",Xc="widget-account-idp",Yc="widget-account-name",Zc="widget-account-photo",$c="widget-account-remove",ad="widget-account-select",bd="widget-accounts widget-main",cd="widget-button",dd="widget-button-left",ed="widget-button-link",fd="widget-button-middle",gd="widget-button-right",hd="widget-button-skip",id="widget-checkbox",jd="widget-checkbox-text",kd="widget-choice-link",ld="widget-close-icon",md="widget-email-only",nd="widget-empty-request widget-main",
od="widget-error",pd="widget-footer",qd="widget-header",rd="widget-header-bar",sd="widget-header-with-sub",td="widget-idp",ud="widget-idp-icon",vd="widget-idp-link",wd="widget-input-button",xd="widget-keyhole-button",yd="widget-link",zd="widget-loading",Ad="widget-main",Bd="widget-message",Cd="widget-nascar-list",Dd="widget-navbar-arrow",Ed="widget-navbar-menu",Fd="widget-navbar-menuitem",Gd="widget-panel-chooser",Hd="widget-selectable-account",Id="width",Jd="wizard-idp",Kd="}.",Z;
j.accountchooser=j.accountchooser||{};j.cds=j.accountchooser;j.accountchooser.images=k.extend(j.accountchooser[v]||{},{noPhoto:"static/image/generic_avatar.png",manHome:"static/image/man-personal.jpg",manWork:"static/image/man-professional.jpg",womanHome:"static/image/woman-personal.jpg",womanWork:"static/image/woman-professional.jpg"});
j.accountchooser.labels=k.extend(j.accountchooser[E]||{},{shareAccountPage:{title:Ra,titleMultiple:"Menambahkan akun",confirm:Ja,confirmMultiple:Ja,cancel:"Lewati ini"},updateAccountPage:{title:"Memperbarui akun",confirm:"Perbarui akun",cancel:"Batal"},selectAccountPage:{title:"Masuk ke",addAccount:Ra},manageAccountPage:{title:"Mengelola akun",deleteReminder:"Akun dihapus. Pada beberapa situs web, Anda mungkin masih masuk ke dalam akun ini, atau situs tersebut mungkin masih mengingat bahwa Anda menggunakan akun ini."},
manageContainer:{header:"Kelola Pemilih Akun Anda",description:La},selectContainer:{header:"Pilih akun untuk dimasuki"},storeContainer:{header:Sa,headerMultiple:Sa,description:Ma,descriptionMultiple:Ma,benefits:[Qa,Ga]},updateContainer:{header:"Perbarui detail akun Anda",description:La},aboutContainer:{title:Ta,header:Ta,sec1Par1:"Situs web mengganti kotak masuk tradisional dengan pemilih akun untuk membuat situs tersebut lebih aman dan lebih mudah digunakan. Saat mencoba masuk ke situs tersebut, Anda akan melihat laman seperti yang satu ini dengan daftar akun yang paling sering Anda gunakan di komputer ini.",
subHeader1:"Pengguna: Cara kerjanya",sec2Par1:Qa,sec2Par2:Ga,subHeader2:"Pemilik Situs Web: Pelajari cara meningkatkan versi situs Anda",sec3Par1:"Ada beberapa keuntungan dalam meningkatkan versi situs Anda untuk menggunakan Pemilih Akun:",sec3Par1List1:"Meningkatkan tingkat pendaftaran dan masuk ke situs Anda",sec3Par1List2:"Memudahkan situs Anda mendukung penyedia identitas di masa mendatang",sec3Par1List3:"Hanya membutuhkan sedikit perubahan kecil pada situs Anda",deployButton:'<a href="http://accountchooser.net/owners">Pelajari cara untuk dapat menggunakan pemilih akun</a>',
accountManHome:{email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:j.accountchooser[v].manHome},accountManWork:{email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:j.accountchooser[v].manWork},accountWomanHome:{email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:j.accountchooser[v].womanHome},accountWomanWork:{email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:j.accountchooser[v].womanWork}},footerContainer:{copyright:"Hak cipta 2012 OpenID Foundation.",
learnMore:Ta,learnMoreLink:"/learnmore.html"}});j.accountchooser=j.accountchooser||{};j.accountchooser.config=j.accountchooser.config||{};j.accountchooser.config.popup={};j.accountchooser.config.popup.width=520;j.accountchooser.config.popup.height=550;j.accountchooser.config.popup.HTML='<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>%%title%%</title>\n    <style type="text/css">\n      html,\n      body {\n        background: #f6f6f6;\n        text-align: center;\n        margin: 0;\n        padding: 0;\n      }\n      #message span {\n        display: inline-block;\n        margin: 20% 0 0;\n        padding: 20px;\n        font-weight: 300;\n        font-size: 16px;\n        text-align: center;\n        background: #fff;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        -moz-border-radius: 4px;\n        -webkit-border-radius: 4px;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="message">\n      <span>%%message%%</span>\n    </div>\n  </body>\n</html>\n';
j.accountchooser.config.setConfig=function(a){if(a)for(var c in a){var d=a[c];switch(c.toLowerCase()){case Ab:j.accountchooser.config.setWidgetGitClient_(d,c);break;case ab:j.accountchooser.config.setApiVersion_(d,c);break;case ub:j.accountchooser.config.setDeveloperKey_(d,c);break;case Hc:j.accountchooser.config.setSupportLegacyUsername_(d,c);break;case nb:j.accountchooser.config.setCheckUsernameFormat_(d,c);break;case Sc:j.accountchooser.config.setUsernameRegex_(d,c);break;case Qc:j.accountchooser.config.setUseContextParam_(d,
c);break;case Mb:j.accountchooser.config.setLanguage_(d,c);break;case uc:case hb:j.accountchooser.config.setCallbackUrl_(d,c);break;case pc:j.accountchooser.config.setRealm_(d,c);break;case rb:j.accountchooser.config.setCompanyName_(d,c);break;case Id:j.accountchooser.config.setWidgetWidth(d,c);break;case Tb:j.accountchooser.config.setWidgetLoginUrl(d,c);break;case Tc:j.accountchooser.config.setWidgetUserStatusUrl(d,c);break;case yc:j.accountchooser.config.setWidgetSignupUrl(d,c);break;case yb:j.accountchooser.config.setWidgetFederatedSignupUrl(d,
c);break;case Bb:j.accountchooser.config.setWidgetHomeUrl(d,c);break;case zb:j.accountchooser.config.setWidgetForgotUrl(d,c);break;case Za:j.accountchooser.config.setWidgetAccountChooserPageUrl(d,c);break;case Vb:j.accountchooser.config.setWidgetLogoutUrl(d,c);break;case Ub:j.accountchooser.config.setWidgetLogoutHandler(d,c);break;case U:j.accountchooser.config.setWidgetIdps(d,c);break;case Gb:j.accountchooser.config.setWidgetIdpConfig(d,c);break;case Sb:j.accountchooser.config.setWidgetLocalTabHeader(d,
c);break;case $a:j.accountchooser.config.setWidgetAnyTabHeader(d,c);break;case Kc:j.accountchooser.config.setWidgetTryFederatedFirst(d,c);break;case Oc:j.accountchooser.config.setWidgetUseCachedUserStatus(d,c);break;case xc:j.accountchooser.config.setWidgetShowAccountsMenu(d,c);break;case wb:j.accountchooser.config.setWidgetDrowdownMenu(d,c);break;case Bc:j.accountchooser.config.setWidgetSiteLogoUrl(d,c);break;case Rc:j.accountchooser.config.setWidgetUseFullPageRedirect(d,c);break;case Pc:j.accountchooser.config.setWidgetUseCds(d,
c);break;case jb:j.accountchooser.config.setCdsEmptyResponseHandler(d,c);break;case ib:j.accountchooser.config.setCdsClientCallbackUrl(d,c);break;case Lc:j.accountchooser.config.setCdsUiConfig(d,c);break;case Ac:j.accountchooser.config.setSiteEmailId(d,c);break;case Cc:j.accountchooser.config.setSitePasswordId(d,c);break;case zc:j.accountchooser.config.setSiteDisplayNameId(d,c);break;case Dc:j.accountchooser.config.setSitePhotoUrlId(d,c);break;case Xb:j.accountchooser.config.setMode(d,c);break;case Ec:j.accountchooser.config.setStoredAccount(d,
c);break;default:j.accountchooser.config.logUnrecognizedConfig_(c)}}};j.accountchooser.config.logUnrecognizedConfig_=function(a){j.accountchooser.util&&j.accountchooser.util.log&&j.accountchooser.util.log(Va+a+ha)};j.accountchooser.config.setApiVersion_=function(a,c){j.gapi&&j.gapi.client?(j.accountchooser[z].notEmpty(a,c),j.accountchooser.config.apiVersion=a):j.googleapis?(j.accountchooser[z].notEmpty(a,c),j.accountchooser.config.apiVersion=a,j.googleapis.setVersions({identitytoolkit:a})):j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setDeveloperKey_=function(a,c){j.gapi&&j.gapi.client&&j.gapi.client.setApiKey?(j.accountchooser[z].notEmpty(a,c),j.gapi.client.setApiKey(a)):j.googleapis?(j.accountchooser[z].notEmpty(a,c),j.googleapis.setDeveloperKey(a)):j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setSupportLegacyUsername_=function(a){j.accountchooser.config.supportLegacyUsername=!!a};
j.accountchooser.config.setCheckUsernameFormat_=function(a){j.accountchooser.config.disableUsernameFormatCheck=!a};j.accountchooser.config.setUsernameRegex_=function(a){j.accountchooser.config.usernameRegex=a};j.accountchooser.config.setUseContextParam_=function(a){j.accountchooser.config.useContextParam=!!a};j.accountchooser.config.setLanguage_=function(a){aa(j.accountchooser.config,a)};
j.accountchooser.config.setCallbackUrl_=function(a,c){j.accountchooser[z].notEmpty(a,c);j.accountchooser.config.continueUrl=a};j.accountchooser.config.setRealm_=function(a){j.accountchooser.config.realm=a};j.accountchooser.config.setCompanyName_=function(a){j.accountchooser[E]&&j.accountchooser.config.replaceCompanyName_(j.accountchooser[E],a)};
j.accountchooser.config.replaceCompanyName_=function(a,c){for(var d in a){var e=a[d];typeof e==Fc?a[d]=e[n](/\%\%companyName\%\%/g,c):typeof e==ac&&j.accountchooser.config.replaceCompanyName_(e,c)}};j.accountchooser.config.setWidgetGitClient_=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetWidth=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetLoginUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setWidgetSignupUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetFederatedSignupUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetUserStatusUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetForgotUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetHomeUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setWidgetIdps=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetIdpConfig=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetLocalTabHeader=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetAnyTabHeader=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetTryFederatedFirst=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setWidgetUseCachedUserStatus=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetShowAccountsMenu=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetLogoutUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetLogoutHandler=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setWidgetDrowdownMenu=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetSiteLogoUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetUseFullPageRedirect=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setWidgetUseCds=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setCdsEmptyResponseHandler=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setCdsClientCallbackUrl=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setCdsUiConfig=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setSiteEmailId=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setSitePasswordId=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};
j.accountchooser.config.setSiteDisplayNameId=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setSitePhotoUrlId=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setMode=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.config.setStoredAccount=function(a,c){j.accountchooser.config.logUnrecognizedConfig_(c)};j.accountchooser.setConfig=function(a){j.accountchooser.config.setConfig(a)};
j.accountchooser.Page=j.accountchooser.Page||function(){};Z=j.accountchooser.Page[D];Z.render=function(a,c,d){j.accountchooser[z].notNull(a,sb);j.accountchooser[z].notNull(c,tc);this.container_=a;this.resource_=c;this.showCloseIcon_=!!d};Z.getContainer=function(){return this.container_};Z.getResource=function(){return this.resource_};Z.isShowCloseIcon=function(){return this.showCloseIcon_};Z.createTable=function(a){var c=k(Ba)[p](lb,0)[p](kb,0)[p](db,0);a&&c[w](a);return c};
Z.createButton=function(a,c,d){j.accountchooser[z].notEmpty(a,R);j.accountchooser[z].notEmpty(c,S);a=k(va).val(a)[w](wd);d&&a[w](d);var e=this;a[y](function(){e[c][F](e)});return a};Z.createLinkButton=function(a,c,d){j.accountchooser[z].notEmpty(a,R);j.accountchooser[z].notEmpty(c,S);a=k(I)[w](yd)[q](a);d&&a[w](d);var e=this;a[y](function(){e[c][F](e);return i});return a};
Z.createRenderedButton=function(a,c,d){j.accountchooser[z].notEmpty(a,R);j.accountchooser[z].notEmpty(c,S);a=k(I)[q](a)[w](ed);var e=this.createTable(cd);d&&e[w](d);d=k(Ca)[G](e);k(Q)[w](dd)[G](d);k(Q)[w](fd)[H](a)[G](d);k(Q)[w](gd)[G](d);var g=this;k(e)[y](function(){g[c][F](g);return i});return e};Z.createTextBox=function(a,c,d){j.accountchooser[z].notEmpty(a,Jb);c=k(ua+(c?lc:Jc)+Da);c[w](a);if(d){var e=this;c.keypress(function(a){e[d][F](e,a)})}return c};
Z.createCheckbox=function(a,c,d){j.accountchooser[z].notNull(a,Lb);c=k(wa)[p](mb,!!c);a=k(xa)[w](jd)[H](c)[H](a);a=k(K)[w](id)[H](a);d&&a[w](d);return a};Z.createChoiceLink=function(a,c){j.accountchooser[z].notEmpty(a,R);j.accountchooser[z].notEmpty(c,S);var d=k(K)[w](kd);this.createLinkButton(a,c)[G](d);return d};
Z.createInfoLinkSection=function(a,c,d,e){j.accountchooser[z].notEmpty(a,Ib);j.accountchooser[z].notEmpty(c,Qb);j.accountchooser[z].notEmpty(d,S);j.accountchooser[z].notEmpty(e,Gc);c=k(I)[q](c);a=k(K)[w](e)[H](a)[H](c);var g=this;c[y](function(){g[d][F](g);return i});return a};Z.createInfoLink=function(a,c,d,e,g){j.accountchooser[z].notEmpty(c,Qb);j.accountchooser[z].notEmpty(d,Rb);j.accountchooser[z].notEmpty(e,Gc);c=k(I)[q](c)[p](T,d)[p](Ic,g||Wa);e=k(K)[w](e);a&&e[H](a);e[H](c);return e};
Z.createNascarLink_=function(a,c,d){j.accountchooser[z].notEmpty(a,Db);j.accountchooser[z].notEmpty(c,Fb);j.accountchooser[z].notEmpty(d,S);var e=k(K)[w](td),g=k(I)[p](T,V)[G](e),l=this.createTable(vd)[G](g),l=k(Ca)[G](l);l[H](k(Q)[H](k(L)[p](X,a.image)[w](ud)));l[H](k(Q)[H](a[ba]));var r=this;g[y](function(){r[d][F](r,c);return i});return e};
Z.createNascarList=function(a,c,d){j.accountchooser[z].notEmpty(a,U);j.accountchooser[z].notEmptyArray(c,Yb);j.accountchooser[z].notEmpty(d,S);for(var e=k(K)[w](Cd),g=0;g<c[A];g++){var l=c[g];this.createNascarLink_(a[l],l,d)[G](e)}return e};Z.createNascarSection=function(a,c,d,e){j.accountchooser[z].notNull(a,W);j.accountchooser[z].notEmpty(c,U);j.accountchooser[z].notEmptyArray(d,Yb);j.accountchooser[z].notEmpty(e,S);a=k(O)[H](a);this.createNascarList(c,d,e)[G](a);return a};
Z.createHeader=function(a,c,d,e,g){j.accountchooser[z].notNull(a,Y);var l=k(K)[w](rd);this.header=k(K)[q](a)[w](qd)[G](l);if(c){j.accountchooser[z].notEmpty(d,ic);j.accountchooser[z].notEmpty(e,jc);a=k(L)[p](X,d)[w](ld)[G](l);g&&a[p](Y,g);var r=this;a[y](function(){r[e][F](r)})}l[H](k(K).css(pb,eb));return l};
Z.appendLabelledTextBox=function(a,c,d,e,g){j.accountchooser[z].notNull(a,kc);j.accountchooser[z].notNull(c,W);j.accountchooser[z].notEmpty(d,Jb);c&&a[H](c)[H](qa);a[H](this.createTextBox(d,e,g))};Z.appendErrorDiv=function(a){j.accountchooser[z].notNull(a,kc);return k(K)[w](od)[G](a)};Z.appendMessageDiv=function(a){j.accountchooser[z].notNull(a,kc);return k(K)[w](Bd)[G](a).hide()};Z.appendClearDiv=function(a){j.accountchooser[z].notNull(a,kc);k(K)[w](ob)[G](a)};
Z.putCenter=function(a,c){var d=k(ra);a&&d[H](a);c&&d[G](c);return d};Z.createIconButton=function(a,c,d,e){var g=k(K)[w](Jd);e&&g[w](e);e=k(I)[p](T,V);e[H](k(L)[p](X,a));var l=this;g[y](function(){l[c][F](l,d);return i});e[G](g);return g};
Z.createNascarLink_=function(a,c,d){j.accountchooser[z].notEmpty(a,Db);j.accountchooser[z].notEmpty(c,Fb);j.accountchooser[z].notEmpty(d,S);var e=k(M).css(cb,Nc+a.image+fa)[w](td),g=this;k(I)[p](T,V)[H](k(P)[q](a[ba]))[G](e)[y](function(){g[d][F](g,c);return i});return e};Z.createNascarList=function(a,c,d){j.accountchooser[z].notEmpty(a,U);j.accountchooser[z].notEmptyArray(c,Yb);j.accountchooser[z].notEmpty(d,S);for(var e=k(N),g=0;g<c[A];g++){var l=c[g];this.createNascarLink_(a[l],l,d)[G](e)}return e};
Z.createNascarSection=function(a,c,d,e){j.accountchooser[z].notEmpty(c,U);j.accountchooser[z].notEmptyArray(d,Yb);j.accountchooser[z].notEmpty(e,S);a=k(K)[w](Cd)[H](k(ta)[q](a));this.createNascarList(c,d,e)[G](a);return a};Z.createHeader=function(a,c,d,e,g,l){j.accountchooser[z].notNull(a,Y);a=k(K)[w](qd)[H](k(sa)[q](a));l&&a[w](l);if(c){j.accountchooser[z].notEmpty(e,jc);c=k(P)[w](ld)[G](a);g&&c[p](Y,g);var r=this;c[y](function(){r[e][F](r)})}return a};
Z.createAccountBox=function(a,c,d,e,g,l,r,C,ca){j.accountchooser[z].notEmpty(a,xb);j.accountchooser[z].notNull(c,Nb);j.accountchooser[z].notEmpty(e,mc);j.accountchooser[z].notEmpty(g,S);j.accountchooser[z].notEmpty(r,rc);j.accountchooser[z].notEmpty(C,sc);var J=k(M)[w](Uc);k(L)[p](X,e)[w](Zc)[G](J);var Aa=k(O)[G](J);d?Aa[H](k(za)[w](Yc)[q](d)):Aa[w](md);Aa[H](k(P)[w](Wc)[q](a));C=k(I)[w]($c)[p](Y,C)[p](T,V)[G](J);C[H](k(L)[p](X,l));var ja=this;J[y](function(){ja[g][F](ja,{email:a,displayName:d,legacy:!!c,
photoUrl:e,providerId:ca});return i});C[y](function(){ja[r][F](ja,{email:a,displayName:d,legacy:!!c,photoUrl:e,providerId:ca});return i});return J};Z.createPopupIndicator=function(a,c,d){j.accountchooser[z].notEmpty(a,fb);j.accountchooser[z].notEmpty(c,gb);j.accountchooser[z].notEmpty(d,S);var e=k(K)[w](Ad),g=k(K)[w](zd)[G](e);g[H](k(L)[p](X,a));g[H](k(O)[q](c));var l=this;e[y](function(){l[d][F](l);return i});return e};
Z.createLegacyAccountSignInBox=function(a,c,d,e){j.accountchooser[z].notEmpty(a,xb);j.accountchooser[z].notEmpty(d,mc);var g=k(M)[w](Uc);e&&g[w](e);k(L)[p](X,d)[w](Zc)[G](g);d=k(O)[G](g);c?d[H](k(za)[w](Yc)[q](c)):d[w](md);d[H](k(P)[w](Wc)[q](a));return g};
Z.createKeyholeButton=function(a,c,d,e){j.accountchooser[z].notEmpty(a,Kb);j.accountchooser[z].notEmpty(c,R);j.accountchooser[z].notEmpty(d,S);var g=k(I)[p](T,V)[w](xd);e&&g[w](e);k(L)[p](X,a)[G](g);g[H](c);var l=this;g[y](function(){l[d][F](l);return i});return g};Z.createRenderedButton=function(a,c,d){j.accountchooser[z].notEmpty(a,R);j.accountchooser[z].notEmpty(c,S);var e=k(I)[p](T,V)[w](xd);d&&e[w](d);e[H](a);var g=this;e[y](function(){g[c][F](g);return i});return e};
Z.appendErrorDiv=function(a){j.accountchooser[z].notNull(a,kc);return k(K)[w](od)[H](k(O))[G](a)};
Z.createAccountBox_=function(a,c,d,e){j.accountchooser[z].notNull(a,Xa);j.accountchooser[z].notEmpty(a.email,Ya);j.accountchooser[z].notEmpty(c,tb);j.accountchooser[z].notEmpty(d,Xb);var g=a.email;a.providerId&&(g+=ea+a.providerId+ia);var g=k(M)[p](Y,g),l=k(L)[p](X,a.photoUrl||c)[w](Zc)[G](g);l.error(function(){l[p](X,c)});var r=k(O)[G](g);a.displayName?r[H](k(za)[w](Yc)[q](a.displayName)):r[w](md);r[H](k(P)[w](Wc)[q](a.email));if(a.providerId){var C=k(P)[w](Xc)[q](a.providerId)[G](r),r=Cb+a.providerId+
pa,ca=k(L)[p](X,r)[p](Y,a.providerId);ca.load(function(){C[u]();ca[G](C)})}d==qc?(k(P)[w]($c)[G](g),g[w](Hd)):d==vc&&(k(P)[w](ad)[G](g),g[w](Hd));if(e){var J=this;g[y](function(){J[e][F](J,a);return i})}return g};Z.createSelectableAccountBox=function(a,c,d){j.accountchooser[z].notEmpty(d,S);return this.createAccountBox_(a,c,vc,d)};Z.createRemovableAccountBox=function(a,c,d){j.accountchooser[z].notEmpty(d,S);return this.createAccountBox_(a,c,qc,d)};
Z.createAccountBox=function(a,c){return this.createAccountBox_(a,c,oc)};Z.createLearnMoreLink=function(a,c,d){d&&(c=0>c.indexOf(Ea)?c+(Fa+d):c+(ga+d));return k(I)[p](T,c)[p](Ic,Wa)[q](a)};Z.createHeader=function(a,c,d,e,g,l,r){j.accountchooser[z].notNull(a,Y);a=k(K)[w](qd)[H](k(sa)[q](a));c&&(k(ta)[q](c)[G](a),a[w](sd));r&&a[w](r);if(d){j.accountchooser[z].notEmpty(g,jc);c=k(P)[w](ld)[G](a);l&&c[p](Y,l);var C=this;c[y](function(){C[g][F](C)})}return a};
Z.clearError=function(){k(ka,this.container_).hide();this.getErrorElement()[u]()};Z.isShowingError=function(){return k(ka,this.container_).css(vb)!=$b};Z.setError=function(a){k(ka,this.container_).show();this.getErrorElement()[q](a)};Z.getErrorElement=function(){return k(la,this.container_)};Z.getAccountElements=function(){return k(Ob,this.container_)};Z.getAccountElement=function(a){j.accountchooser[z].notNull(a,Hb);return k(Pb+a+ia,this.container_)};Z.getConfirmElement=function(){return k(oa,this.container_)};
Z.getCancelElement=function(){return k(na,this.container_)};Z.getAddAccountElement=function(){return k(ma,this.container_)};Z.createSigninBar=function(a,c,d,e){j.accountchooser[z].notEmpty(a,mc);j.accountchooser[z].notEmpty(c,W);j.accountchooser[z].notEmpty(d,S);return this.createKeyholeButton(a,c,d,e)};
Z.createNavBar=function(a,c,d,e,g){j.accountchooser[z].notEmpty(a,mc);j.accountchooser[z].notEmpty(c,W);j.accountchooser[z].notEmpty(d,S);j.accountchooser[z].notEmpty(e,bb);var l=k(I)[p](T,V)[w](xd);g&&l[w](g);k(L)[p](X,a)[G](l);l[H](k(P)[q](c));k(L)[w](Dd)[p](X,e)[G](l);var r=this;l[y](function(){r[d][F](r);return i});return l};
Z.createDropMenu=function(a){j.accountchooser[z].notEmpty(a,Wb);for(var c=k(N)[w](Ed),d=0;d<a[A];d++){var e=a[d];e&&(e[ba]&&(e.url||e.handler))&&c[H](this.createMenuItem_(e[ba],e.url,e.handler,e.opt_styleClass))}return c};Z.createMenuItem_=function(a,c,d,e){j.accountchooser[z].notEmpty(a,W);j.accountchooser[z].notEmpty(c||d,Mc);var g=k(M)[w](Fd);e&&g[w](e);var l=this;k(I)[H](k(ya)[q](a))[G](g)[y](function(){k.isFunction(d)?d[F](l):d?l[d][F](l):j[s].href=c;return i});return g};
j.accountchooser.page=j.accountchooser[x]||{};j.accountchooser[x].EmptyRequestPage=function(){};j.accountchooser[x].EmptyRequestPage.inheritsFrom(j.accountchooser.Page);j.accountchooser[x].EmptyRequestPage[D].render=function(a,c,d){this.clientDomain_=c;this.parentClass.render[F](this,a,d||j.accountchooser[E].emptyRequestPage,i);this.render_()};
j.accountchooser[x].EmptyRequestPage[D].render_=function(){this.createHeader(this.resource_[B],this.showCloseIcon_,this.resource_.closeIcon,dc,this.resource_[t])[G](this.container_);var a=k(K)[w](nd)[G](this.container_);this.appendErrorDiv(a)[q](this.resource_.msg);a=k(K)[G](a);this.clientDomain_?a[q](this.resource_.actionWithDomain[n](/\%\%domain\%\%/g,this.clientDomain_)):a[q](this.resource_.action);a=k(K)[w](pd)[G](this.container_);k(I)[p](T,this.resource_.acSiteUrl)[p](Ic,Wa)[q](this.resource_.acSiteText)[G](a)};
j.accountchooser[x].ShareAccountPage=function(){};j.accountchooser[x].ShareAccountPage.inheritsFrom(j.accountchooser.Page);j.accountchooser[x].ShareAccountPage[D].render=function(a,c,d){this.accounts_=c;c=d;c||(c=j.accountchooser[E].shareAccountPage);this.parentClass.render[F](this,a,c,i);this.render_()};
j.accountchooser[x].ShareAccountPage[D].render_=function(){this.createHeader(1>=this.accounts_[A]?this.resource_[B]:this.resource_.titleMultiple,h,this.showCloseIcon_,this.resource_.closeIcon,dc,this.resource_[t])[G](this.container_);var a=k(K)[w](bd)[G](this.container_),c=j.accountchooser[v].noPhoto;if(this.accounts_[A])for(var a=k(N)[G](a),d=0;d<this.accounts_[A];d++){var e=this.accounts_[d];e&&this.createAccountBox(e,c)[G](a)}c=k(K)[w](pd)[G](this.container_);this.createRenderedButton(1>=this.accounts_[A]?
this.resource_.confirm:this.resource_.confirmMultiple,fc)[G](c);this.createLinkButton(this.resource_.cancel,ec,hd)[G](c)};j.accountchooser[x].ShareAccountPage[D].onShareConfirmedClicked=function(){};j.accountchooser[x].ShareAccountPage[D].onShareCancelClicked=function(){};j.accountchooser[x].SelectAccountPage=function(){};j.accountchooser[x].SelectAccountPage.inheritsFrom(j.accountchooser.Page);
j.accountchooser[x].SelectAccountPage[D].render=function(a,c,d,e,g,l,r){this.localAccounts_=c||[];this.cdsAccounts_=d||[];c=r;c||(c=j.accountchooser[E].selectAccountPage);this.parentClass.render[F](this,a,c,i);this.showAllInfo=!!e;this.siteDomain=g||da;aa(this,l);this.render_()};
j.accountchooser[x].SelectAccountPage[D].render_=function(){this.createHeader(this.resource_[B],this.siteDomain,this.showCloseIcon_,this.resource_.closeIcon,dc,this.resource_[t])[G](this.container_);var a=k(K)[w](bd)[G](this.container_),c=j.accountchooser[v].noPhoto;if(this.localAccounts_[A])for(var d=k(N)[G](a),e=0;e<this.localAccounts_[A];e++){var g=this.localAccounts_[e];g&&g.email&&this.createSelectableAccountBox(g,c,bc)[G](d)}if(this.cdsAccounts_[A]){d=k(N)[G](a);for(e=0;e<this.cdsAccounts_[A];e++)(g=
this.cdsAccounts_[e])&&g.email&&this.createSelectableAccountBox(g,c,bc)[G](d)}a=k(K)[w](pd)[G](this.container_);this.createLinkButton(this.resource_.addAccount,cc,Vc)[G](a)};j.accountchooser[x].SelectAccountPage[D].onAccountClicked=function(){};j.accountchooser[x].SelectAccountPage[D].onAddAccountClicked=function(){};j.accountchooser[x].UpdateAccountPage=function(){};j.accountchooser[x].UpdateAccountPage.inheritsFrom(j.accountchooser.Page);
j.accountchooser[x].UpdateAccountPage[D].render=function(a,c,d,e){this.account_=c;c=e;c||(c=j.accountchooser[E].updateAccountPage);this.parentClass.render[F](this,a,c,i);aa(this,d);this.render_()};
j.accountchooser[x].UpdateAccountPage[D].render_=function(){this.createHeader(this.resource_[B],h,this.showCloseIcon_,this.resource_.closeIcon,dc,this.resource_[t])[G](this.container_);var a=k(K)[w](bd)[G](this.container_),a=k(N)[G](a);this.createAccountBox(this.account_,j.accountchooser[v].noPhoto)[G](a);a=k(K)[w](pd)[G](this.container_);this.createRenderedButton(this.resource_.confirm,hc)[G](a);this.createLinkButton(this.resource_.cancel,gc,hd)[G](a)};
j.accountchooser[x].UpdateAccountPage[D].onUpdateConfirmedClicked=function(){};j.accountchooser[x].UpdateAccountPage[D].onUpdateCancelClicked=function(){};j.accountchooser[x].ManageAccountPage=function(){};j.accountchooser[x].ManageAccountPage.inheritsFrom(j.accountchooser.Page);j.accountchooser[x].ManageAccountPage[D].render=function(a,c,d,e){this.accounts_=c||[];this.parentClass.render[F](this,a,e||j.accountchooser[E].manageAccountPage,i);aa(this,d);this.render_()};
j.accountchooser[x].ManageAccountPage[D].render_=function(){this.createHeader(this.resource_[B],h,this.showCloseIcon_,this.resource_.closeIcon,dc,this.resource_[t])[G](this.container_);var a=k(K)[w](bd)[G](this.container_);this.appendErrorDiv(a).hide();var c=j.accountchooser[v].noPhoto;if(this.accounts_[A])for(var a=k(N)[G](a),d=0;d<this.accounts_[A];++d){var e=this.accounts_[d];e&&e.email&&this.createRemovableAccountBox(e,c,bc)[G](a)}};j.accountchooser[x].ManageAccountPage[D].onAccountClicked=function(){};
j.accountchooser.Service=function(){};Z=j.accountchooser.Service[D];Z.setCdsConfig=function(a){this.cdsConfig_=a};Z.setContainer=function(a){this.container_=a};Z.checkRequestType_=function(a,c){var d=h;!this.request_ instanceof j.accountchooser.rpc.Request?d={code:-32600,message:Ka,data:Oa}:!this.request_ instanceof a&&(d={code:-32600,message:Ka,data:Ia+a+Kd});return d?(this.sendErrorResponse_(d,c),i):f};
Z.executeRequest=function(a,c){a?(this.request_=a,this.clientDomain_=c,j.accountchooser.util.browserconfig.isDisabled()&&!(this instanceof j.accountchooser.ManageService)&&!(this instanceof j.accountchooser.AboutService)?this.sendDisabledErrorResponse_():this.execute()):j.accountchooser.util.log(Ha)};m(Z,function(){this.sendErrorResponse_({code:-32601,message:Na,data:Ua})});Z.sendResponse_=function(a,c){j.accountchooser.rpc.callClient(a);c||this.goToClient()};
Z.sendErrorResponse_=function(a,c){var d=new j.accountchooser.rpc.Response(this.request_.getId(),b,a);this.sendResponse_(d,c)};Z.sendDisabledErrorResponse_=function(a){this.sendErrorResponse_({code:-32601,message:Na,data:Pa},a)};Z.sendDoneResponse_=function(a,c){var d=new j.accountchooser.rpc.Response(this.request_.getId(),a);this.sendResponse_(d,c)};
Z.sendStoreResponse=function(a,c){var d=this.getClientConfigValue(nc),e=this.getClientConfigValue(Zb);a&&d?j[s][n](d):!a&&e?j[s][n](e):this.sendDoneResponse_({stored:a},c)};Z.sendSelectResponse=function(a,c,d){this.sendDoneResponse_({account:a,idpAssertion:c},d)};Z.sendAddAccountResponse=function(a){this.sendDoneResponse_({addAccount:f},a)};
Z.sendUpdateResponse=function(a,c){var d=this.getClientConfigValue(nc),e=this.getClientConfigValue(Zb);a&&d?j[s][n](d):!a&&e?j[s][n](e):this.sendDoneResponse_({updated:a},c)};Z.goToClient=function(){var a=this.request_;this.clientDomain_=this.request_=h;this.cdsConfig_.popupMode?a.params_.clientConfig.keepPopup||j[t]():j.location=a.params_.clientConfig.clientCallbackUrl};Z.getClientConfigValue=function(a){return a&&this.request_&&this.request_.params_&&this.request_.params_.clientConfig&&this.request_.params_.clientConfig[a]};
j.accountchooser.ServiceType={MANAGE:"manage",SELECT:"select",STORE:"store",UPDATE:"update",ABOUT:"about"};j.accountchooser.ManageService=function(){};j.accountchooser.ManageService.inheritsFrom(j.accountchooser.Service);m(j.accountchooser.ManageService[D],function(){if(this.checkRequestType_(j.accountchooser.rpc.ManageRequest)){var a=j.accountchooser.util.accountstorage.readAccounts();this.showManageAccountPage_(a)}});
j.accountchooser.ManageService[D].showManageAccountPage_=function(a){this.container_[u]();this.page_=new j.accountchooser[x].ManageAccountPage;var c=this;this.page_.onAccountClicked=function(a){j.accountchooser.util.accountstorage.removeAccount(a);a=j.accountchooser.util.accountstorage.readAccounts();c.showManageAccountPage_(a);c.page_.setError(j.accountchooser[E].manageAccountPage.deleteReminder)};this.page_.render(this.container_,a,b,b,i)};j.accountchooser.StoreService=function(){};j.accountchooser.StoreService.inheritsFrom(j.accountchooser.Service);
m(j.accountchooser.StoreService[D],function(){if(this.checkRequestType_(j.accountchooser.rpc.StoreRequest)){var a=j.accountchooser.util.accountstorage.readAccounts();this.accounts_=[];for(var c=0;c<this.request_.params_.accounts[A];c++){for(var d=this.request_.params_.accounts[c],e=i,g=0;g<a[A];g++)if(j.accountchooser.util.accountstorage.matchAccount_(a[g],d.email,d.providerId)){e=f;break}e||this.accounts_.push(d)}0==this.accounts_[A]?this.sendStoreResponse(f):this.showShareAccountPage_()}});
j.accountchooser.StoreService[D].showShareAccountPage_=function(){this.container_[u]()[w](Gd);var a=this;this.page_=new j.accountchooser[x].ShareAccountPage;this.page_.onShareConfirmedClicked=function(){for(var c=0;c<a.accounts_[A];c++)j.accountchooser.util.accountstorage.addAccount(a.accounts_[c]);a.sendStoreResponse(f)};this.page_.onShareCancelClicked=function(){a.sendStoreResponse(i)};this.page_.render(this.container_,this.accounts_,b,i)};j.accountchooser.SelectService=function(){};j.accountchooser.SelectService.inheritsFrom(j.accountchooser.Service);
Z=j.accountchooser.SelectService[D];m(Z,function(){if(this.checkRequestType_(j.accountchooser.rpc.SelectRequest)){var a=this.getClientConfigValue(wc);this.filter={withEmail:!a,idpList:this.getClientConfigValue(Eb)};var c=j.accountchooser.util.accountstorage.readAccounts(this.filter)||[],d=this.removeDuplicatedAccounts_(this.request_.params_.localAccounts,c);if(!d[A]&&!c[A])this.sendAddAccountResponse();else{var e=this.getClientConfigValue(Mb);this.showSelectAccountPage_(d,c,a,e)}}});
Z.getAssertion_=function(a){var c=j.accountchooser.rpc.isSupportedIdp(a);if(c){var d=this,e=new j.accountchooser.rpc.IdpAuthRequest(a,{clientCallbackUrl:this.getClientConfigValue(qb)});j.accountchooser.rpc.callIdp(c,e,function(c){c&&c.getResult()?d.sendSelectResponse(a,c.getResult().idpAssertion):d.sendSelectResponse(a)},function(){d.sendSelectResponse(a)})}else this.sendSelectResponse(a)};
Z.showSelectAccountPage_=function(a,c,d,e){this.container_[u]()[w](Gd);var g=this;this.page_=new j.accountchooser[x].SelectAccountPage;this.page_.onAccountClicked=function(a){j.accountchooser.util.accountstorage.addAccount(a);g.getAssertion_(a)};this.page_.onAddAccountClicked=function(){g.sendAddAccountResponse()};var l=this.request_.params_.clientConfig.clientCallbackUrl&&j.accountchooser.util.getDomainFromUrl(this.request_.params_.clientConfig.clientCallbackUrl);this.page_.render(this.container_,
a,c,d,l,e,b,i)};Z.removeAccountFromList_=function(a,c){for(var d=0;d<c[A];d++)if(j.accountchooser.util.accountstorage.matchAccount_(c[d],a.email,a.providerId)){c.splice(d,1);break}};Z.removeDuplicatedAccounts_=function(a,c){var d=[];if(a&&a[A])for(var e=0;e<a[A];e++){for(var g=a[e],l=i,r=0;r<c[A];r++)if(j.accountchooser.util.accountstorage.matchAccount_(c[r],g.email,g.providerId)){l=f;break}l||d.push(g)}return d};j.accountchooser.UpdateService=function(){};j.accountchooser.UpdateService.inheritsFrom(j.accountchooser.Service);
m(j.accountchooser.UpdateService[D],function(){if(this.checkRequestType_(j.accountchooser.rpc.UpdateRequest)){for(var a=this.request_.params_.account,c=j.accountchooser.util.accountstorage.readAccounts()||[],d=i,e=0;e<c[A];e++)if(j.accountchooser.util.accountstorage.matchAccount_(c[e],a.email,a.providerId)){d=f;break}d?(c=this.getClientConfigValue(Mb),this.showUpdateAccountPage_(a,c)):this.sendUpdateResponse(i)}});
j.accountchooser.UpdateService[D].showUpdateAccountPage_=function(a,c){this.container_[u]()[w](Gd);var d=this;this.page_=new j.accountchooser[x].UpdateAccountPage;this.page_.onUpdateConfirmedClicked=function(){j.accountchooser.util.accountstorage.refreshAccount(a);d.sendUpdateResponse(f)};this.page_.onUpdateCancelClicked=function(){d.sendUpdateResponse(i)};this.page_.render(this.container_,a,c,b,i)};j.accountchooser.AboutService=function(){};j.accountchooser.AboutService.inheritsFrom(j.accountchooser.Service);
m(j.accountchooser.AboutService[D],function(){});})()
