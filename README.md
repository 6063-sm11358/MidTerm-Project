▶️▶️ **PART 1: PROJECT PROPOSAL** ◀️◀️

I've chosen to depict ***The Hunger Games***, a series of novels by Suzanne Collins via this project.

*The Hunger Games* universe is a dystopia set in Panem, a North American country consisting of the wealthy Capitol, and 13 districts in varying states of poverty. Every year, children from the first 12 districts are selected via lottery to participate in a mandatory & televised battle-royale death match called The Hunger Games.

<p align= "center">
<img src= "./HungerGames_Poster.jpg" width=60%> </p>

In the novel (and the movie adaptations), these "Games" are designed by someone called the "Gamemaker", a highly coveted title, and personally hand-picked by the President of Panem. My idea is something along the lines of this:

The user interacting with this project is the *Gamemaker*, and they'll be "tracking" everything via this interface or ***interactive*** dashboard. I'm thinking of coding a version of this game that would replicate the original's feel, and also bring forth the battle-royale aspect of it.

The "tributes" would start off in a circle (as they do in the books), and wander about the canvas in a random fashion. I'm thinking of implementing a time-based traversing method, something like, the positions of these tributes (represented by ellipses) would get updated each passing second, mimicking a radar/sonar map.

<p align= "center">
<img src= "./InitialSketch_Tributes.jpg" width=30%>
<br>
Figure 1.1: "Tributes" starting-off position </p>
<br>
<p align= "center">
<img src= "./InitialSketch_Logic.jpg" width=60%>
<br>
Figure 1.2: Rough Digital Sketch of Project Implementation </p>

In addition to these, I'm thinking of exploring some "collision mechanics" i.e. how to code the ellipses' health or elimination tactics. Similarly, as Gamemaker, the user would be able to manipulate the Game using the mouse and/or keyboard, and would be able to alter the "gameplay", such as: eliminating tributes, or introducing obstacles (??). Ultimately, only one ellipse or tribute would remain on-screen, and shall be the "Victor" of the Game.

Right now, I think detecting collisions, and reducing "hitpoints" of ellipses accordingly would be quite challenging, but I'll try to figure out some method for that.

▶️▶️ **PART 2: PROJECT PSEUDO-CODE** ◀️◀️

This week, I've prepared the "staging ground" of the project i.e. the part where all the *tributes* are arranged in a circular fashion, just before the Game's commencement (refer Figure 1.1). The *Gamemaker* (user) then interacts using the keyboard to start the Game.

<p align= "center">
<img src = "./StagingGround.JPG" width=90%>
<br>
Figure 2.1: Live Screenshot of Staging Ground </p>

This part in itself was quite challenging and time-consuming because of the circular arrangement. After countless tries with *translate()* and *rotate()*, I ultimately decided to configure the canvas into WEBGL mode. This made p5 set its (0,0) coordinate to the center of the screen.

Furthermore, I've begun coding the active Game interface, and have generated the *tributes* in a random fashion, with their positions changing with each passing second. The position-change code requires further refinement at the moment. The ***active_game.js*** file includes the working code, along with all the various pseudo-code for all the upcoming features. These include:

**1. Class variables for storing tributes' hitpoints, hit values & unique district IDs**
```
this.district_id = [1-12]; --> will be given during instantiation: constructor(i);
this.hitpoints = 100;
this.hit_value = int(random(20,50));
```

**2. Class functions for detecting collisions & modifying hitpoints of tributes**
```
collision_detection()
{
  if(collision with self)
  {
    ignore;
  }
  else
  {
    for(all other tributes)
    {
      detect collision and reduce hitpoints accordingly;
    }
  }
}
hitpoints()
{
  if(collision)
  {
    hitpoints = hitpoints-(otherTribute.hit_value);
  }
}
```
**3. Separate functions for detecting "tribute eliminations" and "lone tribute"**
```
function tributesAlive()
{
  let tributeCounter = totalTributes;
  if(tributeObject.hitpoints==0)
  {
    tributeCounter--;
  }
}

function victorChecker()
{
  if(tributeCounter==1)
  {
    display tribute details;
  }
}
```
**4. Inclusion of cosmetic changes to the overall game aesthetic**
```
background-color: green -- BEAUTIFICATION
for(entire canvas)
{
  generate lines to mimic radar / gps;
}
```

▶️▶️ **PART 3: PROJECT COMPLETION** ◀️◀️

This week's work entailed completing the Mid-Term Project i.e. wrapping up with all programming, and making sure that every component executes as expected.

Just to recap, my project is based on the *Hunger Games* novel, and the user portrays the role of the Gamemaker. The project begins with the "Staging Grounds" screen wherein all the "tributes" (denoted by ellipses) are arranged in a circular fashion. The game awaits the user's input to initiate the countdown.

<p align = "center">
<img src = "./StagingGround_Final.JPG" width=90%>
<br>
Figure 3.1: Live Screenshot of the Updated Staging Ground </p>

User interaction is in the form of keyboard presses **and** mouse click to commence the Game. The gameplay consists of 24 tributes (2 from each district) battling it out in a battle-royale deathmatch. I've coded the interface in such a way that it resembles a radar / GPS tracker. The tributes' position updates randomly with each passing second. To get the "flashing radar dot" effect, I've coded a functionality that makes the stroke turn white & bold every 5 seconds.

All tributes have randomly assigned starting positions, 'x' & 'y' velocities, and attacking points (how much damage they'll inflict to other tributes upon collision). Similarly, all tributes start off with their respective hitpoints / health as 100. As the game progresses, and collisions occur between tributes, their hitpoints are reduced depending on whom they collided with. A tribute gets eliminated once their hitpoints become 0. To depict this visually, I've coded a functionality wherein the tributes' color changes from green to dark red, depending on how much health they have remaining. Furthermore, I've also coded in a section that checks and ignores collision occuring between "self", and also with tributes from the **same** district. Collision are depicted visually in the form of real-time short color changes, i.e. tributes would, for the duration of the collision, turn a dark purple hue and then change back to their respective colors based on their hitpoint values.

<p align = "center">
<img src = "./Gameplay_Start.JPG" width=90%>
<br>
Figure 3.2: Live Screenshot of the Game
<br>
<br>
<img src = "./Gameplay_InGame.JPG" width=90%>
<br>
Figure 3.3: Dynamic Health Update (In-Game) </p>

In addition to the time-based gameplay elements, I wanted to make it more interactive as well. I coded in a feature that would enable an in-game "Gamemaker Console" that allows the user to override the gameplay mechanics, and have the selected tributes eliminated. The console is a text field which takes the district number as its input, and eliminates the corresponding tribute, provided it's still active in the game and has not been previously eliminated.

<p align = "center">
<img src = "./GMConsole.JPG">
<br>
Figure 3.4: Gamemaker Console </p>

The last tribute remaining at the end is crowned the "Victor". The game stops the moment it detects only 1 tribute is remaining, and displays the winning district number in an overlay.

<p align = "center">
<img src = "./Victor.JPG" width=90%>
<br>
Figure 3.5: Victor of the Games </p>

To make the game feel more immersive and exciting, I've included a background score. Additionally, as in the book, whenever a tribute is eliminated in-game, a canon sound is heard signifying the event. I've replicated that scenario with my code as well. Whenever a tribute gets eliminated, a canon sound clip plays in the background too.