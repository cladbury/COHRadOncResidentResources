$('document').ready(function () {
    $("#filter").keyup(function(){
        var query = $("#filter").val().toLowerCase()
        if (query==""){
            $(".filteritem").removeClass("d-none")
        }else{
            $(".filteritem").removeClass("d-none")
            $(`.filteritem`).filter(function() {return !$(this).text().split('LinkDownload')[0].toLowerCase().includes(query)}).addClass("d-none")
        }
    })
});