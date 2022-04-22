var angle;
var rules = [];
var sentence;
var axiom;
var len;

//// Bent Tree
//axiom = "F";
//len = 150;
//angle = 25;
//rules[0] = {
//  a : "F",
//  b : "FF+[+F-F-F]-[-F+F+F]"
//}

//// Arrow Weed
//axiom = "X";
//len = 250;
//angle = 30;
//rules[0] = {
//  a : "F",
//  b : "FF"
//}
//rules[1] = {
//  a : "X",
//  b : "F[+X][-X]FX"
//}


// Fuzzy Weed
axiom = "X";
len = 200;
angle = 22.5;
rules[0] = {
  a : "F",
  b : "FF"
}
rules[1] = {
  a : "X",
  b : "F-[[X]+X]+F[+FX]-X"
}

//// Twiggy Weed
//axiom = "X";
//len = 250;
//angle = 25;
//rules[0] = {
//  a : "F",
//  b : "FF"
//}
//rules[1] = {
//  a : "X",
//  b : "F[-X]F[-X]+X"
//}


//// Tall Seaweed
//var axiom = "F";
//var len = 50;
//angle = 25;
//rules[0] = {
//  a : "F",
//  b : "F[+F]F[-F]F"
//}


function generate(){
  len*=0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i +=1){
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j +=1){
      if (current == rules[j].a){
        nextSentence += rules[j].b;
        found = true;
        break;
      }
    }
    if (!found){
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}


function turtle(){
  background(51);
  resetMatrix();
  translate(width/2,height);
  stroke(255,100);
  for (var i = 0; i < sentence.length; i+=1){
    var current = sentence.charAt(i);
    
    if (current == "F") {
      line(0,0,0,-len);
      translate(0,-len)
    }
    else if (current == "+") {
      rotate(angle);
    }
    else if (current == "-") {
      rotate(-angle);
    }
    else if (current == "[") {
      push();
    }
    else if (current == "]") {
      pop();
    }
    
  }
  
}


function setup() {
  createCanvas(600,600);
  background(51);
  sentence = axiom;
  createP(axiom);
  angle = radians(angle);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}
