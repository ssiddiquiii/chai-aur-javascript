// Immediately Invoke Function Expression - IIFE

// Note: we use IIFE to avoid global scope pollution, and function to be executed immediatlety!

(function chai() {
  console.log("DB Connected");
})(); // named IIFE

// ()()

((name) => {
  console.log(`DB Connected Again, ${name}`);
})("Sameed"); // Unnamed IIFE
