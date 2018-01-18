

$(function() {
  $("a.more").click(function(event) {
    event.preventDefault();
    var elem = $(".more").text();
    if (elem == "More") {
      //Stuff to do when btn is in the read more state
      $(".more").text("Less");
      $(".more_text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $(".more").text("More");
      $(".more_text").slideUp();
    }
  });
});

        
 function initMap() {
    
        // Creating a new variable to hold my lat and lng
          var officeLocation = {lat: 51.414288, lng: -0.166922};
    
        // Create a map object and specify the DOM element for display.
          map = new google.maps.Map(document.getElementById("map"), {
          center: officeLocation,
          scrollwheel : false,
          zoom: 16
        });
          var marker = new google.maps.Marker({
          position: officeLocation,
          map: map,
          title: 'Find us here!'
        });
    
          var popupAddress = "2nd Floor<br />";
              popupAddress += "8 Hawkes Road<br />";
              popupAddress += "London CR4 3JG<br />";
          
              
          var infowindow = new google.maps.InfoWindow({
          content: popupAddress,
          maxWidth: 300
        });
          marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

      }   