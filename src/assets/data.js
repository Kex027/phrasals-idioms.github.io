const phrasalVerbs = [
  { english: "ask after", polish: "dopytywać się" },
  { english: "back down", polish: "ustąpić" },
  { english: "back out", polish: "zrezygnować" },
  { english: "bank on", polish: "liczyć na coś" },
  { english: "break down", polish: "zepsuć się" },
  { english: "break out", polish: "wybuchnąć (ogień, wojna)" },
  { english: "break out", polish: "uciec z więzienia" },
  { english: "bring forward", polish: "przełożyć (na szybciej)" },
  { english: "bring in", polish: "wprowadzić (dochód, prawo)" },
  { english: "bring on", polish: "spowodować" },
  { english: "bring out", polish: "wypuścić (produkt, album)" },
  { english: "bring up", polish: "wychowywać" },
  { english: "bring up", polish: "poruszyć temat" },
  { english: "call for", polish: "potrzebować coś zrobić przez coś" },
  { english: "call for", polish: "domagać się" },
  { english: "call off", polish: "odwołać" },
  { english: "carry on", polish: "kontynuować" },
  { english: "carry out", polish: "przeprowadzić (eksperyment)" },
  { english: "catch on", polish: "zyskać popularność" },
  { english: "catch on", polish: "zrozumieć, pojąć" },
  { english: "catch up", polish: "dogonić" },
  { english: "chase after", polish: "gonić" },
  { english: "check in", polish: "zameldować się" },
  { english: "check out", polish: "wymeldować się" },
  { english: "check out", polish: "sprawdzić" },
  { english: "clear up", polish: "przejaśniać się (pogoda)" },
  { english: "close down", polish: "zamknąć (firmę)" },
  { english: "come around", polish: "znowu nadejść" },
  { english: "come around", polish: "zmienić zdanie" },
  { english: "come across", polish: "napotkać" },
  { english: "come by", polish: "zdobyć" },
  { english: "come down with", polish: "zachorować" },
  { english: "come forward", polish: "zgłosić się (z czymś)" },
  { english: "come into", polish: "odziedziczyć" },
  { english: "come off", polish: "uzyskać sukces" },
  { english: "come on", polish: "robić progres" },
  { english: "come on", polish: "wejść na żywo" },
  { english: "come out", polish: "zostać opublikowanym" },
  { english: "come round", polish: "odzyskać przytomność" },
  { english: "come up with", polish: "wymyślić coś" },
  { english: "count on", polish: "liczyć na kogoś" },
  { english: "cross out", polish: "skreślić" },
  { english: "cut down", polish: "ograniczyć" },
  { english: "cut down", polish: "zmniejszyć ilość" },
  { english: "cut off", polish: "odciąć" },
  { english: "cut off", polish: "przestać dostarczać" },
  { english: "cut off", polish: "odłączyć" },
  { english: "cut off", polish: "zaświtać coś" },
  { english: "deal with", polish: "radzić sobie z" },
  { english: "die down", polish: "spowodować" },
  { english: "do away with", polish: "zlikwidować" },
  { english: "do up", polish: "odnowić" },
  { english: "do without", polish: "obejść się" },
  { english: "draw up", polish: "sporządzić" },
  { english: "dress up", polish: "wystroić" },
  { english: "drop in", polish: "wpaść (z wizytą)" },
  { english: "drop off", polish: "wysadzić (z auta)" },
  { english: "drop off", polish: "zasnąć" },
  { english: "drop out of", polish: "wypaść (z szkoły, przedwcześnie)" },
  { english: "drown out", polish: "zagłuszyć" },
  { english: "face up to", polish: "sprostać czemuś" },
  { english: "fall for", polish: "zanurzyć się" },
  { english: "fall for", polish: "wierzyć w coś, nabrać się" },
  { english: "fall out with", polish: "pokłócić się" },
  { english: "feel up to", polish: "czuć się na siłach" },
  { english: "fill in", polish: "wypełnić" },
  { english: "find out", polish: "dowiedzieć się" },
  { english: "flick through", polish: "przekartkować" },
  { english: "get sb down", polish: "zasmucić kogoś" },
  { english: "get along with", polish: "dogadywać się" },
  { english: "get at", polish: "sugerować" },
  { english: "get away with", polish: "ujść na sucho" },
  { english: "get back", polish: "wrócić" },
  { english: "get by", polish: "przeżyć (radzić sobie)" },
  { english: "get on with", polish: "mieć dobre relacje" },
  { english: "get on for", polish: "zbliżać się do (czasu, liczby)" },
  { english: "get on with", polish: "kontynuować" },
  { english: "get over", polish: "dojść do siebie" },
  { english: "get through", polish: "zabrać się" },
  { english: "go on", polish: "robić coś po czymś" },
  { english: "go on", polish: "przejrzeć (powtórzyć)" },
  { english: "go round", polish: "odwiedzić" },
  { english: "grow on", polish: "podobać się coraz bardziej" },
  { english: "grow out of", polish: "stać się z czegoś" },
  { english: "grow out of", polish: "wyrosnąć (z ubrań)" },
  { english: "grow up", polish: "dorastać" },
  { english: "hand down", polish: "zostawić w spadku" },
  { english: "hand in", polish: "wręczyć" },
  { english: "hand out", polish: "rozdać (np testy w klasie)" },
  { english: "hold up", polish: "wstrzymać" },
  { english: "hold up", polish: "zrabować z przemocą" },
  { english: "join in", polish: "wziąć udział" },
  { english: "keep on", polish: "trwać dalej" },
  { english: "keep up with", polish: "nadążać" },
  { english: "knock out", polish: "wyeliminować, pokonać" },
  { english: "knock out", polish: "być ogłuszonym" },
  { english: "leave out", polish: "pominąć" },
  { english: "let down", polish: "zawieść" },
  { english: "let off", polish: "darować (winę)" },
  { english: "let off", polish: "odpalać (coś wybuchowego)" },
  { english: "line up", polish: "uformować się" },
  { english: "live on", polish: "żyć z" },
  { english: "look after", polish: "opiekować się" },
  { english: "look down on", polish: "wywyższać się" },
  { english: "look into", polish: "rozpatrywać, badać" },
  { english: "look out", polish: "uważać na (zagrożenie)" },
  { english: "look round", polish: "rozglądać" },
  { english: "look up to", polish: "podziwiać" },
  { english: "look up", polish: "szukać (informacji w książce)" },
  { english: "make off", polish: "uciec" },
  { english: "make out", polish: "przekonywać (że coś jest prawdziwe)" },
  { english: "make out", polish: "dostrzegać (z trudnością)" },
  { english: "make out", polish: "wypisać (np czek na coś)" },
  { english: "make up", polish: "pogodzić się" },
  { english: "make up", polish: "zmyślać" },
  { english: "make up", polish: "napisać (utwór)" },
  { english: "make up for", polish: "wynagrodzić" },
  { english: "make for", polish: "zmierzać w kierunku" },
  { english: "name after", polish: "nazwać po czymś" },
  { english: "narrow down", polish: "zawęzić możliwości" },
  { english: "pass away", polish: "umrzeć" },
  { english: "pass out", polish: "stracić przytomność" },
  { english: "pick on", polish: "zanęcać się" },
  { english: "pick up", polish: "podjechać pod kogoś" },
  { english: "plug in", polish: "podłączyć" },
  { english: "pop in", polish: "wpaść na chwilę" },
  { english: "pull in", polish: "zjechać (na postój)" },
  { english: "pull out", polish: "wycofać się z czegoś" },
  { english: "pull through", polish: "wykaraskać się" },
  { english: "put by", polish: "oszczędzać" },
  { english: "put down", polish: "szydzić, drwić" },
  { english: "put down", polish: "uśpić (zwierzę)" },
  { english: "put down to", polish: "zrzuć winę na" },
  { english: "put forward", polish: "zaproponować" },
  { english: "put off", polish: "odłożyć (w czasie)" },
  { english: "put off", polish: "odrzucać czymś" },
  { english: "put on", polish: "przytyć" },
  { english: "put on", polish: "wystawiać (sztukę)" },
  { english: "put out", polish: "zgasić (ogień)" },
  { english: "put through", polish: "połączyć, zdzwonić" },
  { english: "put up with", polish: "znosić coś" },
  { english: "run into", polish: "spotkać przez przypadek" },
  { english: "run out of", polish: "nie mieć już" },
  { english: "run over", polish: "potrącić" },
  { english: "sail through", polish: "jak bułka z masłem" },
  { english: "save up", polish: "odkładać na coś pieniądze" },
  { english: "see off", polish: "pożegnać (na dworcu)" },
  { english: "see through", polish: "przejrzeć coś/kogoś" },
  { english: "see through to", polish: "przebrnąć" },
  { english: "see to", polish: "pilnować" },
  { english: "set in", polish: "nastać" },
  { english: "set out", polish: "rozpocząć" },
  { english: "set to", polish: "wziąć się do dzieła" },
  { english: "set up", polish: "założyć (np firme)" },
  { english: "settle down", polish: "osiąść (ustatkować)" },
  { english: "show around", polish: "oprowadzać" },
  { english: "show off", polish: "popisywać się" },
  { english: "slow down", polish: "zwolnić" },
  { english: "speed up", polish: "przyśpieszyć" },
  { english: "stand for", polish: "oznaczać" },
  { english: "stand in for", polish: "zastąpić (czyjeś obowiązki)" },
  { english: "stand out", polish: "wyróżniać się" },
  { english: "stand up for", polish: "wspierać, wstawiać się za kimś" },
  { english: "start off", polish: "rozpocząć" },
  { english: "start up", polish: "rozpocząć" },
  { english: "settle down", polish: "uspokoić się" },
  { english: "take aback", polish: "zaskoczyć" },
  { english: "take after", polish: "przypominać kogoś (zachowanie)" },
  { english: "take down", polish: "zanotować" },
  { english: "take in", polish: "nabrać kogoś" },
  { english: "take off", polish: "wybić się (sukces)" },
  { english: "take on", polish: "zatrudniać" },
  { english: "take to", polish: "polubić" },
  { english: "take to", polish: "zacząć coś robić (nawyk)" },
  { english: "take up", polish: "rozpocząć hobby" },
  { english: "take up", polish: "zajmować czas" },
  { english: "tear down", polish: "zburzyć" },
  { english: "tear up", polish: "podrzeć" },
  { english: "think over", polish: "namyślać" },
  { english: "throw away", polish: "wyrzucić" },
  { english: "try on", polish: "przymierzyć" },
  { english: "try out", polish: "wypróbować" },
  { english: "turn down", polish: "odrzucić" },
  { english: "turn into", polish: "zmienić w coś" },
  { english: "turn off", polish: "wyłączyć" },
  { english: "turn out", polish: "okazać się" },
  { english: "turn over", polish: "obrócić się" },
  { english: "turn round", polish: "wrócić się" },
  { english: "turn up", polish: "zjawić się" },
  { english: "wear off", polish: "przestać oddziaływać" },
  { english: "wear out", polish: "wyrobić się/zestarzeć" },
  { english: "work out", polish: "znaleźć rozwiązanie" },
];

export default phrasalVerbs;
