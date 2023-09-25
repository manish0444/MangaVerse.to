// JavaScript to toggle the mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const mobileNav = document.getElementById("mobile-nav");

    menuButton.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
    });
});



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".action-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".child-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".family-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
  function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const contentBanners = document.getElementById("Banners-container");

    // Store the original content
    const originalContent = Array.from(contentBanners.children);

    // Function to filter and display content based on search term
    function filterContent(searchTerm) {
        contentBanners.innerHTML = '';

        originalContent.forEach(item => {
            const showName = item.querySelector('.show-name').textContent.toLowerCase();
            if (showName.includes(searchTerm.toLowerCase())) {
                contentBanners.appendChild(item.cloneNode(true));
            }
        });
    }

    // Event listener for the search button click
    document.getElementById("searchButton").addEventListener("click", function () {
        const searchTerm = searchInput.value;
        filterContent(searchTerm);
    });

    // Event listener for input changes
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value;
        filterContent(searchTerm);
    });
});
