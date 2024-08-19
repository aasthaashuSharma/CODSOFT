
function updateDisplay(value) {
   document.getElementById('res').value = value;
}


function Clear() {
   updateDisplay('');
}


function back() {
   let currentValue = document.getElementById('res').value;
   if (currentValue.length > 0) {
       updateDisplay(currentValue.slice(0, -1));
   }
}


function Solve(input) {
   let display = document.getElementById('res');
   let currentValue = display.value;

   if (input === '=') {
       try {

           let result = eval(currentValue.replace(/x/g, '*').replace(/[^-()\d/*+.]/g, ''));
           updateDisplay(result);
       } catch (e) {
           updateDisplay('Error');
       }
   } else {

       updateDisplay(currentValue + input);
   }
}


function handleKeyboardInput(event) {
   const key = event.key;


   if (!isNaN(key) || ['+', '-', '*', '/'].includes(key) || key === '.') {
       Solve(key);
   }


   if (key === 'Enter') {
       Solve('=');
   }


   if (key === 'Backspace') {
       back();
   }

   // Escape key to clear the display
   if (key === 'Escape') {
       Clear();
   }
}

// Add an event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);
