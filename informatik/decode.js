function LetterChanges() {
  var eingabe = document.getElementById("eingabe").value;
  eingabe = eingabe.toUpperCase();
  console.log(eingabe);
  var s = eingabe.split('');
  for (var i = 0; i < s.length; i++) {
    // Caesar cipher
    switch (s[i]) {
      //Leerzeichen
      case ' ':
        break;
      //A
      case 'A':
        s[i] = document.getElementById("a").value;
        break;
      //B
      case 'B':
        s[i] = document.getElementById("b").value;
        break;
      //C
      case 'C':
        s[i] = document.getElementById("c").value;
        break;
      //D
      case 'D':
        s[i] = document.getElementById("d").value;
        break;
      //E
      case 'E':
        s[i] = document.getElementById("e").value;
        break;
      //F
      case 'F':
        s[i] = document.getElementById("f").value;
        break;
      //G
      case 'G':
        s[i] = document.getElementById("g").value;
        break;
      //H
      case 'H':
        s[i] = document.getElementById("h").value;
        break;
      //I
      case 'I':
        s[i] = document.getElementById("i").value;
        break;
      //J
      case 'J':
        s[i] = document.getElementById("j").value;
        break;
      //K
      case 'K':
        s[i] = document.getElementById("k").value;
        break;
      //L
      case 'L':
        s[i] = document.getElementById("l").value;
        break;
      //M
      case 'M':
        s[i] = document.getElementById("m").value;
        break;
      //N
      case 'N':
        s[i] = document.getElementById("n").value;
        break;
      //O
      case 'O':
        s[i] = document.getElementById("o").value;
        break;
      //P
      case 'P':
        s[i] = document.getElementById("p").value;
        break;
      //Q
      case 'Q':
        s[i] = document.getElementById("q").value;
        break;
      //R
      case 'R':
        s[i] = document.getElementById("r").value;
        break;
      //S
      case 'S':
        s[i] = document.getElementById("s").value;
        break;
      //T
      case 'T':
        s[i] = document.getElementById("t").value;
        break;
      //U
      case 'U':
        s[i] = document.getElementById("u").value;
        break;
      //V
      case 'V':
        s[i] = document.getElementById("v").value;
        break;
      //W
      case 'W':
        s[i] = document.getElementById("w").value;
        break;
      //X
      case 'X':
        s[i] = document.getElementById("x").value;
        break;
      //Y
      case 'Y':
        s[i] = document.getElementById("y").value;
        break;
      //Z
      case 'Z':
        s[i] = document.getElementById("z").value;
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
        s[i] = '#';
    } var ergebnis = s.join('')
    document.getElementById("end").innerHTML = ergebnis;
    console.log(ergebnis)
  }
}


