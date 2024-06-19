let arr = [];
arr.push(["Dispositivo", "Total"]);

function getData() {
  fetch("http://127.0.0.1:5000/monitoramento/graficobarra")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= 4; i++) {
        let element = [data[i].dispositivo, data[i].TotalRegistros];
        arr.push(element);
      }
      drawBarChart();
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
}

getData();

function drawBarChart() {
  google.charts.load("current", { packages: ["bar"] });
  google.charts.setOnLoadCallback(function () {
    var data = google.visualization.arrayToDataTable(arr);

    var options = {
      chart: {
        title: "Gráfico Barras - Totalização de Registro por Dispositivo",
      },
      bars: "horizontal",
    };
    

    var chart = new google.charts.Bar(
      document.getElementById("barchart_material")
    );

    chart.draw(data, google.charts.Bar.convertOptions(options));
  });
}
