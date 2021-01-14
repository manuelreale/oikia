let fredoka;
let productSans;
let productSansBold;
let ospiti=0;
let ospiti2=0;
var frame;

let people = [];
let face = [];


function preload(){
  fredoka = loadFont('./assets/FredokaOne-Regular.ttf');
  productSans = loadFont('./assets/Product Sans Regular.ttf');
  productSansBold = loadFont('./assets/Product Sans Bold.ttf');

  button = loadImage('./assets/button.png');
  podio = loadImage('./assets/podio.png');
  blueGrad = loadImage('./assets/blue.jpg');
  logo = loadImage('./assets/logo.png');
  pattern = loadImage('./assets/pattern.png');
  up = loadImage('./assets/up.png');
  down = loadImage('./assets/down.png');

  data = loadJSON("./assets/people.json");

  for (var m=1; m<=12; m++) {face[m] = loadImage("./assets/faces/p" + m + ".png");}
}

function setup() {
  frame = createElement("iframe");
  frame.attribute('src', "http://localhost:8002/index.html");
  frame.style('border', "none");
  //frame.attribute('scrolling', "no");
  //console.log(data);

for (let i = 0; i < data.people.length; i++) {
  addPeople(
    (windowWidth/2)-174*u,
    (windowHeight*5 / 50)+(i*76.3*u)+289*u,
    data.people[i].score,
    data.people[i].title,
    data.people[i].name,
    data.people[i].face,
    (i+1)
  );
}

data.people.sort(function (b, a) {return a.score - b.score;});
}



function windowResized() {
  resizeCanvas(windowWidth-18, (windowHeight*5 / 50)+522+((data.people.length-1)*76.3));
  for(let i = 0; i < people.length; i++) {
    people[i].updatePositionFast();
  }
}



let u=1;

