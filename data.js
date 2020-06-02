var city = {"Madrid", "Skopje", "Paris"};
var country = {"Spain", "Macedonia", "France"};
var population = {"47.000.000", "2.000.000", "67.000.00"};


document.write(city + "<br>");
document.write(country + "<br>");
document.write(population + "<br>");



function addRowHandlers() {
    var city = document.getElementById("city");
    var rows = city.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      var currentRow = city.rows[i];
      var createClickHandler = function(row) {
        return function() {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          alert("id:" + id);
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }