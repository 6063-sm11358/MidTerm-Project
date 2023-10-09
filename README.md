# ReadMe: Mid-Term Project - Working Document

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