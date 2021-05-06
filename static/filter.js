$('document').ready(function () {
    $("#filter").keyup(function(){
        var query = $("#filter").val().toLowerCase()
        if (query==""){
            $(".filteritem").removeClass("d-none")
        }else{
            $(".filteritem").addClass("d-none")
            $(`.filteritem[class*='${query}']`).removeClass("d-none")
        }
    })
});