var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".",o=".widget-footer",p='<a href="http://accountchooser.net/owners">',q="Si vous g\u00e9rez un site Web, ",r='[id^="',s="d\u00e9couvrez comment d\u00e9ployer un s\u00e9lecteur de compte",t="id";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return q+(b+(s+(d+l)))}
a.accountchooser.cdsLearnMorePageMessages={title:"En savoir plus sur le s\u00e9lecteur de compte central \u2013 Groupe de travail d\u00e9di\u00e9 au s\u00e9lecteur de compte",header:"En savoir plus sur le s\u00e9lecteur de compte central",deployReminder1:u(p,"</a>"),sec1Par1:"Les zones de connexion standards des sites Web sont progressivement remplac\u00e9es par un s\u00e9lecteur de compte, afin de renforcer la s\u00e9curit\u00e9 des sites concern\u00e9s et d'en faciliter l'utilisation (<a href=\"https://ac-cribwars.appspot.com\">d\u00e9couvrir un exemple de site</a>). Lorsque vous tentez de vous connecter sur un tel site, une page contenant la liste des comptes que vous utilisez le plus fr\u00e9quemment sur votre ordinateur, similaire \u00e0 celle-ci, s'affiche\u00a0:",
sec1Par2:"Il vous suffit de cliquer sur le compte que vous souhaitez utiliser. Si celui-ci ne figure pas dans la liste, cliquez sur le bouton situ\u00e9 en bas pour ajouter un compte.",sec1Par3:"Une fois que vous \u00eates connect\u00e9 au compte en question, une page similaire \u00e0 celle-ci vous invite \u00e0 confirmer que vous souhaitez l'ajouter \u00e0 la liste des comptes utilis\u00e9s sur cet ordinateur.",subHeader1:"Informations suppl\u00e9mentaires",sec2Par1:"Si vous souhaitez supprimer un compte, passez la souris sur le compte en question, puis cliquez sur la croix (X) dans l'angle sup\u00e9rieur droit (ou appuyez sur le bouton \"Modifier\" dans les navigateurs pour mobile). Toutefois, si vous partagez votre ordinateur avec d'autres personnes et si vous ne souhaitez pas que vos comptes s'affichent sur la m\u00eame page que ceux d'autres utilisateurs, nous vous conseillons d'adopter une m\u00e9thode permettant de s\u00e9parer les informations du navigateur. Par exemple\u00a0:",
sec2Par1List1:"Utilisez des comptes diff\u00e9rents au sein de votre syst\u00e8me d'exploitation.",sec2Par1List2:"Utilisez des navigateurs diff\u00e9rents.",sec2Par1List3:'Cr\u00e9ez des profils diff\u00e9rents dans le navigateur (d\u00e9couvrez comment les utiliser sous <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> ou <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google\u00a0Chrome</a>).',sec2Par1List4:'Faites appel \u00e0 la fonctionnalit\u00e9 de navigation priv\u00e9e du navigateur (d\u00e9couvrez comment l\'utiliser sous <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet\u00a0Explorer</a>, <a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>, <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google\u00a0Chrome</a> ou <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a>).',
sec2Par2:'Les comptes affich\u00e9s par accountchooser.com sont stock\u00e9s dans votre navigateur. Vos informations de compte ne sont jamais partag\u00e9es avec un site, \u00e0 moins que vous ne s\u00e9lectionniez explicitement un compte \u00e0 utiliser avec le site. Vous pouvez consulter le site du <a href="/">s\u00e9lecteur de compte central</a> \u00e0 tout moment pour afficher ou supprimer des comptes. De m\u00eame, vous pouvez d\u00e9sactiver ou r\u00e9activer le s\u00e9lecteur de compte sur votre ordinateur en <a href="/config.html">cliquant ici</a>.',
subHeader2:"Propri\u00e9taires de sites Web\u00a0: d\u00e9couvrez comment mettre \u00e0 jour votre site",sec3Par1:"La mise \u00e0 jour de votre site afin d'utiliser un s\u00e9lecteur de compte pr\u00e9sente plusieurs avantages\u00a0:",sec3Par1List1:"augmentation des taux de connexion et d'inscription relev\u00e9s sur votre site\u00a0;",sec3Par1List2:"meilleure compatibilit\u00e9 de votre site avec les fournisseurs d'identit\u00e9 \u00e0 l'avenir\u00a0;",sec3Par1List3:"quelques modifications mineures requises seulement.",
deployReminder2:u(p,"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};
a.accountchooser.showMessages=function(b,d){var c=f(r+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(t).replace(b,i);e[n]&&m.html(e[n])}};a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(o).hide()};
a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(o).hide()};a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;
a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
