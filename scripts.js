// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Add click event listeners to each header
accordionHeaders.forEach(header => {
    header.addEventListener("click", function() {
        // Toggle the content visibility
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
function redirectTo(url) {
    window.location.href = url;
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
const buttons = document.querySelectorAll('.custom-button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#ff9800';
        button.style.color = 'white';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#28a745';
        button.style.color = 'white';
    });
});
