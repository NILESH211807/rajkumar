document.querySelector(".dropbtn").addEventListener("click", function (event) {
  event.preventDefault();
  let dropdownContent = this.nextElementSibling;
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach((dropdown) => (dropdown.style.display = "none"));
  }
};

// Initialize and add the map
// function initMap() {
//   // Your location
//   const loc = { lat: 28.630044, lng: 77.372082 };
//   // Centered map on location
//   const map = new google.maps.Map(document.querySelector(".map"), {
//     zoom: 14,
//     center: loc,
//   });
//   // The marker, positioned at location
//   const marker = new google.maps.Marker({ position: loc, map: map });
// }

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
