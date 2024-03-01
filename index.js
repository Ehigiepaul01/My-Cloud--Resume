const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('show');
});

// Function to fetch the number of viewers from the server
function fetchViewerCount() {
  // Make an AJAX request to your server to fetch the viewer count
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              // If the request is successful, update the viewer count on the webpage
              var viewerCount = xhr.responseText;
              document.getElementById('viewerCount').innerText = viewerCount;
          } else {
              // If there's an error, log it to the console
              console.error('Error fetching viewer count:', xhr.status);
          }
      }
  };
  xhr.open('GET', '/getViewerCount', true); // Replace '/getViewerCount' with the actual endpoint on your server
  xhr.send();
}

// Function to update the viewer count periodically
function updateViewerCount() {
  fetchViewerCount(); // Fetch the viewer count initially
  setInterval(fetchViewerCount, 5000); // Update the viewer count every 5 seconds (adjust this interval as needed)
}

// Call the function to start updating the viewer count
updateViewerCount();
