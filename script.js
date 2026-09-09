// Simple script - only for smooth scrolling if browser supports it
// Works in older browsers without errors

function goToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
        // Simple scroll - works in all browsers
        element.scrollIntoView(true);
    }
}

// Add event listeners for navigation links
// This is very simple and compatible with older browsers
window.onload = function() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') && links[i].getAttribute('href').indexOf('#') === 0) {
            links[i].onclick = function() {
                var targetId = this.getAttribute('href').substring(1);
                goToSection(targetId);
                return false;
            };
        }
    }
};