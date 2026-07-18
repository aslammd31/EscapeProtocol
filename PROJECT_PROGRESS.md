# Escape Protocol - Project Progress

# Day 1

## Completed
- Created the EscapeProtocol project.
- Created the professional project folder structure.
- Created documentation files.
- Created the assets/images and assets/sounds folders.
- Built the first HTML page.
- Connected HTML, CSS and JavaScript.
- Styled the game page.
- Created the game canvas.
- Learned HTML Canvas basics.
- Implemented the main game loop.
- Created the first player (Unit X-01).
- Added keyboard movement.
- Added movement boundaries.
- Created the first falling toxic barrel.
- Added automatic barrel movement.
- Added random barrel spawning.
- Split the project into multiple JavaScript files.
- Separated player, barrel, UI, collision and game logic.
- Implemented collision detection.
- Added a 5-life system.
- Displayed lives on the screen.
- Added the Game Over screen.
- Added a restart system.
- Restarted the game using the R key.
- Reset player position.
- Reset barrel position.
- Reset lives.

## Learned
- HTML fundamentals.
- CSS fundamentals.
- JavaScript fundamentals.
- HTML Canvas.
- Coordinate system.
- Drawing with rectangles.
- Game loops.
- requestAnimationFrame().
- Keyboard events.
- Player movement.
- Boundary checking.
- Automatic object movement.
- Random spawning.
- Collision detection using rectangle overlap.
- Game state management.
- Professional project organization.
- How to restart a game without reloading the browser.
- How to reset game variables.
- How game state works.

## Next Mission
- Add a score system.

---

# Day 2

## Completed
- Added a restart system.
- Restarted the game using the **R** key.
- Reset player position.
- Reset barrel positions.
- Reset lives.
- Added a score system.
- Displayed the score on the screen.
- Score increases while the player survives.
- Score resets after restarting.
- Added three falling toxic barrels.
- Each barrel falls at a different speed.
- Collision detection works with all barrels.
- Restart resets all barrels.

## Learned
- How to restart a game without refreshing the browser.
- How to reset game variables.
- How to update values every frame.
- How to display dynamic text on the canvas.
- How arrays can store multiple game objects.
- How `forEach()` loops through multiple objects.

## Next Mission
- Increase game difficulty over time.

---

## Completed
- Added dynamic game difficulty.
- Increased barrel speed as the score increased.
- Added a level indicator.
- Restart resets the difficulty level.

## Learned
- How to scale game difficulty over time.
- How to calculate levels using the score.
- How to update object properties dynamically.

## Next Mission
- Add a High Score system.

---

## Completed
- Added a High Score system.
- High Score updates automatically.
- High Score remains after restarting.
- Current Score resets after restarting.

## Learned
- How to compare values.
- How to keep track of the best score.
- How to separate current game data from persistent game data.

## Next Mission
- Add sound effects.

---

## Completed
- Added hit sound effects.
- Added Game Over sound effects.
- Connected sounds to gameplay events.

## Learned
- How to load audio files.
- How to play sounds using JavaScript.
- How to trigger sounds during game events.

## Next Mission
- Replace the robot rectangle with a real Unit X-01 sprite.

---

## Completed
- Replaced the rectangle player with the Unit X-01 robot.
- Loaded the robot image into the canvas.
- Successfully rendered the player sprite.
- Verified movement, collision detection, score system, and sounds still work.

## Learned
- How to load images using JavaScript.
- How to draw images using `drawImage()`.
- How to replace shapes with sprites.

## Next Mission
- Replace the toxic barrels with real barrel sprites.

---

## Completed
- Replaced the red square hazards with toxic barrel sprites.
- Loaded the barrel image using JavaScript.
- Rendered barrel sprites on the game canvas.
- Verified that collision detection, scoring, sounds, movement, and game logic still work correctly with the new barrel sprites.

## Learned
- How to load multiple image assets into a game.
- How to render image sprites on the HTML Canvas.
- How to reuse a single sprite for multiple game objects.
- How visual improvements can be made without changing gameplay mechanics.

## Next Mission
- Add a sci-fi background.
## Completed
- Added a sci-fi laboratory background.
- Loaded the background image into the game.
- Drew the background before all game objects.
- Improved the overall visual appearance of the game.

## Learned
- How to load background images.
- How draw order affects rendering.
- How layering works in HTML Canvas.

## Next Mission
- Improve the game UI with a futuristic HUD.
## Completed
- Added a futuristic HUD.
- Created a semi-transparent UI panel.
- Added a neon border around the HUD.
- Improved the Game Over screen.
- Enhanced the overall game interface.

## Learned
- How to create UI panels using Canvas.
- How transparency works with RGBA colors.
- How layering improves game presentation.

## Next Mission
- Add heart icons for the lives system.
## Completed
- Added a professional Main Menu.
- Game now starts only after pressing Enter.
- Added a blinking "Press ENTER to Start" prompt.
- Displayed High Score on the Main Menu.
- Prevented gameplay while on the menu.

## Learned
- How to create game states.
- How to separate menu logic from gameplay.
- How to pause game updates until the player starts.

## Next Mission
- Add pixel-art heart icons.