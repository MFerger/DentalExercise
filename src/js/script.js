$(function(){
    $(".selectAll").change(function() {
        var checked = this.checked;
        var number = this.value;
        var set = '.group-' + number;
        if($(set).prop("checked", !checked)){
          $(set).click();
        };
    });
  })
