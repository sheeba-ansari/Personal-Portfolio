// Smooth scrolling for navigation links

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const sectionId = link.getAttribute("href");

        const section = document.querySelector(sectionId);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});