function draw() {

if (windowHeight<windowWidth){

  frame.position(windowWidth-(windowWidth / 20)-400*u,(windowHeight*5 / 50)+205*u);
  frame.attribute('width', 400*u);
  frame.attribute('height', 270*u);
  if(windowWidth<1550){
    u=(windowWidth/1550);
  }else{
    u=1;
  }

  let tot=0;
  for (let i = 0; i < people.length; i++) {
      people[i].rank=(i+1)
      tot+=people[i].score
      if(people[i].face==floor(random(0,13))&&frameCount%floor(random(20,200))==0){
        people[i].score+=floor(random(0,15))
          ospiti+=1;
          ospiti2+=floor(random(0,1.1));
      }

  }


  people.sort(function (b, a) {return a.score - b.score;});
  //console.log(people)

  background('white')
  noStroke()
  createCanvas(windowWidth-18,(windowHeight*5 / 50)+522+((data.people.length-1)*76.3))
  push()




  image(blueGrad, 0, 0,windowWidth,windowHeight/7);
  image(pattern, -20, -20, windowHeight*4*4/40, windowHeight*6.5/40);

  push()
  imageMode(CENTER)
  translate(windowWidth / 50 +windowHeight/9, windowHeight/20)
  scale(windowHeight/1300)
  image(logo, 0,0);
  pop()

  push()
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = 'rgba(34, 119, 255, .35)';
  rect(windowWidth / 50, windowHeight*5 / 50, windowWidth- windowWidth / 25, 335+((data.people.length)*76.3), 30);
  rect(windowWidth / 20, (windowHeight*5 / 50)+105*u, 400*u, 400*u, 30);

  rect((windowWidth/2)-278.5*u, (windowHeight*5 / 50)+105*u, 557*u, (115+((data.people.length+1)*76.3))*u, 30);
  rect(windowWidth-(windowWidth / 20)-400*u, (windowHeight*5 / 50)+105*u, 400*u, 400*u, 30);
  pop()

  for(let i=0; i<(data.people.length-3);i++){
    push();
    textFont(fredoka);
    fill('#3366FF')
    textSize(45*u);
    textAlign(CENTER);
    text(i+4, (windowWidth / 2)-224*u, ((windowHeight*5 / 50) + 565*u)+76*u*i);
    //console.log("hello")
    pop();
  }

  textFont(fredoka);
  fill('#3366FF')
  textSize(40*u);
  text('Classifica', 40*u+windowWidth / 20, (windowHeight*5 / 50)+80*u);

  textFont(productSansBold);
  fill('#6387BA')
  textSize(29*u);
  text('Classe 5ºE\nC.D.S. Castromediano', 40*u+windowWidth / 20, (windowHeight*5 / 50)+170*u);

  textFont(productSansBold);
  fill('#6387BA')
  textSize(29*u);
  text('Le mie recensioni', windowWidth-350*u - windowWidth / 20, (windowHeight*5 / 50)+170*u);

  textFont(productSans);
  fill('#9CB6DB')
  textSize(21*u);
  text('Docente', 40*u+windowWidth / 20, (windowHeight*5 / 50)+245*u);

  textFont(productSansBold);
  fill('#6387BA')
  textSize(21*u);
  text('                   Alessia Menegozzi', 40*u+windowWidth / 20, (windowHeight*5 / 50)+245*u);

  textSize(29*u);
  text('Statistiche gruppo', 40*u+windowWidth / 20, (windowHeight*5 / 50)+320*u);

  textFont(productSans);
  fill('#9CB6DB')
  textSize(21*u);
  text('Ospiti ospitati: '+ (ospiti+34), 40*u+windowWidth / 20, (windowHeight*5 / 50)+370*u);
  text('Ospiti rifiutati: '+ (ospiti2), 40*u+windowWidth / 20, (windowHeight*5 / 50)+410*u);
  text('Punti totali: '+ (tot), 40*u+windowWidth / 20, (windowHeight*5 / 50)+450*u);

  image(button, 75*u+windowWidth / 20,(windowHeight*5 / 50)+540*u,256*u,74*u);

  textFont(fredoka);
  fill('white')
  textSize(20*u);
  text('Altre informazioni', 110*u+windowWidth / 20, (windowHeight*5 / 50)+584*u);


  fill('#3366FF')
  rect(0, height-65, windowWidth, 65);

  push()
  translate(50, height-45)
  image(logo, 0, 0, 90, 27);
  pop()

  push()
  imageMode(CENTER);
  image(podio, windowWidth / 2, (windowHeight*5 / 50)+188*u+146*u,488*u,293*u);
  pop()


  for(let i = 0; i < people.length; i++) {
    people[i].run();
  }


pop()



//mobile version


}else{
  frame.position(windowWidth/2-(windowWidth / 20)-420*0.5*u,100*u+(windowHeight*5 / 50)+155*u+(115+((data.people.length+1)*76.3))*u);
  frame.attribute('width', 450*u);
  frame.attribute('height', 260);
  u=1;

  let tot=0;
  for (let i = 0; i < people.length; i++) {
      people[i].rank=(i+1)
      tot+=people[i].score
      if(people[i].face==floor(random(0,13))&&frameCount%floor(random(20,200))==0){
        people[i].score+=floor(random(0,15))
          ospiti+=1;
          ospiti2+=floor(random(0,1.1));
      }

  }


  people.sort(function (b, a) {return a.score - b.score;});
  //console.log(people)

  background('white')
  noStroke()
  createCanvas(windowWidth-18,(windowHeight*5 / 50)+922+((data.people.length-1)*76.3))
  push()




  image(blueGrad, 0, 0,windowWidth,windowHeight/7);
  image(pattern, -20, -20, windowHeight*4*4/40, windowHeight*6.5/40);

  push()
  imageMode(CENTER)
  translate(-10+windowWidth / 2, windowHeight/20)
  scale(windowHeight/1300)
  image(logo, 0,0);
  pop()

  push()
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = 'rgba(34, 119, 255, .35)';
  rect(windowWidth / 50, windowHeight*5 / 50, windowWidth- windowWidth / 25, 865+((data.people.length)*76.3), 30);

  rect((windowWidth/2)-278.5*u, (windowHeight*5 / 50)+105*u, 557*u, (115+((data.people.length+1)*76.3))*u, 30);
  rect((windowWidth/2)-278.5*u, (windowHeight*5 / 50)+235*u+(115+((data.people.length+1)*76.3))*u, 557*u,300 , 30);
  pop()

  for(let i=0; i<(data.people.length-3);i++){
    push();
    textFont(fredoka);
    fill('#3366FF')
    textSize(45*u);
    textAlign(CENTER);
    text(i+4, (windowWidth / 2)-224*u, ((windowHeight*5 / 50) + 565*u)+76*u*i);
    //console.log("hello")
    pop();
  }

  textFont(fredoka);
  fill('#3366FF')
  textSize(40*u);
  text('Classifica', 40*u+windowWidth / 20, (windowHeight*5 / 50)+70*u);

push()
textAlign(CENTER)
  text('Le mie recensioni',windowWidth/2, 100*u+(windowHeight*5 / 50)+105*u+(115+((data.people.length+1)*76.3))*u);
pop()
  textFont(productSansBold);
  fill('#6387BA')
  textSize(20*u);
  text('Classifica classe 5ºE\nC.D.S. Castromediano', windowWidth-(windowWidth / 20) -220*u, (windowHeight*5 / 50)+50*u);






  fill('#3366FF')
  rect(0, height-65, windowWidth, 65);


  push()
  translate(50, height-45)
  image(logo, 0, 0, 90, 27);
  pop()

  push()
  imageMode(CENTER);
  image(podio, windowWidth / 2, (windowHeight*5 / 50)+188*u+146*u,488*u,293*u);
  pop()


  for(let i = 0; i < people.length; i++) {
    people[i].run();
  }


pop()
}

}



