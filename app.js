// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Handle Apply Now buttons
    setupApplyButtons();
    
    // Add smooth scrolling for any internal navigation
    setupSmoothScrolling();
    
    // Add some interactive enhancements
    setupCardHoverEffects();
    
    // Initialize accessibility enhancements
    enhanceAccessibility();
    
    // Add visual feedback
    addVisualFeedback();
}

// Handle Apply Now button clicks
function setupApplyButtons() {
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear any existing focus or active states
            this.blur();
            
            // Open Airtable form in new tab
            window.open('https://airtable.com/appbbgbN5YOAnKI7w/pagFp1XgVIPs0iTOq/form', '_blank');
        });
    });
}
