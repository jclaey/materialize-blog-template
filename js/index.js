// Accordion Init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

// Dropdown Menu Init
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

// Current time and date
var now = moment();

// Get current year for copyright
document.getElementById('year').textContent = new Date().getFullYear();