function addPeople(x, y, size, title, name, face, rank) {
  let bubbleColor = "white";
  const aNewBubble = new Bubble(x, y, size, bubbleColor, name, face, rank)
  people.push(aNewBubble);
}

class Bubble {
  constructor(temp_x,temp_y,temp_r,temp_color,temp_name,temp_face, temp_rank) {
    this.x=temp_x;
    this.y=temp_y;
    this.r=temp_r;
    this.color=temp_color;
    this.name = temp_name;
    this.score = temp_r;
    this.face = temp_face;
    this.rank = temp_rank;
    this.status = 0;
    this.oldRank = temp_rank;
    this.oldStatus=0;
    this.timer=0;
    this.flag=0;
  }

  display() {
    if(this.rank>3){
    push();
    stroke(51,102,255,76.5);
    strokeWeight(3.5*u);
    fill('white');
    rect(this.x,this.y, 348*u,60*u, 15*u);
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    text(this.name, this.x+85*u, this.y+35*u);
    image(face[this.face], this.x+9*u, this.y+10*u, 121*0.42*u, 91*0.45*u );
    fill('#9CB6DB')
    textSize(16.65*u);
    text(this.score + ' crediti', this.x+250*u, this.y+35*u);
    if(this.status==0){
    }else{
    if(this.status>0){
      image(up, this.x+388*u,this.y+15*u,21*u,36*u);
    }
    if(this.status<0){
    image(down, this.x+388*u,this.y+15*u,21*u,36*u);
  }}
    pop();
  }else if(this.rank==1){
    push();
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    textAlign(CENTER);
    text(this.name+"\n"+this.score+" crediti" , windowWidth/2, this.y-142*u);
    push();
    imageMode(CENTER);
    image(face[this.face], 2+windowWidth/2, this.y-23*u, 121*0.53*u, 91*0.53*u );
    pop()
    pop();
  }else if(this.rank==2){
    push();
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    textAlign(CENTER);
    text(this.name+"\n"+this.score+" crediti" , (windowWidth/2)-165*u, this.y-157*u);
    push();
    imageMode(CENTER);
    image(face[this.face], (windowWidth/2)-164*u, this.y-36*u, 121*0.53*u, 91*0.53*u );
    pop()
    pop();
  }else if(this.rank==3){
    push();
    noStroke();
    textFont(productSansBold);
    fill('#6387BA')
    textSize(16.65*u);
    textAlign(CENTER);
    text(this.name+"\n"+this.score+" crediti" , (windowWidth/2)+167*u, this.y-440*u+232*u);
    push();
    imageMode(CENTER);
    image(face[this.face], (windowWidth/2)+168*u, this.y-440*u+352*u, 121*0.53*u, 91*0.53*u );
    pop()
    pop();
  }

  }

  updatePositionFast() {
    this.y=(windowHeight*5 / 50)+((this.rank-1)*76.3*u)+289*u;
    this.x=(windowWidth/2)-174*u;

  }

  updatePosition() {
    //this.x=lerp(this.x, mouseX, 0.002)+random(-1,1);
    //this.y=lerp(this.y, mouseY, 0.002)+random(-1,1);
    if(this.status != this.oldStatus){
      this.flag=1;
      this.timer=0;
      }

    if(this.flag==1){
      if(this.timer<=500){
      this.timer++
    }else{
      this.flag=0;
      this.timer=0;
      this.oldRank=this.rank;
      console.log("helo")
    }
    }

    this.oldStatus = this.status;
    this.status=this.oldRank-this.rank;

    if(this.oldRank<=3 || this.rank<=3){
      this.y=lerp(this.y,((windowHeight*5 / 50)+((this.rank-1)*76.3*u)+289*u),0.08)
    }else{
    this.y=lerp(this.y,((windowHeight*5 / 50)+((this.rank-1)*76.3*u)+289*u),0.05)}
    this.x=(windowWidth/2)-174*u;

  }



  run() {
    this.display();
    this.updatePosition();
  }
}
