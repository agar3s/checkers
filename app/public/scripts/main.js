$('document').ready( function(){
  
  $('a.expand').on('click', function(e){
    var algo = $(this).data('items');
    console.log(algo);
    $("#"+algo).slideToggle(500);
    return false;
  });

});