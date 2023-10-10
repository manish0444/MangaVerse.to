// Get tabLinks & tabContents
var tabLinks = document.getElementsByClassName("tab-links"),
  tabContents = document.getElementsByClassName("tab-contents");

// On openTab fucntion call
function openTab(tabname) {
  for (item of tabLinks) {
    item.classList.remove("active-link");
  }
  for (item of tabContents) {
    item.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Get SideMenu
var sideMenu = document.getElementById("sidemenu");

// On openTab fucntion call
function openMenu() {
  sideMenu.style.right = "0";
}

function closeMenu() {
  sideMenu.style.right = "-200px";
}
document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");

  // Function to check if the page is scrolled down enough to show the button
  function toggleScrollToTopButton() {
      if (window.scrollY > 300) { // Adjust this value as needed
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  // Add scroll event listener to toggle the button
  window.addEventListener("scroll", toggleScrollToTopButton);

  // Add click event listener to scroll to the top when the button is clicked
  scrollToTopButton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scrolling animation
      });
  });
});
