// The 'button' element used to toggle the menu display.
var menu_button = document.getElementById('btn_menu');

// The actual unordered list of items that make up the menu.
var menu = document.getElementById('nav_list');

// The SVG element that displays the hamberger or close icon.
var icon = document.querySelector('.menu_toggle_button');

// The currently displayed icon in the SVG element.
var icon_current = '';

// The size where the nav switches between small and medium
var break_point = 768;

// Listen for the menu button to be clicked.
menu_button.addEventListener('click', function() {
  // When the menu button is clicked,
  // if the menu (#nav_list) has the class 'visually-hidden', remove it.
  // If it doesn't have the class, add it.
  // Hence "toggle" the class.
  menu.classList.toggle('visually-hidden');

  // Target the element that is actually clicked, the "button" element.
  icon = document.querySelector('.menu_toggle_button');
  // Figure out which icon is currently being shown in the button.
  icon_current = icon.querySelectorAll('use')[0].getAttribute('xlink:href');
  // Show the opposite icon.
  if (icon_current === '#navicon')
    icon.querySelectorAll('use')[0].setAttribute('xlink:href', '#closeicon');
  else
    icon.querySelectorAll('use')[0].setAttribute('xlink:href', '#navicon');
});

// Listen for the window to be resized.
window.addEventListener('resize', function() {
  // If the window is larger (or equal) to/than 768, show the menu list.
  // Otherwise, hide the menu list.
  if (window.innerWidth >= break_point) {
    menu.classList.remove('visually-hidden');
    icon.querySelectorAll('use')[0].setAttribute('xlink:href', '#closeicon');
  } else {
    menu.classList.add('visually-hidden');
    icon.querySelectorAll('use')[0].setAttribute('xlink:href', '#navicon');
  }
});

// Initial
(function() {
  if (window.innerWidth >= break_point)
    menu.classList.remove('visually-hidden');
})();
