document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function() {
        // Close all other dropdowns
        dropdowns.forEach(function(d) {
          if (d !== dropdown) {
            d.classList.remove('active');
          }
        });
  
        // Toggle the active class on the clicked dropdown
        dropdown.classList.toggle('active');
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
        dropdowns.forEach(function(dropdown) {
          dropdown.classList.remove('active');
        });
      }
    });
  });

