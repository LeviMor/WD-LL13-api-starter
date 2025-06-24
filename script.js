/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/
/*document.addEventListener('DOMContentLoaded', function() {
  fetch('https://randomfox.ca/floof/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const factElem = document.getElementById('fact');
      if (factElem) {
        factElem.textContent = data.
        factElem.setAttribute('src', data.image);
      }
    })
    .catch(function(error) {
      console.error('Error fetching fox picture:', error);
    });
});*/



// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page

// Example placeholder:
console.log("Team activity starter code loaded.");

const API = 'https://randomfox.ca/floof/';
const output = document.getElementById('output');

const button = document.getElementById('fetch-button');

button.addEventListener('click', () => {
    fetch(API)
    .then(Response => Response.json())
    .then(data => {
        output.setAttribute('src', data.image);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  });

