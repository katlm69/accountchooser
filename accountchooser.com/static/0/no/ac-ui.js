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

(function(){var a=void 0,f=!0,h=null,j=!1,k=window,l=jQuery;function n(b,c){return b.execute=c}function aa(b,c){return b.language=c}
var p="replace",q="attr",r="html",t="location",u="close",ba="displayName",ca="hide",v="empty",da="label",w="images",x="addClass",y="page",z="click",A="param",B="length",C="title",D="prototype",E="labels",G="call",H="appendTo",I="append",ea="",fa=" (",ga='")',ha="&lang=",ia="', ignored!",ja=")",ka=".widget-error",la=".widget-error p",oa=".widget-footer a.widget-account-add",pa=".widget-footer a.widget-button-skip",qa=".widget-footer a.widget-keyhole-button",ra="/favicon.ico",J="<a>",sa="<br>",ta="<center>",
L="<div>",ua="<h1>",va="<h2>",M="<img>",wa="<input type=",xa="<input type=button>",ya="<input type=checkbox>",za="<label>",N="<li>",Aa="<nobr>",O="<ol>",P="<p>",Q="<span>",Ba="<strong>",Ca="<table>",R="<td>",Da="<tr>",Ea=">",Fa="?",Ga="?lang=",Ha="Bekreft opplysningene som skal vises p\u00e5 kontovelgeren din.",Ia="Empty request received, ignored.",Ja="Error request type: expect type is {",Ka="Invalid Request",La="Legg til en konto",Ma="Lei av \u00e5 logge deg p\u00e5 s\u00e5 ofte? Legg til kontoen din her. Nye apper (f.eks. nettbutikker) kan la deg registrere deg ved bare \u00e5 klikke p\u00e5 kontoen eller angi passordet for kontoen.",
Na="Method not found",Oa="Noen sider kommer til \u00e5 be om passordet ditt, mens andre logger deg p\u00e5 automatisk n\u00e5r du klikker p\u00e5 kontonavnet.",Pa="N\u00e5r du legger til en konto p\u00e5 denne enheten, trenger du ikke \u00e5 skrive inn e-postadressen din hver gang du bes om \u00e5 logge deg p\u00e5 en side. Du kan bare velge den rette kontoen fra en liste.",Qa="Om kontovelgeren",Ra="Oppdater kontoen",Sa="Parameter must be a Request type.",Ta="Service is disabled. Method is not available.",
Ua="Unimplemented 'execute' method!",Va="Unrecognized config parameter '",Wa="_blank",Xa="account",Ya="account.email",Za="accountchooserpageurl",$a="alt",ab="anytabheader",bb="apiversion",cb="arrowUrl",db="backgroundImage",eb="border",fb="both",gb="busyIcon",hb="busyLabel",ib="callbackurl",S="caption",jb="cdsclientcallbackurl",kb="cdsemptyresponsehandler",lb="cellpadding",mb="cellspacing",nb="checked",ob="checkusernameformat",pb="cl",qb="clear",rb="clientCallbackUrl",sb="companyname",tb="container",
ub="defaultPhotoUrl",vb="developerkey",wb="display",xb="dropdownmenu",yb="email",zb="federatedsignupurl",Ab="forgoturl",Bb="gitclient",U="handler",Cb="homeurl",V="href",Db="http://",Eb="idp",Fb="idpFilter",Gb="idpId",Hb="idpconfig",Ib="idps",Jb="index",Kb="infoHtml",Lb="inputClass",W="javascript: void(0)",Mb="keyholeUrl",Nb="label",Ob="labelHtml",Pb="language",Qb="legacy",Rb="li",Sb="li:eq(",Tb="linkHtml",Ub="linkUrl",Vb="localtabheader",Wb="loginurl",Xb="logouthandler",Yb="logouturl",Zb="menuArray",
$b="mode",ac="nascarIdpList",bc="negativeCallbackUrl",cc="none",dc="object",ec="onAccountClicked",fc="onAddAccountClicked",gc="onCloseIconClicked",hc="onShareCancelClicked",ic="onShareConfirmedClicked",jc="onUpdateCancelClicked",kc="onUpdateConfirmedClicked",lc="opt_closeIcon",mc="opt_handler",nc="parent",oc="password",pc="photoUrl",qc="positiveCallbackUrl",rc="readonly",sc="realm",tc="removable",uc="removeHandler",vc="removeTitle",wc="resource",xc="returntourl",yc="selectable",zc="showAll",Ac="showaccountsmenu",
Bc="signupurl",Cc="sitedisplaynameid",Dc="siteemailid",Ec="sitelogourl",Fc="sitepasswordid",Gc="sitephotourlid",X="src",Hc="storeaccount",Ic="string",Jc="styleClass",Kc="supportlegacyusername",Lc="target",Mc="text",Y="title",Nc="tryfederatedfirst",Oc="uiconfig",Pc="url or handler",Qc='url("',Rc="usecacheduserstatus",Sc="usecds",Tc="usecontextparam",Uc="usefullpageredirect",Vc="usernameregex",Wc="userstatusurl",Xc="widget-account",Yc="widget-account-add",Zc="widget-account-email",$c="widget-account-idp",
ad="widget-account-name",bd="widget-account-photo",cd="widget-account-remove",dd="widget-account-select",ed="widget-accounts widget-main",fd="widget-button",gd="widget-button-left",hd="widget-button-link",id="widget-button-middle",jd="widget-button-right",kd="widget-button-skip",ld="widget-checkbox",md="widget-checkbox-text",nd="widget-choice-link",od="widget-close-icon",pd="widget-email-only",qd="widget-empty-request widget-main",rd="widget-error",sd="widget-footer",td="widget-header",ud="widget-header-bar",
vd="widget-header-with-sub",wd="widget-idp",xd="widget-idp-icon",yd="widget-idp-link",zd="widget-input-button",Ad="widget-keyhole-button",Bd="widget-link",Cd="widget-loading",Dd="widget-main",Ed="widget-message",Fd="widget-nascar-list",Gd="widget-navbar-arrow",Hd="widget-navbar-menu",Id="widget-navbar-menuitem",Jd="widget-panel-chooser",Kd="widget-selectable-account",Ld="width",Md="wizard-idp",Nd="}.",Z;k.accountchooser=k.accountchooser||{};k.cds=k.accountchooser;
k.accountchooser.images=l.extend(k.accountchooser[w]||{},{noPhoto:"static/image/generic_avatar.png",manHome:"static/image/man-personal.jpg",manWork:"static/image/man-professional.jpg",womanHome:"static/image/woman-personal.jpg",womanWork:"static/image/woman-professional.jpg"});
k.accountchooser.labels=l.extend(k.accountchooser[E]||{},{shareAccountPage:{title:La,titleMultiple:"Legg til kontoer",confirm:"Husk denne kontoen",confirmMultiple:"Husk disse kontoene",cancel:"Hopp over dette"},updateAccountPage:{title:Ra,confirm:Ra,cancel:"Avbryt"},selectAccountPage:{title:"Logg deg p\u00e5",addAccount:La},manageAccountPage:{title:"Administrer kontoer",deleteReminder:"Kontoen ble fjernet. Det er mulig at du fortsatt er p\u00e5logget denne kontoen p\u00e5 enkelte nettsteder, eller at disse nettstedene fortsatt husker at du brukte den."},
manageContainer:{header:"Administrer kontovelgeren din",description:Ha},selectContainer:{header:"Velg kontoen du vil logge deg p\u00e5"},storeContainer:{header:"Legg til kontoen din p\u00e5 denne enheten",headerMultiple:"Legg til kontoene dine p\u00e5 denne enheten",description:Ma,descriptionMultiple:Ma,benefits:[Pa,Oa]},updateContainer:{header:"Oppdater kontodetaljene dine",description:Ha},aboutContainer:{title:Qa,header:Qa,sec1Par1:"Nettsteder erstatter tradisjonelle p\u00e5loggingsfelt med kontovelgeren for \u00e5 gj\u00f8re nettstedet sikrere og enklere \u00e5 bruke. N\u00e5r du pr\u00f8ver \u00e5 logge deg p\u00e5 et slikt nettsted, f\u00e5r du se en liste med kontoene du vanligvis bruker p\u00e5 denne datamaskinen.",
subHeader1:"Brukere: Slik fungerer det",sec2Par1:Pa,sec2Par2:Oa,subHeader2:"Nettstedseiere: Finn ut hvordan du oppgraderer nettstedet ditt",sec3Par1:"Oppgradering av nettstedet ditt til bruk av kontovelgeren har flere fordeler:",sec3Par1List1:"\u00d8k tallene for p\u00e5logging og registrering p\u00e5 nettstedet ditt",sec3Par1List2:"Gj\u00f8r det enklere for nettstedet \u00e5 st\u00f8tte identitetsleverand\u00f8rer i fremtiden",sec3Par1List3:"Det krever bare noen f\u00e5, minimale endringer p\u00e5 nettstedet ditt",
deployButton:'<a href="http://accountchooser.net/owners">Finn ut hvordan du aktiverer kontovelgeren</a>',accountManHome:{email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:k.accountchooser[w].manHome},accountManWork:{email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:k.accountchooser[w].manWork},accountWomanHome:{email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:k.accountchooser[w].womanHome},accountWomanWork:{email:"corlett@alertblue.com",displayName:"Mrs. Corlett",
photoUrl:k.accountchooser[w].womanWork}},footerContainer:{copyright:"Copyright 2012 OpenID Foundation.",learnMore:Qa,learnMoreLink:"/learnmore.html"}});k.accountchooser=k.accountchooser||{};k.accountchooser.config=k.accountchooser.config||{};k.accountchooser.config.popup={};k.accountchooser.config.popup.width=520;k.accountchooser.config.popup.height=550;k.accountchooser.config.popup.HTML='<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>%%title%%</title>\n    <style type="text/css">\n      html,\n      body {\n        background: #f6f6f6;\n        text-align: center;\n        margin: 0;\n        padding: 0;\n      }\n      #message span {\n        display: inline-block;\n        margin: 20% 0 0;\n        padding: 20px;\n        font-weight: 300;\n        font-size: 16px;\n        text-align: center;\n        background: #fff;\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        -moz-border-radius: 4px;\n        -webkit-border-radius: 4px;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="message">\n      <span>%%message%%</span>\n    </div>\n  </body>\n</html>\n';
k.accountchooser.config.setConfig=function(b){if(b)for(var c in b){var d=b[c];switch(c.toLowerCase()){case Bb:k.accountchooser.config.setWidgetGitClient_(d,c);break;case bb:k.accountchooser.config.setApiVersion_(d,c);break;case vb:k.accountchooser.config.setDeveloperKey_(d,c);break;case Kc:k.accountchooser.config.setSupportLegacyUsername_(d,c);break;case ob:k.accountchooser.config.setCheckUsernameFormat_(d,c);break;case Vc:k.accountchooser.config.setUsernameRegex_(d,c);break;case Tc:k.accountchooser.config.setUseContextParam_(d,
c);break;case Pb:k.accountchooser.config.setLanguage_(d,c);break;case xc:case ib:k.accountchooser.config.setCallbackUrl_(d,c);break;case sc:k.accountchooser.config.setRealm_(d,c);break;case sb:k.accountchooser.config.setCompanyName_(d,c);break;case Ld:k.accountchooser.config.setWidgetWidth(d,c);break;case Wb:k.accountchooser.config.setWidgetLoginUrl(d,c);break;case Wc:k.accountchooser.config.setWidgetUserStatusUrl(d,c);break;case Bc:k.accountchooser.config.setWidgetSignupUrl(d,c);break;case zb:k.accountchooser.config.setWidgetFederatedSignupUrl(d,
c);break;case Cb:k.accountchooser.config.setWidgetHomeUrl(d,c);break;case Ab:k.accountchooser.config.setWidgetForgotUrl(d,c);break;case Za:k.accountchooser.config.setWidgetAccountChooserPageUrl(d,c);break;case Yb:k.accountchooser.config.setWidgetLogoutUrl(d,c);break;case Xb:k.accountchooser.config.setWidgetLogoutHandler(d,c);break;case Ib:k.accountchooser.config.setWidgetIdps(d,c);break;case Hb:k.accountchooser.config.setWidgetIdpConfig(d,c);break;case Vb:k.accountchooser.config.setWidgetLocalTabHeader(d,
c);break;case ab:k.accountchooser.config.setWidgetAnyTabHeader(d,c);break;case Nc:k.accountchooser.config.setWidgetTryFederatedFirst(d,c);break;case Rc:k.accountchooser.config.setWidgetUseCachedUserStatus(d,c);break;case Ac:k.accountchooser.config.setWidgetShowAccountsMenu(d,c);break;case xb:k.accountchooser.config.setWidgetDrowdownMenu(d,c);break;case Ec:k.accountchooser.config.setWidgetSiteLogoUrl(d,c);break;case Uc:k.accountchooser.config.setWidgetUseFullPageRedirect(d,c);break;case Sc:k.accountchooser.config.setWidgetUseCds(d,
c);break;case kb:k.accountchooser.config.setCdsEmptyResponseHandler(d,c);break;case jb:k.accountchooser.config.setCdsClientCallbackUrl(d,c);break;case Oc:k.accountchooser.config.setCdsUiConfig(d,c);break;case Dc:k.accountchooser.config.setSiteEmailId(d,c);break;case Fc:k.accountchooser.config.setSitePasswordId(d,c);break;case Cc:k.accountchooser.config.setSiteDisplayNameId(d,c);break;case Gc:k.accountchooser.config.setSitePhotoUrlId(d,c);break;case $b:k.accountchooser.config.setMode(d,c);break;case Hc:k.accountchooser.config.setStoredAccount(d,
c);break;default:k.accountchooser.config.logUnrecognizedConfig_(c)}}};k.accountchooser.config.logUnrecognizedConfig_=function(b){k.accountchooser.util&&k.accountchooser.util.log&&k.accountchooser.util.log(Va+b+ia)};k.accountchooser.config.setApiVersion_=function(b,c){k.gapi&&k.gapi.client?(k.accountchooser[A].notEmpty(b,c),k.accountchooser.config.apiVersion=b):k.googleapis?(k.accountchooser[A].notEmpty(b,c),k.accountchooser.config.apiVersion=b,k.googleapis.setVersions({identitytoolkit:b})):k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setDeveloperKey_=function(b,c){k.gapi&&k.gapi.client&&k.gapi.client.setApiKey?(k.accountchooser[A].notEmpty(b,c),k.gapi.client.setApiKey(b)):k.googleapis?(k.accountchooser[A].notEmpty(b,c),k.googleapis.setDeveloperKey(b)):k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setSupportLegacyUsername_=function(b){k.accountchooser.config.supportLegacyUsername=!!b};
k.accountchooser.config.setCheckUsernameFormat_=function(b){k.accountchooser.config.disableUsernameFormatCheck=!b};k.accountchooser.config.setUsernameRegex_=function(b){k.accountchooser.config.usernameRegex=b};k.accountchooser.config.setUseContextParam_=function(b){k.accountchooser.config.useContextParam=!!b};k.accountchooser.config.setLanguage_=function(b){aa(k.accountchooser.config,b)};
k.accountchooser.config.setCallbackUrl_=function(b,c){k.accountchooser[A].notEmpty(b,c);k.accountchooser.config.continueUrl=b};k.accountchooser.config.setRealm_=function(b){k.accountchooser.config.realm=b};k.accountchooser.config.setCompanyName_=function(b){k.accountchooser[E]&&k.accountchooser.config.replaceCompanyName_(k.accountchooser[E],b)};
k.accountchooser.config.replaceCompanyName_=function(b,c){for(var d in b){var e=b[d];typeof e==Ic?b[d]=e[p](/\%\%companyName\%\%/g,c):typeof e==dc&&k.accountchooser.config.replaceCompanyName_(e,c)}};k.accountchooser.config.setWidgetGitClient_=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetWidth=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetLoginUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setWidgetSignupUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetFederatedSignupUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetUserStatusUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetForgotUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetHomeUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setWidgetIdps=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetIdpConfig=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetLocalTabHeader=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetAnyTabHeader=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetTryFederatedFirst=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setWidgetUseCachedUserStatus=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetShowAccountsMenu=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetLogoutUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetLogoutHandler=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setWidgetDrowdownMenu=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetSiteLogoUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetUseFullPageRedirect=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setWidgetUseCds=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setCdsEmptyResponseHandler=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setCdsClientCallbackUrl=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setCdsUiConfig=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setSiteEmailId=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setSitePasswordId=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};
k.accountchooser.config.setSiteDisplayNameId=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setSitePhotoUrlId=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setMode=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.config.setStoredAccount=function(b,c){k.accountchooser.config.logUnrecognizedConfig_(c)};k.accountchooser.setConfig=function(b){k.accountchooser.config.setConfig(b)};
k.accountchooser.Page=k.accountchooser.Page||function(){};Z=k.accountchooser.Page[D];Z.render=function(b,c,d){k.accountchooser[A].notNull(b,tb);k.accountchooser[A].notNull(c,wc);this.container_=b;this.resource_=c;this.showCloseIcon_=!!d};Z.getContainer=function(){return this.container_};Z.getResource=function(){return this.resource_};Z.isShowCloseIcon=function(){return this.showCloseIcon_};Z.createTable=function(b){var c=l(Ca)[q](mb,0)[q](lb,0)[q](eb,0);b&&c[x](b);return c};
Z.createButton=function(b,c,d){k.accountchooser[A].notEmpty(b,S);k.accountchooser[A].notEmpty(c,U);b=l(xa).val(b)[x](zd);d&&b[x](d);var e=this;b[z](function(){e[c][G](e)});return b};Z.createLinkButton=function(b,c,d){k.accountchooser[A].notEmpty(b,S);k.accountchooser[A].notEmpty(c,U);b=l(J)[x](Bd)[r](b);d&&b[x](d);var e=this;b[z](function(){e[c][G](e);return j});return b};
Z.createRenderedButton=function(b,c,d){k.accountchooser[A].notEmpty(b,S);k.accountchooser[A].notEmpty(c,U);b=l(J)[r](b)[x](hd);var e=this.createTable(fd);d&&e[x](d);d=l(Da)[H](e);l(R)[x](gd)[H](d);l(R)[x](id)[I](b)[H](d);l(R)[x](jd)[H](d);var g=this;l(e)[z](function(){g[c][G](g);return j});return e};Z.createTextBox=function(b,c,d){k.accountchooser[A].notEmpty(b,Lb);c=l(wa+(c?oc:Mc)+Ea);c[x](b);if(d){var e=this;c.keypress(function(b){e[d][G](e,b)})}return c};
Z.createCheckbox=function(b,c,d){k.accountchooser[A].notNull(b,Ob);c=l(ya)[q](nb,!!c);b=l(za)[x](md)[I](c)[I](b);b=l(L)[x](ld)[I](b);d&&b[x](d);return b};Z.createChoiceLink=function(b,c){k.accountchooser[A].notEmpty(b,S);k.accountchooser[A].notEmpty(c,U);var d=l(L)[x](nd);this.createLinkButton(b,c)[H](d);return d};
Z.createInfoLinkSection=function(b,c,d,e){k.accountchooser[A].notEmpty(b,Kb);k.accountchooser[A].notEmpty(c,Tb);k.accountchooser[A].notEmpty(d,U);k.accountchooser[A].notEmpty(e,Jc);c=l(J)[r](c);b=l(L)[x](e)[I](b)[I](c);var g=this;c[z](function(){g[d][G](g);return j});return b};Z.createInfoLink=function(b,c,d,e,g){k.accountchooser[A].notEmpty(c,Tb);k.accountchooser[A].notEmpty(d,Ub);k.accountchooser[A].notEmpty(e,Jc);c=l(J)[r](c)[q](V,d)[q](Lc,g||Wa);e=l(L)[x](e);b&&e[I](b);e[I](c);return e};
Z.createNascarLink_=function(b,c,d){k.accountchooser[A].notEmpty(b,Eb);k.accountchooser[A].notEmpty(c,Gb);k.accountchooser[A].notEmpty(d,U);var e=l(L)[x](wd),g=l(J)[q](V,W)[H](e),m=this.createTable(yd)[H](g),m=l(Da)[H](m);m[I](l(R)[I](l(M)[q](X,b.image)[x](xd)));m[I](l(R)[I](b[da]));var s=this;g[z](function(){s[d][G](s,c);return j});return e};
Z.createNascarList=function(b,c,d){k.accountchooser[A].notEmpty(b,Ib);k.accountchooser[A].notEmptyArray(c,ac);k.accountchooser[A].notEmpty(d,U);for(var e=l(L)[x](Fd),g=0;g<c[B];g++){var m=c[g];this.createNascarLink_(b[m],m,d)[H](e)}return e};Z.createNascarSection=function(b,c,d,e){k.accountchooser[A].notNull(b,Nb);k.accountchooser[A].notEmpty(c,Ib);k.accountchooser[A].notEmptyArray(d,ac);k.accountchooser[A].notEmpty(e,U);b=l(P)[I](b);this.createNascarList(c,d,e)[H](b);return b};
Z.createHeader=function(b,c,d,e,g){k.accountchooser[A].notNull(b,Y);var m=l(L)[x](ud);this.header=l(L)[r](b)[x](td)[H](m);if(c){k.accountchooser[A].notEmpty(d,lc);k.accountchooser[A].notEmpty(e,mc);b=l(M)[q](X,d)[x](od)[H](m);g&&b[q](Y,g);var s=this;b[z](function(){s[e][G](s)})}m[I](l(L).css(qb,fb));return m};
Z.appendLabelledTextBox=function(b,c,d,e,g){k.accountchooser[A].notNull(b,nc);k.accountchooser[A].notNull(c,Nb);k.accountchooser[A].notEmpty(d,Lb);c&&b[I](c)[I](sa);b[I](this.createTextBox(d,e,g))};Z.appendErrorDiv=function(b){k.accountchooser[A].notNull(b,nc);return l(L)[x](rd)[H](b)};Z.appendMessageDiv=function(b){k.accountchooser[A].notNull(b,nc);return l(L)[x](Ed)[H](b)[ca]()};Z.appendClearDiv=function(b){k.accountchooser[A].notNull(b,nc);l(L)[x](pb)[H](b)};
Z.putCenter=function(b,c){var d=l(ta);b&&d[I](b);c&&d[H](c);return d};Z.createIconButton=function(b,c,d,e){var g=l(L)[x](Md);e&&g[x](e);e=l(J)[q](V,W);e[I](l(M)[q](X,b));var m=this;g[z](function(){m[c][G](m,d);return j});e[H](g);return g};
Z.createNascarLink_=function(b,c,d){k.accountchooser[A].notEmpty(b,Eb);k.accountchooser[A].notEmpty(c,Gb);k.accountchooser[A].notEmpty(d,U);var e=l(N).css(db,Qc+b.image+ga)[x](wd),g=this;l(J)[q](V,W)[I](l(Q)[r](b[da]))[H](e)[z](function(){g[d][G](g,c);return j});return e};Z.createNascarList=function(b,c,d){k.accountchooser[A].notEmpty(b,Ib);k.accountchooser[A].notEmptyArray(c,ac);k.accountchooser[A].notEmpty(d,U);for(var e=l(O),g=0;g<c[B];g++){var m=c[g];this.createNascarLink_(b[m],m,d)[H](e)}return e};
Z.createNascarSection=function(b,c,d,e){k.accountchooser[A].notEmpty(c,Ib);k.accountchooser[A].notEmptyArray(d,ac);k.accountchooser[A].notEmpty(e,U);b=l(L)[x](Fd)[I](l(va)[r](b));this.createNascarList(c,d,e)[H](b);return b};Z.createHeader=function(b,c,d,e,g,m){k.accountchooser[A].notNull(b,Y);b=l(L)[x](td)[I](l(ua)[r](b));m&&b[x](m);if(c){k.accountchooser[A].notEmpty(e,mc);c=l(Q)[x](od)[H](b);g&&c[q](Y,g);var s=this;c[z](function(){s[e][G](s)})}return b};
Z.createAccountBox=function(b,c,d,e,g,m,s,F,ma){k.accountchooser[A].notEmpty(b,yb);k.accountchooser[A].notNull(c,Qb);k.accountchooser[A].notEmpty(e,pc);k.accountchooser[A].notEmpty(g,U);k.accountchooser[A].notEmpty(s,uc);k.accountchooser[A].notEmpty(F,vc);var K=l(N)[x](Xc);l(M)[q](X,e)[x](bd)[H](K);var T=l(P)[H](K);d?T[I](l(Ba)[x](ad)[r](d)):T[x](pd);T[I](l(Q)[x](Zc)[r](b));F=l(J)[x](cd)[q](Y,F)[q](V,W)[H](K);F[I](l(M)[q](X,m));var na=this;K[z](function(){na[g][G](na,{email:b,displayName:d,legacy:!!c,
photoUrl:e,providerId:ma});return j});F[z](function(){na[s][G](na,{email:b,displayName:d,legacy:!!c,photoUrl:e,providerId:ma});return j});return K};Z.createPopupIndicator=function(b,c,d){k.accountchooser[A].notEmpty(b,gb);k.accountchooser[A].notEmpty(c,hb);k.accountchooser[A].notEmpty(d,U);var e=l(L)[x](Dd),g=l(L)[x](Cd)[H](e);g[I](l(M)[q](X,b));g[I](l(P)[r](c));var m=this;e[z](function(){m[d][G](m);return j});return e};
Z.createLegacyAccountSignInBox=function(b,c,d,e){k.accountchooser[A].notEmpty(b,yb);k.accountchooser[A].notEmpty(d,pc);var g=l(N)[x](Xc);e&&g[x](e);l(M)[q](X,d)[x](bd)[H](g);d=l(P)[H](g);c?d[I](l(Ba)[x](ad)[r](c)):d[x](pd);d[I](l(Q)[x](Zc)[r](b));return g};
Z.createKeyholeButton=function(b,c,d,e){k.accountchooser[A].notEmpty(b,Mb);k.accountchooser[A].notEmpty(c,S);k.accountchooser[A].notEmpty(d,U);var g=l(J)[q](V,W)[x](Ad);e&&g[x](e);l(M)[q](X,b)[H](g);g[I](c);var m=this;g[z](function(){m[d][G](m);return j});return g};Z.createRenderedButton=function(b,c,d){k.accountchooser[A].notEmpty(b,S);k.accountchooser[A].notEmpty(c,U);var e=l(J)[q](V,W)[x](Ad);d&&e[x](d);e[I](b);var g=this;e[z](function(){g[c][G](g);return j});return e};
Z.appendErrorDiv=function(b){k.accountchooser[A].notNull(b,nc);return l(L)[x](rd)[I](l(P))[H](b)};
Z.createAccountBox_=function(b,c,d,e){k.accountchooser[A].notNull(b,Xa);k.accountchooser[A].notEmpty(b.email,Ya);k.accountchooser[A].notEmpty(c,ub);k.accountchooser[A].notEmpty(d,$b);var g=b.email;b.providerId&&(g+=fa+b.providerId+ja);var g=l(N)[q](Y,g),m;/^https?:\/\//i.test(b.photoUrl)&&(m=b.photoUrl);var s=l(M)[q](X,m||c)[x](bd)[H](g);s.error(function(){s[q](X,c)});m=l(P)[H](g);b[ba]?m[I](l(Ba)[x](ad).text(b[ba])):m[x](pd);var F=l(Q)[x](Zc).text(b.email)[H](m);if(b.providerId){var ma=l(Q)[x]($c).text(b.providerId)[H](m);
m=Db+b.providerId+ra;var K=l(M)[q](X,m)[q](Y,b.providerId)[q]($a,b.providerId);K.load(function(){ma[ca]();F.prepend(K)})}d==tc?(l(Q)[x](cd)[H](g),g[x](Kd)):d==yc&&(l(Q)[x](dd)[H](g),g[x](Kd));if(e){var T=this;g[z](function(){T[e][G](T,b);return j})}return g};Z.createSelectableAccountBox=function(b,c,d){k.accountchooser[A].notEmpty(d,U);return this.createAccountBox_(b,c,yc,d)};Z.createRemovableAccountBox=function(b,c,d){k.accountchooser[A].notEmpty(d,U);return this.createAccountBox_(b,c,tc,d)};
Z.createAccountBox=function(b,c){return this.createAccountBox_(b,c,rc)};Z.createLearnMoreLink=function(b,c,d){d&&(c=0>c.indexOf(Fa)?c+(Ga+d):c+(ha+d));return l(J)[q](V,c)[q](Lc,Wa)[r](b)};Z.createHeader=function(b,c,d,e,g,m,s){k.accountchooser[A].notNull(b,Y);b=l(L)[x](td)[I](l(ua)[r](b));c&&(l(va)[r](c)[H](b),b[x](vd));s&&b[x](s);if(d){k.accountchooser[A].notEmpty(g,mc);c=l(Q)[x](od)[H](b);m&&c[q](Y,m);var F=this;c[z](function(){F[g][G](F)})}return b};
Z.clearError=function(){l(ka,this.container_)[ca]();this.getErrorElement()[v]()};Z.isShowingError=function(){return l(ka,this.container_).css(wb)!=cc};Z.setError=function(b){l(ka,this.container_).show();this.getErrorElement()[r](b)};Z.getErrorElement=function(){return l(la,this.container_)};Z.getAccountElements=function(){return l(Rb,this.container_)};Z.getAccountElement=function(b){k.accountchooser[A].notNull(b,Jb);return l(Sb+b+ja,this.container_)};Z.getConfirmElement=function(){return l(qa,this.container_)};
Z.getCancelElement=function(){return l(pa,this.container_)};Z.getAddAccountElement=function(){return l(oa,this.container_)};Z.createSigninBar=function(b,c,d,e){k.accountchooser[A].notEmpty(b,pc);k.accountchooser[A].notEmpty(c,Nb);k.accountchooser[A].notEmpty(d,U);return this.createKeyholeButton(b,c,d,e)};
Z.createNavBar=function(b,c,d,e,g){k.accountchooser[A].notEmpty(b,pc);k.accountchooser[A].notEmpty(c,Nb);k.accountchooser[A].notEmpty(d,U);k.accountchooser[A].notEmpty(e,cb);var m=l(J)[q](V,W)[x](Ad);g&&m[x](g);l(M)[q](X,b)[H](m);m[I](l(Q)[r](c));l(M)[x](Gd)[q](X,e)[H](m);var s=this;m[z](function(){s[d][G](s);return j});return m};
Z.createDropMenu=function(b){k.accountchooser[A].notEmpty(b,Zb);for(var c=l(O)[x](Hd),d=0;d<b[B];d++){var e=b[d];e&&(e[da]&&(e.url||e.handler))&&c[I](this.createMenuItem_(e[da],e.url,e.handler,e.opt_styleClass))}return c};Z.createMenuItem_=function(b,c,d,e){k.accountchooser[A].notEmpty(b,Nb);k.accountchooser[A].notEmpty(c||d,Pc);var g=l(N)[x](Id);e&&g[x](e);var m=this;l(J)[I](l(Aa)[r](b))[H](g)[z](function(){l.isFunction(d)?d[G](m):d?m[d][G](m):k[t].href=c;return j});return g};
k.accountchooser.page=k.accountchooser[y]||{};k.accountchooser[y].EmptyRequestPage=function(){};k.accountchooser[y].EmptyRequestPage.inheritsFrom(k.accountchooser.Page);k.accountchooser[y].EmptyRequestPage[D].render=function(b,c,d){this.clientDomain_=c;this.parentClass.render[G](this,b,d||k.accountchooser[E].emptyRequestPage,j);this.render_()};
k.accountchooser[y].EmptyRequestPage[D].render_=function(){this.createHeader(this.resource_[C],this.showCloseIcon_,this.resource_.closeIcon,gc,this.resource_[u])[H](this.container_);var b=l(L)[x](qd)[H](this.container_);this.appendErrorDiv(b)[r](this.resource_.msg);b=l(L)[H](b);this.clientDomain_?b[r](this.resource_.actionWithDomain[p](/\%\%domain\%\%/g,this.clientDomain_)):b[r](this.resource_.action);b=l(L)[x](sd)[H](this.container_);l(J)[q](V,this.resource_.acSiteUrl)[q](Lc,Wa)[r](this.resource_.acSiteText)[H](b)};
k.accountchooser[y].ShareAccountPage=function(){};k.accountchooser[y].ShareAccountPage.inheritsFrom(k.accountchooser.Page);k.accountchooser[y].ShareAccountPage[D].render=function(b,c,d){this.accounts_=c;c=d;c||(c=k.accountchooser[E].shareAccountPage);this.parentClass.render[G](this,b,c,j);this.render_()};
k.accountchooser[y].ShareAccountPage[D].render_=function(){this.createHeader(1>=this.accounts_[B]?this.resource_[C]:this.resource_.titleMultiple,h,this.showCloseIcon_,this.resource_.closeIcon,gc,this.resource_[u])[H](this.container_);var b=l(L)[x](ed)[H](this.container_),c=k.accountchooser[w].noPhoto;if(this.accounts_[B])for(var b=l(O)[H](b),d=0;d<this.accounts_[B];d++){var e=this.accounts_[d];e&&this.createAccountBox(e,c)[H](b)}c=l(L)[x](sd)[H](this.container_);this.createRenderedButton(1>=this.accounts_[B]?
this.resource_.confirm:this.resource_.confirmMultiple,ic)[H](c);this.createLinkButton(this.resource_.cancel,hc,kd)[H](c)};k.accountchooser[y].ShareAccountPage[D].onShareConfirmedClicked=function(){};k.accountchooser[y].ShareAccountPage[D].onShareCancelClicked=function(){};k.accountchooser[y].SelectAccountPage=function(){};k.accountchooser[y].SelectAccountPage.inheritsFrom(k.accountchooser.Page);
k.accountchooser[y].SelectAccountPage[D].render=function(b,c,d,e,g,m,s){this.localAccounts_=c||[];this.cdsAccounts_=d||[];c=s;c||(c=k.accountchooser[E].selectAccountPage);this.parentClass.render[G](this,b,c,j);this.showAllInfo=!!e;this.siteDomain=g||ea;aa(this,m);this.render_()};
k.accountchooser[y].SelectAccountPage[D].render_=function(){this.createHeader(this.resource_[C],this.siteDomain,this.showCloseIcon_,this.resource_.closeIcon,gc,this.resource_[u])[H](this.container_);var b=l(L)[x](ed)[H](this.container_),c=k.accountchooser[w].noPhoto;if(this.localAccounts_[B])for(var d=l(O)[H](b),e=0;e<this.localAccounts_[B];e++){var g=this.localAccounts_[e];g&&g.email&&this.createSelectableAccountBox(g,c,ec)[H](d)}if(this.cdsAccounts_[B]){d=l(O)[H](b);for(e=0;e<this.cdsAccounts_[B];e++)(g=
this.cdsAccounts_[e])&&g.email&&this.createSelectableAccountBox(g,c,ec)[H](d)}b=l(L)[x](sd)[H](this.container_);this.createLinkButton(this.resource_.addAccount,fc,Yc)[H](b)};k.accountchooser[y].SelectAccountPage[D].onAccountClicked=function(){};k.accountchooser[y].SelectAccountPage[D].onAddAccountClicked=function(){};k.accountchooser[y].UpdateAccountPage=function(){};k.accountchooser[y].UpdateAccountPage.inheritsFrom(k.accountchooser.Page);
k.accountchooser[y].UpdateAccountPage[D].render=function(b,c,d,e){this.account_=c;c=e;c||(c=k.accountchooser[E].updateAccountPage);this.parentClass.render[G](this,b,c,j);aa(this,d);this.render_()};
k.accountchooser[y].UpdateAccountPage[D].render_=function(){this.createHeader(this.resource_[C],h,this.showCloseIcon_,this.resource_.closeIcon,gc,this.resource_[u])[H](this.container_);var b=l(L)[x](ed)[H](this.container_),b=l(O)[H](b);this.createAccountBox(this.account_,k.accountchooser[w].noPhoto)[H](b);b=l(L)[x](sd)[H](this.container_);this.createRenderedButton(this.resource_.confirm,kc)[H](b);this.createLinkButton(this.resource_.cancel,jc,kd)[H](b)};
k.accountchooser[y].UpdateAccountPage[D].onUpdateConfirmedClicked=function(){};k.accountchooser[y].UpdateAccountPage[D].onUpdateCancelClicked=function(){};k.accountchooser[y].ManageAccountPage=function(){};k.accountchooser[y].ManageAccountPage.inheritsFrom(k.accountchooser.Page);k.accountchooser[y].ManageAccountPage[D].render=function(b,c,d,e){this.accounts_=c||[];this.parentClass.render[G](this,b,e||k.accountchooser[E].manageAccountPage,j);aa(this,d);this.render_()};
k.accountchooser[y].ManageAccountPage[D].render_=function(){this.createHeader(this.resource_[C],h,this.showCloseIcon_,this.resource_.closeIcon,gc,this.resource_[u])[H](this.container_);var b=l(L)[x](ed)[H](this.container_);this.appendErrorDiv(b)[ca]();var c=k.accountchooser[w].noPhoto;if(this.accounts_[B])for(var b=l(O)[H](b),d=0;d<this.accounts_[B];++d){var e=this.accounts_[d];e&&e.email&&this.createRemovableAccountBox(e,c,ec)[H](b)}};k.accountchooser[y].ManageAccountPage[D].onAccountClicked=function(){};
k.accountchooser.Service=function(){};Z=k.accountchooser.Service[D];Z.setCdsConfig=function(b){this.cdsConfig_=b};Z.setContainer=function(b){this.container_=b};Z.checkRequestType_=function(b,c){var d=h;!this.request_ instanceof k.accountchooser.rpc.Request?d={code:-32600,message:Ka,data:Sa}:!this.request_ instanceof b&&(d={code:-32600,message:Ka,data:Ja+b+Nd});return d?(this.sendErrorResponse_(d,c),j):f};
Z.executeRequest=function(b,c){b?(this.request_=b,this.clientDomain_=c,k.accountchooser.util.browserconfig.isDisabled()&&!(this instanceof k.accountchooser.ManageService)&&!(this instanceof k.accountchooser.AboutService)?this.sendDisabledErrorResponse_():this.execute()):k.accountchooser.util.log(Ia)};n(Z,function(){this.sendErrorResponse_({code:-32601,message:Na,data:Ua})});Z.sendResponse_=function(b,c){k.accountchooser.rpc.callClient(b);c||this.goToClient()};
Z.sendErrorResponse_=function(b,c){var d=new k.accountchooser.rpc.Response(this.request_.getId(),a,b);this.sendResponse_(d,c)};Z.sendDisabledErrorResponse_=function(b){this.sendErrorResponse_({code:-32601,message:Na,data:Ta},b)};Z.sendDoneResponse_=function(b,c){var d=new k.accountchooser.rpc.Response(this.request_.getId(),b);this.sendResponse_(d,c)};
Z.sendStoreResponse=function(b,c){var d=this.getClientConfigValue(qc),e=this.getClientConfigValue(bc);b&&d?k[t][p](d):!b&&e?k[t][p](e):this.sendDoneResponse_({stored:b},c)};Z.sendSelectResponse=function(b,c,d){this.sendDoneResponse_({account:b,idpAssertion:c},d)};Z.sendAddAccountResponse=function(b){this.sendDoneResponse_({addAccount:f},b)};
Z.sendUpdateResponse=function(b,c){var d=this.getClientConfigValue(qc),e=this.getClientConfigValue(bc);b&&d?k[t][p](d):!b&&e?k[t][p](e):this.sendDoneResponse_({updated:b},c)};Z.goToClient=function(){var b=this.request_;this.clientDomain_=this.request_=h;this.cdsConfig_.popupMode?b.params_.clientConfig.keepPopup||k[u]():k.location=b.params_.clientConfig.clientCallbackUrl};Z.getClientConfigValue=function(b){return b&&this.request_&&this.request_.params_&&this.request_.params_.clientConfig&&this.request_.params_.clientConfig[b]};
k.accountchooser.ServiceType={MANAGE:"manage",SELECT:"select",STORE:"store",UPDATE:"update",ABOUT:"about"};k.accountchooser.ManageService=function(){};k.accountchooser.ManageService.inheritsFrom(k.accountchooser.Service);n(k.accountchooser.ManageService[D],function(){if(this.checkRequestType_(k.accountchooser.rpc.ManageRequest)){var b=k.accountchooser.util.accountstorage.readAccounts();this.showManageAccountPage_(b)}});
k.accountchooser.ManageService[D].showManageAccountPage_=function(b){this.container_[v]();this.page_=new k.accountchooser[y].ManageAccountPage;var c=this;this.page_.onAccountClicked=function(b){k.accountchooser.util.accountstorage.removeAccount(b);b=k.accountchooser.util.accountstorage.readAccounts();c.showManageAccountPage_(b);c.page_.setError(k.accountchooser[E].manageAccountPage.deleteReminder)};this.page_.render(this.container_,b,a,a,j)};k.accountchooser.StoreService=function(){};k.accountchooser.StoreService.inheritsFrom(k.accountchooser.Service);
n(k.accountchooser.StoreService[D],function(){if(this.checkRequestType_(k.accountchooser.rpc.StoreRequest)){var b=k.accountchooser.util.accountstorage.readAccounts(),c=k.accountchooser.util.sanitizeAccounts(this.request_.params_.accounts||[],k.accountchooser.util.accountSanitizer);this.accounts_=[];for(var d=0,e=c[B];d<e;d++){for(var g=c[d],m=j,s=0;s<b[B];s++)if(k.accountchooser.util.accountstorage.matchAccount(b[s],g)){m=f;break}m||this.accounts_.push(g)}0==this.accounts_[B]?this.sendStoreResponse(f):
this.showShareAccountPage_()}});k.accountchooser.StoreService[D].showShareAccountPage_=function(){this.container_[v]()[x](Jd);var b=this;this.page_=new k.accountchooser[y].ShareAccountPage;this.page_.onShareConfirmedClicked=function(){for(var c=0;c<b.accounts_[B];c++)k.accountchooser.util.accountstorage.addAccount(b.accounts_[c]);b.sendStoreResponse(f)};this.page_.onShareCancelClicked=function(){b.sendStoreResponse(j)};this.page_.render(this.container_,this.accounts_,a,j)};
k.accountchooser.SelectService=function(){};k.accountchooser.SelectService.inheritsFrom(k.accountchooser.Service);Z=k.accountchooser.SelectService[D];
n(Z,function(){if(this.checkRequestType_(k.accountchooser.rpc.SelectRequest)){var b=this.getClientConfigValue(zc);this.filter={withEmail:!b,idpList:this.getClientConfigValue(Fb)};var c=k.accountchooser.util.accountstorage.readAccounts(this.filter)||[],d=k.accountchooser.util.sanitizeAccounts(this.request_.params_.localAccounts||[],k.accountchooser.util.accountSanitizer),d=this.removeDuplicatedAccounts_(d,c);if(!d[B]&&!c[B])this.sendAddAccountResponse();else{var e=this.getClientConfigValue(Pb);this.showSelectAccountPage_(d,
c,b,e)}}});Z.getAssertion_=function(b){var c=k.accountchooser.rpc.isSupportedIdp(b);if(c){var d=this,e=new k.accountchooser.rpc.IdpAuthRequest(b,{clientCallbackUrl:this.getClientConfigValue(rb)});k.accountchooser.rpc.callIdp(c,e,function(c){c&&c.getResult()?d.sendSelectResponse(b,c.getResult().idpAssertion):d.sendSelectResponse(b)},function(){d.sendSelectResponse(b)})}else this.sendSelectResponse(b)};
Z.showSelectAccountPage_=function(b,c,d,e){this.container_[v]()[x](Jd);var g=this;this.page_=new k.accountchooser[y].SelectAccountPage;this.page_.onAccountClicked=function(b){k.accountchooser.util.accountstorage.addAccount(b);g.getAssertion_(b)};this.page_.onAddAccountClicked=function(){g.sendAddAccountResponse()};var m=this.request_.params_.clientConfig.clientCallbackUrl&&k.accountchooser.util.getDomainFromUrl(this.request_.params_.clientConfig.clientCallbackUrl);this.page_.render(this.container_,
b,c,d,m,e,a,j)};Z.removeAccountFromList_=function(b,c){for(var d=0;d<c[B];d++)if(k.accountchooser.util.accountstorage.matchAccount(c[d],b)){c.splice(d,1);break}};Z.removeDuplicatedAccounts_=function(b,c){var d=[];if(b&&b[B])for(var e=0;e<b[B];e++){for(var g=b[e],m=j,s=0;s<c[B];s++)if(k.accountchooser.util.accountstorage.matchAccount(c[s],g)){m=f;break}m||d.push(g)}return d};k.accountchooser.UpdateService=function(){};k.accountchooser.UpdateService.inheritsFrom(k.accountchooser.Service);
n(k.accountchooser.UpdateService[D],function(){if(this.checkRequestType_(k.accountchooser.rpc.UpdateRequest)){for(var b=k.accountchooser.util.sanitizeAccount(this.request_.params_.account,k.accountchooser.util.accountSanitizer),c=k.accountchooser.util.accountstorage.readAccounts()||[],d=j,e=0;e<c[B];e++){var g=c[e];if(k.accountchooser.util.accountstorage.matchAccount(b,g)){k.accountchooser.util.accountstorage.checkCompatible(b,g)&&(b.displayName=b[ba]||g[ba],b.photoUrl=b.photoUrl||g.photoUrl);d=f;
break}}d?(c=this.getClientConfigValue(Pb),this.showUpdateAccountPage_(b,c)):this.sendUpdateResponse(j)}});
k.accountchooser.UpdateService[D].showUpdateAccountPage_=function(b,c){this.container_[v]()[x](Jd);var d=this;this.page_=new k.accountchooser[y].UpdateAccountPage;this.page_.onUpdateConfirmedClicked=function(){k.accountchooser.util.accountstorage.refreshAccount(b);d.sendUpdateResponse(f)};this.page_.onUpdateCancelClicked=function(){d.sendUpdateResponse(j)};this.page_.render(this.container_,b,c,a,j)};k.accountchooser.AboutService=function(){};k.accountchooser.AboutService.inheritsFrom(k.accountchooser.Service);
n(k.accountchooser.AboutService[D],function(){});})()
