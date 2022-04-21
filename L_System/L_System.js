var angle;
var rules = [];

// Bent Tree
var axiom = "F";
var sentence = axiom;
var len = 150;
angle = 25;
rules[0] = {
  a : "F",
  b : "FF+[+F-F-F]-[-F+F+F]"
}

//// Might not use
//var axiom = "X";
//var len = 300;
//angle = degrees(30);
//rules[0] = {
//  a : "X",
//  b : "F[-X][+F]"
//}

//// Arrow Shape
//var axiom = "X";
//var len = 200;
//rules[0] = {
//  a : "F",
//  b : "FF"
//}
//rules[1] = {
//  a : "X",
//  b : "F[+X][-X]FX"
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
  createP(axiom);
  angle = radians(angle);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate);
}
