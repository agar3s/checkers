$('document').ready( function(){
  
  $('a.expand').on('click', function(e){
    var items = $(this).data('items');
    var hidden = $('#'+items).is(':hidden');
    $(this).html(hidden?'-':'+');
    $('#'+items).slideToggle(500);
    return false;
  });

  var updateParent = function(parentId, checked){
    var parent = $('#dt-'+parentId);

    var data = parent.data();
    var childs;
    if(data==null){
      parent = $('.list')[0];
      childs = $(parent).children('dl').children('dt');
      var relativeProgress=0;
      for (var i = childs.length - 1; i >= 0; i--) {
        relativeProgress += parseInt($(childs[i]).attr('data-progress'));
      };
      $('#root').attr('value', relativeProgress/childs.length);
      return;
    }
    
    if(data.childs==0){
      parent.attr('data-progress', checked?100:0);
    }else{
      var relativeProgress=0;
      childs = parent.children('dl').children('dt');
      for (var i = childs.length - 1; i >= 0; i--) {
        relativeProgress += parseInt($(childs[i]).attr('data-progress'));
      };
      parent.attr('data-progress', relativeProgress/data.childs);
    }
    if(checked){
      $('#'+parentId+'~span').html('100%');
    }else{
      var strProgress = ''+parent.attr('data-progress');
      $('#'+parentId+'~span').html(strProgress.substring(0, 5)+'%');
    }

    
    updateParent(parent.data('parent-id'));

  };

  $('.check-progress').on('change', function(e){
    var checkbox = e.target;
    var parentId = $(checkbox).parent().data('parent-id');
    var checked = $(checkbox).is(':checked');
    
    
    if(!checked){
      updateParent(checkbox.id, checked);
      return false;
    }
    var childs = $('[id^="'+checkbox.id+'-"]');
    for(var i=0; i<childs.length; i++){
      $(childs[i]).prop('checked', true);
      $('#dt-'+childs[i].id).attr('data-progress', 100);
      $('#'+childs[i].id+'~span').html('100%');
    }
    updateParent(checkbox.id, checked);
  });

});