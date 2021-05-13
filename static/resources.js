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
    if(row[1]!=""){
        var newRow=$(`<tr class='filteritem ${row[1].toLowerCase()} ${row[2].toLowerCase()}'></tr>`)
        newRow.append($(`<td class="">${row[1]}</td>`))
        newRow.append($(`<td class="">${row[2]}</td>`))
        newRow.append($(`<td class=""><a href="${row[7]}" target="_blank" rel="noopener noreferrer">${row[3]}</a></td>`))
        newRow.append($(`<td class=""><a href="${row[8]}" target="_blank" rel="noopener noreferrer" class="px-1">Link</a></td>`))
        newRow.append($(`<td class=""><a href="${row[8]}" class="px-1" download>Download</a></td>`))
        newRow.append($(`<td class="">${row[5]}</td>`))
        newRow.append($(`<td class="">${row[6]}</td>`))
        $("#resources").append(newRow)
    }
}