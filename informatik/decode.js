function LetterChanges() {
  var eingabe = "MTZ IXKIS WZTBBIK DHGLI DTRKPI IXK HZSIZ RTGJRHNQIZ SXP BIXKIZ OZHU UKL BIXKIK JDIX QXKLIZK; LHB EUIENRIK RXIBB RHIKBIG UKL LHB SHILNRIK WZIPIG. IZ RHPPI DIKXW JU EIXBBIK UKL JU EZINRIK, UKL IXKSHG, HGB WZTBBI PIUIZUKW XKB GHKL QHS, QTKKPI IZ LHB PHIWGXNRI EZTP KXNRP SIRZ BNRHOOIK. DXI IZ BXNR KUK HEIKLB XS EIPPI WILHKQIK SHNRPI UKL BXNR MTZ BTZWIK RIZUSDHIGJPI, BIUOJPI IZ UKL BCZHNR JU BIXKIZ OZHU: ``DHB BTGG HUB UKB DIZLIK ? DXI QTIKKIK DXZ UKBIZI HZSIK QXKLIZ IZKHIRZIK LH DXZ OUIZ UKB BIGEBP KXNRPB SIRZ RHEIK?´´ ``DIXBBP LU DHB, SHKK´´, HKPDTZPIPI LXI OZHU, ``DXZ DTGGIK STZWIK XK HGGIZ OZUIRI LXI QXKLIZ RXKHUB XK LIK DHGL OUIRZIK, DT IZ HS LXNQBPIK XBP. LH SHNRIK DXZ XRKIK IXK OIUIZ HK UKL WIEIK VILIS KTNR IXK BPUINQNRIK EZTP, LHKK WIRIK DXZ HK UKBIZI HZEIXP UKL GHBBIK BXI HGGIXK.BXI OXKLIK LIK DIW KXNRP DXILIZ KHNR RHUB, UKL DXZ BXKL BXI GTB.´´"
  eingabe = eingabe.toUpperCase();
  var s = eingabe.split('');
  for (var i = 0; i < s.length; i++) {
    // Caesar cipher
    switch (s[i]) {
      //Leerzeichen
      case ' ':
        break;
      //A
      case 'A':
        s[i] = '';
        break;
      //B
      case 'B':
        s[i] = 's';
        break;
      //C
      case 'C':
        s[i] = 'p';
        break;
      //D
      case 'D':
        s[i] = 'w';
        break;
      //E
      case 'E':
        s[i] = 'b';
        break;
      //F
      case 'F':
        s[i] = '';
        break;
      //G
      case 'G':
        s[i] = 'l';
        break;
      //H
      case 'H':
        s[i] = 'a';
        break;
      //I
      case 'I':
        s[i] = 'e';
        break;
      //J
      case 'J':
        s[i] = 'z';
        break;
      //K
      case 'K':
        s[i] = 'n';
        break;
      //L
      case 'L':
        s[i] = 'd';
        break;
      //M
      case 'M':
        s[i] = 'v';
        break;
      //N
      case 'N':
        s[i] = 'c';
        break;
      //O
      case 'O':
        s[i] = 'f';
        break;
      //P
      case 'P':
        s[i] = 't';
        break;
      //Q
      case 'Q':
        s[i] = 'k';
        break;
      //R
      case 'R':
        s[i] = 'h';
        break;
      //S
      case 'S':
        s[i] = 'm';
        break;
      //T
      case 'T':
        s[i] = 'o';
        break;
      //U
      case 'U':
        s[i] = 'u';
        break;
      //V
      case 'V':
        s[i] = 'j';
        break;
      //W
      case 'W':
        s[i] = 'g';
        break;
      //X
      case 'X':
        s[i] = 'i';
        break;
      //Y
      case 'Y':
        s[i] = '';
        break;
      //Z
      case 'Z':
        s[i] = 'r';
        break;
      //sonderzeichen
      case ';':
        s[i] = ';';
        break;
      case ',':
        s[i] = ',';
        break;
      case '.':
        s[i] = '.';
        break;
      case ':':
        s[i] = ':';
        break;
      case '´':
        s[i] = '´';
        break;
      case '`':
        s[i] = '`';
        break;
      case '?':
        s[i] = '?';
        break;
      case '!':
        s[i] = '!';
        break;
      default:
        s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
    }
  } return s.join('');
} Umlaute();
function Umlaute(){
  var ergebnis = LetterChanges().replace(/ae/g, "ä")
  ergebnis = ergebnis.replace(/ue/g, "ü");
  ergebnis = ergebnis.replace(/oe/g, "ö");
  ergebnis = ergebnis.replace(/feür/g, "feuer");
  ergebnis = ergebnis.replace(/teürung/g, "teuerung");
  console.log("Funktion Umlaute Ende");
  return ergebnis;
}
console.log(Umlaute());

