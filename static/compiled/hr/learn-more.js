var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".",o=".widget-footer",p='<a href="http://accountchooser.net/owners">',q="Ako upravljate web-lokacijom, ",r='[id^="',s="id",t="saznajte kako mo\u017eete primijeniti bira\u010d ra\u010duna";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return q+(b+(t+(d+l)))}
a.accountchooser.cdsLearnMorePageMessages={title:"Saznajte vi\u0161e o usluzi bira\u010da sredi\u0161njeg ra\u010duna \u2013 radna grupa Bira\u010da ra\u010duna",header:"Saznajte vi\u0161e o usluzi bira\u010da sredi\u0161njeg ra\u010duna",deployReminder1:u(p,"</a>"),sec1Par1:'Web-lokacije zamjenjuju tradicionalne okvire za prijavu bira\u010dima ra\u010duna radi ve\u0107e sigurnosti i jednostavnosti upotrebe (<a href="https://ac-cribwars.appspot.com">istra\u017eite primjer web-lokacije</a>). Kada se poku\u0161ate prijaviti na takvu web-lokaciju, vidjet \u0107ete stranicu poput ove s popisom ra\u010duna koje naj\u010de\u0161\u0107e upotrebljavate na tom ra\u010dunalu:',
sec1Par2:"Jednostavno pritisnite ra\u010dun koji \u017eelite upotrebljavati. Ako ne vidite unos za ra\u010dun koji \u017eelite upotrebljavati, kliknite gumb na dnu da biste dodali drugi ra\u010dun.",sec1Par3:"Nakon prijave na ra\u010dun prikazat \u0107e vam se stranica kao \u0161to je ova s upitom da potvrdite kako \u017eelite dodati ra\u010dun na popis ra\u010duna na ovom ra\u010dunalu.",subHeader1:"Napredne teme",sec2Par1:"Ako \u017eelite ukloniti neki ra\u010dun, prelazite mi\u0161em preko unosa tog ra\u010duna i zatim odaberite gumb X u gornjem kutu da biste ga izbrisali (na mobilnim preglednicima kliknite gumb Uredi). Me\u0111utim, ako upotrebljavate dijeljeno ra\u010dunalo i ne \u017eelite mije\u0161ati unose ra\u010duna s drugim osobama, razmislite o pristupu koji \u0107e va\u0161e informacije o pregledniku dr\u017eati zasebno. Na primjer:",
sec2Par1List1:"Upotrijebite razli\u010dite ra\u010dune operativnog sustava",sec2Par1List2:"Upotrijebite neke druge preglednike",sec2Par1List3:'Upotrijebite razli\u010dite profile u pregledniku (saznajte kako ih upotrebljavati s preglednicima <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> ili <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google Chrome</a>).',sec2Par1List4:'Upotrijebite zna\u010dajku preglednika za privatno pregledavanje (saznajte kako ju upotrebljavati s preglednicima <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet Explorer</a>, <a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>, <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google Chrome</a> ili <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a>).',
sec2Par2:'Popis ra\u010duna koje prikazuje accountchooser.com pohranjen je u va\u0161em pregledniku. Informacije o ra\u010dunu nikad se ne dijele s nekom web-lokacijom ako izri\u010dito ne odaberete ra\u010dun koji \u0107ete upotrebljavati na toj lokaciji. Mo\u017eete posjetiti <a href="/">sredi\u0161nju web-lokaciju bira\u010da ra\u010duna</a> izravno, u bilo kojem trenutku da biste prikazali ili izbrisali unose ra\u010duna. Tako\u0111er mo\u017eete onemogu\u0107iti ili ponovo omogu\u0107iti uslugu bira\u010da ra\u010duna na svojem ra\u010dunalu na <a href="/config.html">ovoj stranici</a>.',
subHeader2:"Vlasnici web-lokacija: saznajte kako nadograditi svoju web-lokaciju",sec3Par1:"Nadogradnja web-lokacije na upotrebu Bira\u010da ra\u010duna pru\u017ea sljede\u0107e prednosti:",sec3Par1List1:"pove\u0107ava stope prijava i registracija na web-lokaciji",sec3Par1List2:"olak\u0161ava web-lokaciji podr\u017eavanje davatelja identiteta u budu\u0107nosti",sec3Par1List3:"zahtijeva samo nekoliko vrlo malih promjena na web-lokaciji",deployReminder2:u(p,"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};
a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};a.accountchooser.showMessages=function(b,d){var c=f(r+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(s).replace(b,i);e[n]&&m.html(e[n])}};
a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(o).hide()};a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(o).hide()};
a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
