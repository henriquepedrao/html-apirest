let arr = [];
arr.push(["Dispositivo", "Total"]);

function getData() {
  fetch("http://127.0.0.1:5000/monitoramento/graficopizza")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= 4; i++) {
        let element = [data[i].dispositivo, data[i].TotalRegistros];
        arr.push(element);
      }
      drawPieChart();
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
}

getData();

function drawPieChart() {
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(function () {
    var data = google.visualization.arrayToDataTable(arr);

    var options = {
      title: "Gráfico Pizza - Totalização de Registro por Dispositivo",
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("piechart")
    );

    chart.draw(data, options);
  });
}
