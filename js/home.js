  $( ".draggable" ).draggable({
    connectToSortable: "#mybuilder",
    helper: "clone",
    revert: "invalid",
  });

  $( "#mybuilder" ).sortable({
    revert: true
  });

  $("#mybuilder").on("click",".draggable",function(){
    var elm = $(this);
    if(elm.find(".controls").length > 0)
    elm.find(".controls").remove();
    else{
      elm.append("<div class='controls'><button class='btn btn-sm btn-primary'>edit</button><button class='btn btn-sm btn-primary'>delete</button></div>");
    }
  });