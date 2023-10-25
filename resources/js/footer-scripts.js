$(function () {
  console.log('footer-scripts.js loaded!');  

  var base_url = window.location.origin;;
  console.log('base url: ' + base_url);

  // Enable Tooltips
  $('[data-bs-toggle="tooltip"], [data-toggle="tooltip"]').tooltip();

  // Executes the following scripts on dashboard page only  
  if ($('.dashboard').length) {

    // TOGGLE EXPAND/COLLAPSE OF SIDEBAR    
    $('#toggle-side').on('click', function (e) {
      e.preventDefault();
      console.log('toggle side');
      $('.dashboard').toggleClass('side-collapse');

      // Toggle Show/Hide tooltips on sidebar nav item links
      if ($('.dashboard').hasClass('side-collapse')) {
        $('#sidebar .nav-item-link[data-bs-toggle="tooltip"]').tooltip('enable');        
      } else {
        $('#sidebar .nav-item-link[data-bs-toggle="tooltip"]').tooltip('dispose');        
      }

    }) // end of $('#toggle-side').on('click', function() {

    // TOOLTIP FIX: HIDE TOOLTIP AFTER CLICK
    $('[data-bs-toggle="tooltip"], [data-toggle="tooltip"]').on('click', function () {
      $(this).tooltip('hide');
    })

    // TOGGLE LIGHT/DARK
    $('.toggle-theme').on('click', function (e) {
      e.preventDefault();
      $('.dashboard').toggleClass('dark');

      //$(this).removeAttr('data-bs-theme');

      if ($('.dashboard').hasClass('dark')) {
        $('.dashboard').attr('data-bs-theme', 'dark');
      } else {
        $('.dashboard').attr('data-bs-theme', 'light');
      }
      
    }) // end of $('.toggle-dark').on('click', function() {

  } // end of if ($('.dashboard').length)

  // $('.search-select').select2({
  //   theme: 'bootstrap-5',
  //   placeholder: 'Select'
  // });

}); // end of  $(function() {