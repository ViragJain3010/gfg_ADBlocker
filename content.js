// content.js

// Log a message when the script runs
console.log('GFG RightBar Hider script injected and running');

// Function to hide the rightBar
function hideRightBar() {
    const rightBar = document.querySelector('.rightBar');
    const leftBar = document.querySelector('.leftBar');
    
    if (rightBar) {
      rightBar.style.display = 'none'; // Hide the rightBar
    }
    
    if (leftBar) {
      // Set the leftBar to take up the full available width
      leftBar.style.flexBasis = '100%';
      leftBar.style.maxWidth = '100%';
    //   leftBar.style.minWidth = '100%';
    }
    setTimeout(hideRightBar, 1000);
}

// Initial attempt to hide the rightBar
hideRightBar();

// Log the current URL to make sure the script is targeting the right page
console.log('Current URL:', window.location.href);

// ------------------------------------------------------------------------------------------------------------------

