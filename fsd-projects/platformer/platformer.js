$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    //line1
createPlatform(800, 300, 300, 20);
//line2
createPlatform(300, 500, 200, 20);
//line3
createPlatform(500, 400, 290, 20);
//red line
createPlatform(100, 700, 60, 1, "red");
//orange block
createPlatform(200, 600, 50, 20, "orange");
//line4
createPlatform(1100, 180, 200, 20, "orange");
    // TODO 3 - Create Collectables
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("diamond", 900, 170, 0.5, 0.7);
createCollectable("diamond", 1300, 170, 0.5, 0.7);
createCollectable("diamond", 500, 170, 0.5, 0.7);
createCollectable("steve", 1350, 50);



    
    // TODO 4 - Create Cannons
createCannon("top", 250, 2000);
createCannon("top", 350, 2000);
createCannon("top", 550, 2000);
createCannon("top", 850, 2000);
createCannon("top", 1050, 2000);
    createCannon("top", 1150, 2000);
    createCannon("top", 1250, 2000);
    createCannon("right", 750, 2000);
    createCannon("right", 650, 2000);
    createCannon("right", 550, 2000);
    createCannon("right", 450, 2000);
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
