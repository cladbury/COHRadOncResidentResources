$('document').ready(function () {
    db = $("#database")
    console.log(db.html())
    let selectedFile;
    var data = $.get("./Database/Literature%20Database.csv");
    //console.log(data)
    getData(selectedFile);
});

function getData(selectedFile){
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
         console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
              console.log(rowObject);
              document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
         });
        }   
    }
}