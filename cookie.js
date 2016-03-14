$(document).ready(function() {
  var chocolate_counter = 1
  var lemon_counter = 1
  var mm_counter = 1
  


// ADD CHOCOLATE CHIP COOKIE
  $("#eat_chocolate_button").on("click", function() {
    Cookies.set("chocolate_chip_cookie", chocolate_counter++);
    $("#chocolate_counter").text(Cookies.get("chocolate_chip_cookie", chocolate_counter));
  })
    
  if (Cookies.get("chocolate_chip_cookie")) {
    $("#chocolate_counter").text(Cookies.get("chocolate_chip_cookie", chocolate_counter));
  }


// RESET CHOCOLATE CHIP COOKIE COUNTER
  $("#delete_chocolate_button").on("click", function() {
    Cookies.set("chocolate_chip_cookie", 0);
    $("#chocolate_counter").text(Cookies.get("chocolate_chip_cookie", chocolate_counter));

  })




// ADD LEMON COOKIE
  $("#eat_lemon_button").on("click", function() {
    Cookies.set("lemon_cookie", lemon_counter++);
    $("#lemon_counter").text(Cookies.get("lemon_cookie", lemon_counter));
  })

  if (Cookies.get("lemon_cookie")) {
    $("#lemon_counter").text(Cookies.get("lemon_cookie", lemon_counter));
  }

// RESET LEMON COOKIE COUNTER
  $("#delete_lemon_button").on("click", function() {
    Cookies.set("lemon_cookie", 0);  
    $("#lemon_counter").text(Cookies.get("lemon_cookie", lemon_counter));
  })





// ADD M&M COOKIE
  $("#eat_mm_button").on("click", function() {
    Cookies.set("mm_cookie", mm_counter++);
    $("#mm_counter").text(Cookies.get("mm_cookie", mm_counter));
  })

  if (Cookies.get("mm_cookie")) {
    $("#mm_counter").text(Cookies.get("mm_cookie", mm_counter));
  }

// RESET M&M COOKIE COUNTER
  $("#delete_mm_button").on("click", function() {
    Cookies.set("mm_cookie", 0);
    $("#mm_counter").text(Cookies.get("mm_cookie", mm_counter));  
  })
 




// BUY BUTTON (REFRESH PAGE)
  $("#buy_button").on("click", function() {
    location.reload();
  })

// DELETE BROWSER COOKIES
  $("#delete_all_cookies_button").on("click", function() {
    document.cookie = "chocolate_chip_cookie" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "lemon_cookie" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "mm_cookie" + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    location.reload();
  })



}) // end doc ready