$('document').ready( function(){
  
  $('a.expand').on('click', function(e){
    var items = $(this).data('items');
    var hidden = $('#'+items).is(':hidden');
    $(this).html(hidden?'-':'+');
    $('#'+items).slideToggle(500);
    return false;
  });

  $('.check-progress').on('change', function(e){
    var checkbox = e.target;
    console.log($(checkbox).parent());
    if(!$(checkbox).is(':checked')){
      $('#'+checkbox.id+'~span').html('0%');
      return false;
    }
    $('#'+checkbox.id+'~span').html('100%');
    //$('#'+checkbox.id+'~a.expand').click();

    var childs = $('[id^="'+checkbox.id+'-"]');
    for(var i=0; i<childs.length; i++){
      $(childs[i]).prop('checked', true);
      $('#'+childs[i].id+'~span').html('100%');
    }
  });

});