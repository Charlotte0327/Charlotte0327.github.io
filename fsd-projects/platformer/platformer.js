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
    createPlatform(500, 700, 100, 20, "red");
    createPlatform(650, 600, 100, 20, "orange");
    createPlatform(800, 500, 100, 20, "yellow");
    createPlatform(650, 400, 100, 20, "green");
    createPlatform(500, 300, 100, 20, "blue");
    createPlatform(300, 0, 20, 290, "purple");
    createPlatform(300, 290, 100, 20, "purple");
    createPlatform(400, 210, 20, 100, "purple");
    createPlatform(1000, 400, 100, 20, "yellow");

    // TODO 3 - Create Collectables
    createCollectable("heart", 340, 170, 0.5, 0.7);
    createCollectable("database", 1030, 170, 0.5, 0.7);
    createCollectable("soccerball", 530, 170, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 700);
    createCannon("right", 300, 2000);
    createCannon("bottom", 300, 2000);
    createCannon("left", 300, 2090);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
