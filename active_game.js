let totalTributes = 12;
let tributeArray = [];

let timer = 1000;
let eventChange = 0;

class Tributes
{
  constructor()
  {
    this.xPos_Tribute = int(random(0,windowWidth));
    this.yPos_Tribute = int(random(0,windowHeight));
    this.rad_Tribute = 15;
    this.xVel_Tribute = int(random(10,50));
    this.yVel_Tribute = int(random(10,50));
    //this.district_id = [1-12]; --> will be given during instantiation: constructor(i);
    //this.hitpoints = 100;
    //this.hit_value = int(random(20,50));
  }
  updateTributePos()
  {
    this.xPos_Tribute+=this.xVel_Tribute;
    this.yPos_Tribute+=this.yVel_Tribute;
    this.checkMapEdge();    
  }
  checkMapEdge()
  {
    if(this.xPos_Tribute + this.rad_Tribute >= windowWidth || this.xPos_Tribute <= this.rad_Tribute)
    {
      this.xVel_Tribute*= -1;
    }

    if(this.yPos_Tribute + this.rad_Tribute >= windowHeight || this.yPos_Tribute <= this.rad_Tribute)
    {
      this.yVel_Tribute*= -1;
    }
  }
  tributeCreate()
  {
    fill(0);
    noStroke();
    ellipse(this.xPos_Tribute, this.yPos_Tribute, 2*this.rad_Tribute);
  }
  // collision_detection()
  // {
  //   if(collision with self)
  //   {
  //     ignore;
  //   }
  //   else
  //   {
  //     for(all other tributes)
  //     {
  //       detect collision and reduce hitpoints accordingly;
  //     }
  //   }
  // }
  // hitpoints()
  // {
  //   if(collision)
  //   {
  //     hitpoints = hitpoints-(otherTribute.hit_value);
  //   }
  // }
}

// function tributesAlive()
// {
//   let tributeCounter = totalTributes;
//   if(tributeObject.hitpoints==0)
//   {
//     tributeCounter--;
//   }
// }

// function victorChecker()
// {
//   if(tributeCounter==1)
//   {
//     display tribute details;
//   }
// }

function setup()
{
  createCanvas(windowWidth, windowHeight);

  for(let i=0; i<totalTributes; i++)
  {
    let tributeObject = new Tributes;
    tributeArray.push(tributeObject);
  }
}

function draw()
{
  if(millis()>eventChange)
  {
    background(255);
    //background-color: green -- BEAUTIFICATION
    //for(entire canvas)
    // {
    //   generate lines to mimic radar / gps;
    // }

    for(let i=0; i<totalTributes; i++)
    {
      let tributeObject = tributeArray[i];
      tributeObject.tributeCreate();
      tributeObject.updateTributePos();
    }
    eventChange = millis()+timer;
  }
}