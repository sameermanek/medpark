resizeMap=function(width){
  if (width <= 991) { //using the equiv. of bootstrap medium width. Should be invoked for phones and tablets
    $("#googleMapImage").attr("src", "http://maps.googleapis.com/maps/api/staticmap?size=360x240&scale=2&zoom=13&markers=icon:&markers=icon:http://chart.apis.google.com/chart?chst=d_map_pin_icon%26chld=medical%257CFD7B70%7C403%20W%20Galena%20Blvd,%20Aurora,%20IL,%2060506")
  } else {
    $("#googleMapImage").attr("src", "http://maps.googleapis.com/maps/api/staticmap?size=540x360&scale=2&zoom=14&markers=icon:&markers=icon:http://chart.apis.google.com/chart?chst=d_map_pin_icon%26chld=medical%257CFD7B70%7C403%20W%20Galena%20Blvd,%20Aurora,%20IL,%2060506")
  }
  return true    
}

window.onload=function(){
    var width = window.innerWidth;
    //resizeMap(width)
    $('.carousel').carousel({
         interval: 5000
     })
};

window.onresize=function(){
    var width = window.innerWidth;
    //resizeMap(width)
}
