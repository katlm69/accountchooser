var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".widget-footer",o='<a href="http://accountchooser.net/owners">',p='[id^="',q="id",r="\u3053\u3061\u3089",s="\u3067\u8aac\u660e\u3057\u3066\u3044\u307e\u3059\u3002",t="\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u7ba1\u7406\u8005\u5411\u3051\u306b\u3001Account Chooser \u3092\u5c0e\u5165\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return t+(b+(r+(d+s)))}
a.accountchooser.cdsLearnMorePageMessages={title:"\u96c6\u4e2d\u30a2\u30ab\u30a6\u30f3\u30c8\u9078\u629e\u30c4\u30fc\u30eb \u30b5\u30fc\u30d3\u30b9\u306e\u8a73\u7d30 - Account Chooser \u4f5c\u696d\u30b0\u30eb\u30fc\u30d7",header:"\u96c6\u4e2d\u30a2\u30ab\u30a6\u30f3\u30c8\u9078\u629e\u30c4\u30fc\u30eb \u30b5\u30fc\u30d3\u30b9\u306e\u8a73\u7d30",deployReminder1:u(o,"</a>"),sec1Par1:'\u591a\u304f\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u304c\u3001\u5f93\u6765\u306e\u30ed\u30b0\u30a4\u30f3 \u30dc\u30c3\u30af\u30b9\u306e\u4ee3\u308f\u308a\u306b Account Chooser \u3092\u5c0e\u5165\u3057\u3001\u30b5\u30a4\u30c8\u306e\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u3084\u4f7f\u3044\u52dd\u624b\u3092\u5411\u4e0a\u3055\u305b\u3066\u3044\u307e\u3059\uff08<a href="https://ac-cribwars.appspot.com">\u30b5\u30f3\u30d7\u30eb \u30b5\u30a4\u30c8\u3092\u3054\u89a7\u304f\u3060\u3055\u3044</a>\uff09\u3002Account Chooser \u304c\u5c0e\u5165\u3055\u308c\u3066\u3044\u308b\u30b5\u30a4\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u6b21\u306e\u3088\u3046\u306a\u30da\u30fc\u30b8\u306b\u3053\u306e\u30d1\u30bd\u30b3\u30f3\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u306e\u591a\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059:',
sec1Par2:"\u4f7f\u7528\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002\u4f7f\u7528\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u8868\u793a\u3055\u308c\u306a\u3044\u5834\u5408\u306f\u3001\u4e0b\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u5225\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002",sec1Par3:"\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u3001\u3053\u306e\u30d1\u30bd\u30b3\u30f3\u306e\u30a2\u30ab\u30a6\u30f3\u30c8 \u30ea\u30b9\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u3001\u3053\u306e\u3088\u3046\u306a\u30da\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002",
subHeader1:"\u9ad8\u5ea6\u306a\u30c8\u30d4\u30c3\u30af",sec2Par1:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u524a\u9664\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a8\u30f3\u30c8\u30ea\u3092\u30de\u30a6\u30b9\u3067\u30dd\u30a4\u30f3\u30c8\u3057\u3001\u4e0a\u90e8\u306b\u8868\u793a\u3055\u308c\u308b [X] \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\uff08\u30e2\u30d0\u30a4\u30eb \u30d6\u30e9\u30a6\u30b6\u306e\u5834\u5408\u306f [\u7de8\u96c6] \u30dc\u30bf\u30f3\u3092\u30bf\u30c3\u30d7\u3057\u307e\u3059\uff09\u3002\u305f\u3060\u3057\u3001\u30d1\u30bd\u30b3\u30f3\u3092\u5171\u6709\u3057\u3066\u304a\u308a\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a8\u30f3\u30c8\u30ea\u304c\u4ed6\u306e\u4eba\u3068\u6df7\u3056\u3089\u306a\u3044\u3088\u3046\u306b\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u60c5\u5831\u3092\u5225\u3005\u306b\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u4ee5\u4e0b\u306e\u65b9\u6cd5\u304c\u3042\u308a\u307e\u3059:",
sec2Par1List1:"\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u5225\u3005\u306b\u3059\u308b",sec2Par1List2:"\u5225\u3005\u306e\u30d6\u30e9\u30a6\u30b6\u3092\u4f7f\u7528\u3059\u308b",sec2Par1List3:'\u30d6\u30e9\u30a6\u30b6\u5185\u3067\u5225\u3005\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\uff08Firefox \u306e\u5834\u5408\u306f<a href="http://support.mozilla.org/en-US/kb/Managing-profiles">\u3053\u3061\u3089</a>\u3001Google Chrome \u306e\u5834\u5408\u306f<a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">\u3053\u3061\u3089</a>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff09',
sec2Par1List4:'\u30d6\u30e9\u30a6\u30b6\u306e\u30b7\u30fc\u30af\u30ec\u30c3\u30c8 \u30d6\u30e9\u30a6\u30b8\u30f3\u30b0\u6a5f\u80fd\u3092\u4f7f\u7528\u3059\u308b\uff08Internet Explorer \u306e\u5834\u5408\u306f<a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">\u3053\u3061\u3089</a>\u3001Firefox \u306e\u5834\u5408\u306f<a href="http://support.mozilla.org/en-US/kb/Private-Browsing">\u3053\u3061\u3089</a>\u3001Google Chrome \u306e\u5834\u5408\u306f<a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">\u3053\u3061\u3089</a>\u3001Safari \u306e\u5834\u5408\u306f<a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">\u3053\u3061\u3089</a>\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\uff09',
sec2Par2:'accountchooser.com \u306b\u3088\u3063\u3066\u8868\u793a\u3055\u308c\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u4e00\u89a7\u306f\u30d6\u30e9\u30a6\u30b6\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002\u30b5\u30a4\u30c8\u3067\u4f7f\u7528\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u3057\u3066\u660e\u793a\u7684\u306b\u9078\u629e\u3057\u306a\u3044\u9650\u308a\u3001\u305d\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u60c5\u5831\u304c\u30b5\u30a4\u30c8\u3068\u5171\u6709\u3055\u308c\u308b\u3053\u3068\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a8\u30f3\u30c8\u30ea\u306f\u3001<a href="/">\u96c6\u4e2d\u30a2\u30ab\u30a6\u30f3\u30c8\u9078\u629e\u30c4\u30fc\u30eb\u306e\u30b5\u30a4\u30c8</a>\u3067\u3044\u3064\u3067\u3082\u78ba\u8a8d\u307e\u305f\u306f\u524a\u9664\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u3001\u304a\u4f7f\u3044\u306e\u30d1\u30bd\u30b3\u30f3\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u9078\u629e\u30c4\u30fc\u30eb \u30b5\u30fc\u30d3\u30b9\u306f\u3001<a href="/config.html">\u3053\u3061\u3089\u306e\u30da\u30fc\u30b8</a>\u304b\u3089\u7121\u52b9\u306b\u3057\u305f\u308a\u3001\u518d\u5ea6\u6709\u52b9\u306b\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002',
subHeader2:"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u306e\u904b\u55b6\u8005: \u30b5\u30a4\u30c8\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u306b\u306f",sec3Par1:"Account Chooser \u3092\u4f7f\u7528\u3057\u3066\u30b5\u30a4\u30c8\u3092\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3059\u308b\u30e1\u30ea\u30c3\u30c8\u306f\u3044\u304f\u3064\u304b\u3042\u308a\u307e\u3059\u3002",sec3Par1List1:"\u30b5\u30a4\u30c8\u3067\u306e\u30ed\u30b0\u30a4\u30f3\u7387\u3068\u767b\u9332\u7387\u3092\u9ad8\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b",
sec3Par1List2:"\u5c06\u6765\u7684\u306b ID \u30d7\u30ed\u30d0\u30a4\u30c0\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u306e\u304c\u5bb9\u6613\u306b\u306a\u308b",sec3Par1List3:"\u30b5\u30a4\u30c8\u3078\u306e\u5909\u66f4\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308b",deployReminder2:u(o,"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};
a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};a.accountchooser.showMessages=function(b,d){var c=f(p+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(q).replace(b,i);e[n]&&m.html(e[n])}};
a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(l).hide()};a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(l).hide()};
a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
