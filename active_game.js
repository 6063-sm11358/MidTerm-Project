let totalTributes = 12;
let tributeArray = [];

let tribute_xVel_Choices = [];
let tribute_yVel_Choices = [];
let tribute_Vel_Array = [-4,-3,-2,-1,1,2,3,4];

let timer = 1000;
let eventChange = 0;

class Tributes
{
  constructor(_xVelVar, _yVelVar, _disID)
  {
    this.xPos_Tribute = random(0,windowWidth);
    this.yPos_Tribute = random(0,windowHeight);
    this.rad_Tribute = 20;
    this.xVel_Tribute = _xVelVar;
    this.yVel_Tribute = _yVelVar;
    this.districtID_Tribute = _disID;
    this.hp_Tribute = 100;
    this.healthBar_Tribute = this.recalculateHP();
    this.attackValue_Tribute = int(random(1,5))*10;
  }
  updateTributePos()
  {
    this.xPos_Tribute+=this.xVel_Tribute;
    this.yPos_Tribute+=this.yVel_Tribute;
    this.checkMapEdge();
    this.checkCollisionAll();
  }
  checkMapEdge()
  {
    if(this.xPos_Tribute+this.rad_Tribute>=windowWidth || this.xPos_Tribute-this.rad_Tribute<=0)
    {
      this.xVel_Tribute*= -1;
    }

    if(this.yPos_Tribute+this.rad_Tribute>=windowHeight || this.yPos_Tribute-this.rad_Tribute<=0)
    {
      this.yVel_Tribute*= -1;
    }
  }
  checkCollision(otherTribute)
  {
    if(this==otherTribute)
    {
      return false;
    }
    else
    {
      let tributeDist = dist(this.xPos_Tribute, this.yPos_Tribute, otherTribute.xPos_Tribute, otherTribute.yPos_Tribute);
      if(tributeDist < this.rad_Tribute + otherTribute.rad_Tribute)
      {
        this.hp_Tribute-=otherTribute.attackValue_Tribute;
        otherTribute.hp_Tribute-=this.attackValue_Tribute;
        return true;
      }
    }
  }
  checkCollisionAll()
  {
    let collision = false;
    for(let i=0; i<tributeArray.length; i++)
    {
      let tributesObject = tributeArray[i];
      if(this.checkCollision(tributesObject))
      {
        collision = true;
      }
    }
    
    if(collision)
    {
      this.healthBar_Tribute = color('DarkViolet');
      if(this.hp_Tribute<=0)
      {
        this.eliminateTribute();
      }
    }
    else
    {
      this.recalculateHP();
    }
  }
  eliminateTribute()
  {
    this.xVel_Tribute = 0;
    this.yVel_Tribute = 0;
    this.xPos_Tribute = -this.rad_Tribute;
    this.yPos_Tribute = -this.rad_Tribute;
    this.rad_Tribute = 0;
    totalTributes--;
  }
  recalculateHP()
  {
    if(this.hp_Tribute<=100 && this.hp_Tribute>=90)
    {
      this.healthBar_Tribute = color('Lime');
    }
    else if(this.hp_Tribute<90 && this.hp_Tribute>=70)
    {
      this.healthBar_Tribute = color('GreenYellow');
    }
    else if(this.hp_Tribute<70 && this.hp_Tribute>=50)
    {
      this.healthBar_Tribute = color('Orange');
    }
    else if(this.hp_Tribute<50 && this.hp_Tribute>=30)
    {
      this.healthBar_Tribute = color('Yellow');
    }
    else if(this.hp_Tribute<30 && this.hp_Tribute>=10)
    {
      this.healthBar_Tribute = color('Red');
    }
    else if(this.hp_Tribute<10)
    {
      this.healthBar_Tribute = color('Black');
    }
  }
  tributeCreate()
  {
    fill(this.healthBar_Tribute);
    stroke(0);
    strokeWeight(1);
    ellipse(this.xPos_Tribute, this.yPos_Tribute, 2*this.rad_Tribute);
    
    if(this.hp_Tribute>=30)
    {
      fill(0);
    }
    else
    {
      fill(255);
    }
    strokeWeight(0);
    textAlign(CENTER,CENTER);
    text(this.districtID_Tribute, this.xPos_Tribute, this.yPos_Tribute);
  }
}

function setup()
{
  createCanvas(windowWidth, windowHeight);

  for(let i=0; i<totalTributes; i++)
  { 
    tribute_xVel_Choices.push(random(tribute_Vel_Array));
    tribute_yVel_Choices.push(random(tribute_Vel_Array));
  }
    
  for(let i=0; i<totalTributes; i++)
  {
    let tributesObject = new Tributes(tribute_xVel_Choices[i]*5, tribute_yVel_Choices[i]*5, i+1);
    tributeArray.push(tributesObject);
  }
}

function draw()
{
  if(millis()>eventChange)
  {
    background(0,50,0);
    stroke(255,1);
    strokeWeight(1);
    for(let xPos_Line = 0; xPos_Line <=width; xPos_Line+=40)
    {
      for(let yPos_Line = 0; yPos_Line <=height; yPos_Line+=40)
      {
        line(xPos_Line, 0, xPos_Line, height);
        line(0, yPos_Line, width, yPos_Line);
      }
    }
    
    for(let i=0; i<tributeArray.length; i++)
    {
      let tributesObject = tributeArray[i];
      tributesObject.updateTributePos();
      tributesObject.tributeCreate();
    }
    eventChange = millis()+timer;
  }
}