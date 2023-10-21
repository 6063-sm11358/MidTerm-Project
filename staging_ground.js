let totalTributes = 12;
let tributeArray = [];
let projectFont;

class Tribute_Static
{
  constructor(_disID)
  {
    this.xPos_Tribute = 0;
    this.yPos_Tribute = 0;
    this.rad_Tribute = 20;
    this.districtID_Tribute = _disID;
  }
  tributeCreate()
  {
    fill(0);
    stroke(255,0,255);
    strokeWeight(3);
    ellipse(this.xPos_Tribute, this.yPos_Tribute, 2*this.rad_Tribute);
  }
}

function preload()
{
  projectFont = loadFont("./Oxanium.ttf");
}

function setup()
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0,0,75);

  //generating blue-print background
  push();
  translate(-width/2, -height/2);
  stroke(255,1);
  for(let xPos_Line=0; xPos_Line<=width; xPos_Line+=40)
  {
    for(let yPos_Line=0; yPos_Line<=height; yPos_Line+=40)
    {
      line(xPos_Line, 0, xPos_Line, height);
      line(0, yPos_Line, width, yPos_Line);
    }
  }
  pop();

  //generating tribute circles
  for(let i=0; i<totalTributes; i++)
  {
    let tributeObject = new Tribute_Static(i+1);
    tributeArray.push(tributeObject);
  }

  push();
  for(let i=0; i<totalTributes; i++)
  {
    let tributeObject = tributeArray[i];
    translate(-35,150);
    rotate(2*PI/totalTributes);
    tributeObject.tributeCreate();
  }
  pop();

  //displaying staging text
  textFont(projectFont);
  textAlign(CENTER,CENTER);
  fill(255);

  textSize(32);
  fill(255,0,0);
  text("HUNGER GAMES", width-(width-423), height-(height+190));
  fill(255);
  text("STAGING GROUNDS", width-(width-400), height-(height+160));

  textSize(15);
  fill(0,255,0);
  text("... initializing hunger games", width-(width-449), height-(height+123));
  text("... awaiting user-input", width-(width-469), height-(height+103));

  textSize(18);
  fill(255);
  text("< Press [ENTER] to prep load-up >", width-(width-407), 7);

  textSize(15);
  fill(0,255,0);
  text("... gamemaker interface", width-(width-465), 55);
  text("... press [G] to display console (in-game)", width-(width-410), 76);
}

function draw()
{ 
  if(keyCode==ENTER)
  {
    window.open("./hungergames_smx.html","_self");
  }
}