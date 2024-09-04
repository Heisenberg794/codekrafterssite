const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function startAnimation() {
  let iteration = 0;
  const h1 = document.querySelector("h1");
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    h1.innerText = h1.innerText.split("").map((letter, index) => {
      if (index < iteration) {
        return h1.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join("");
    
    if (iteration >= h1.dataset.value.length) {
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
window.onload = startAnimation;


function changeActiveLink(link) {
    document.querySelector('.navbar a.active').classList.remove('active');
    link.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var currentSection = "";
        var sections = document.querySelectorAll("section");
        sections.forEach(function(section) {
            var top = section.offsetTop;
            var height = section.clientHeight;
            if (pageYOffset >= (top - height / 5)) {
                currentSection = section.getAttribute("id");
            }
        });

        var navLinks = document.querySelectorAll(".navbar a");
        navLinks.forEach(function(link) {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});



document.getElementById('toggleButton').addEventListener('click', function() {
    var hiddenContainer = document.getElementById('hidden-container');
    if (hiddenContainer.classList.contains('hidden')) {
        hiddenContainer.classList.remove('hidden');
        this.textContent = 'Show Less';  // Change button text
    } else {
        hiddenContainer.classList.add('hidden');
        this.textContent = 'Show More';  // Reset button text
    }
});
