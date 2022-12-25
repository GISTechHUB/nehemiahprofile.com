    <script>
      var map;
      function initialize() {
        var prop = {
          center: new google.maps.LatLng(51.508742, -0.12085),
          zoom: 5,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        return new google.maps.Map(document.getElementById("w3docs-map"), prop);
      }
      setTimeout(function () {
        map = initialize();
      }, 500);
      function w3Load() {
        document.getElementById("w3docs-map").style.display = "block";
        google.maps.event.trigger(map, "resize");
      }
    </script>