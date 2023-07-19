window.onload = function() {
    var count = 0;
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;
    var t = Date.now(); // Current time
    var speed = 25; // Movement speed

    function draw() {
        // Calculate the time difference between frames
        var currentTime = Date.now();
        var timePassed = (currentTime - t) / 1000; // Convert milliseconds to seconds
        t = currentTime;

        // Clearing the canvas
        context.clearRect(0, 0, 600, 400);
        
        // Redrawing the circle   
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();

        // Drawing the count value
        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);

        // Add the effect of gravity
        if (y <= 350) {
            speed += 50 * timePassed;
            y += speed * timePassed;
        }

        // Call the draw() function again on the next frame
        window.requestAnimationFrame(draw);
    }

    // Handle the keydown event
    document.onkeydown = function(event) {
        if (event.key === " ") {
            count += 1;
            // Changing the y position
            y -= 25;
            speed = 25; // Reset the speed to 25 when the ball jumps
        }
    };

    // Handle the touchstart event
    canvas.ontouchstart = function(event) {
        count += 1;
        // Changing the y position
        y -= 25;
        speed = 25; // Reset the speed to 25 when the ball jumps
    };

    // Start the game loop
    draw();
};
