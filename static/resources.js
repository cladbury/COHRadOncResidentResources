$('document').ready(function () {
    $.get(
        "https://cladbury.github.io/COHRadOncResidentResources/Database/Literature%20Database.csv",
        function(data) {
            var rows = $.csv.toArrays(data).slice(2);
            for (i in rows){
                addTableRow(rows[i]);
            }
        }
    );
});

function addTableRow(row){
    console.log(row)
    if(row[1]!=""){
        var newRow=$("<tr></tr>")
        newRow.append($(`<td>${row[1]}</td>`))
        newRow.append($(`<td>${row[2]}</td>`))
        newRow.append($(`<td><a href="${row[7]}" target="_blank" rel="noopener noreferrer">${row[3]}</a></td>`))
        newRow.append($(`<td><a href="${row[8]}" target="_blank" rel="noopener noreferrer" class="px-1">Link</a></td>`))
        newRow.append($(`<td><a href="${row[8]}" class="px-1" download>Download</a></td>`))
        $("#resources").append(newRow)
    }
}