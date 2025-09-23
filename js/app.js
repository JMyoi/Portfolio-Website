async function getRandomJoke() {
    try {
        console.log("😂 Fetching a random joke...");
        
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const joke = await response.json();
        
        // Display the joke nicely
        console.log(`\n🎤 ${joke.setup}`);
        console.log(`🤣 ${joke.punchline}`);
        console.log(`🏷️ Type: ${joke.type}\n`);
        
        return joke;
        
    } catch (error) {
        console.log("❌ Failed to get joke:", error.message);
        // Fallback joke
        console.log("🤣 Fallback joke: Why don't scientists trust atoms? Because they make up everything!");
    }
}

// Test your function
getRandomJoke();