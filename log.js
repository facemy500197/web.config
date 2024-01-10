document.addEventListener("DOMContentLoaded", function() {
    // Make a request to a server-side script to log the IP address
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fixmechanic.com/nameo/log.php", true);
    xhr.send();
});
