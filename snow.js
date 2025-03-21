// Snow effect
const snowflakes = [];

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄"; // Snowflake symbol

    // Randomize the starting position
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.top = `${Math.random() * -100}px`; // Start above the screen
    snowflake.style.fontSize = `${Math.random() * 30 + 15}px`; // Bigger flakes for better visual effect

    document.body.appendChild(snowflake);
    snowflakes.push(snowflake);
}

function animateSnowflakes() {
    snowflakes.forEach(snowflake => {
        const speed = parseFloat(snowflake.style.fontSize) / 4; // Speed based on size
        let top = parseFloat(snowflake.style.top);
        top += speed;

        if (top > window.innerHeight) {
            // Reset to the top when a snowflake goes off-screen
            snowflake.style.top = `-${Math.random() * 100}px`;
        } else {
            snowflake.style.top = `${top}px`;
        }
    });

    requestAnimationFrame(animateSnowflakes);
}

// Create a number of snowflakes (now in a loop)
for (let i = 0; i < 150; i++) { // More flakes for a denser effect
    createSnowflake();
}

// Start the animation
animateSnowflakes();
