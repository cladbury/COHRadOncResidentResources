$('document').ready(function () {
    $.get(
        "https://cladbury.github.io/COHRadOncResidentResources/Database/Literature%20Database.csv",
        function(data) {
            rows = $.csv.toArrays(data).slice(2);
            for (i in rows){
                console.log(rows[i])
            }
        }
    );
    //getData(data);
});

function getData(data){
    let fileReader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
          type: 'binary'
        });
  
        workbook.SheetNames.forEach(function(sheetName) {
          // Here is your object
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          var json_object = JSON.stringify(XL_row_object);
          console.log(json_object);
  
        })
  
      };
    //fileReader.readAsBinaryString(data);
/* 
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
       */
}