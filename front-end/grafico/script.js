let arr = [];
arr.push(["Dispositivo", "Total"]);

function getData() {
  fetch("http://127.0.0.1:5000/monitoramento/grafico1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i <= 4; i++) {
        let element = [data[i].dispositivo, data[i].TotalRegistros];
        arr.push(element);
      }
      drawPieChart();
      drawBarChart();
      drawAreaChart();
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

function drawAreaChart(){
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(function () {
    var data = google.visualization.arrayToDataTable(arr);

    var options = {
      title: 'Gráfico Área - Totalização de Registro por Dispositivo'
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  });
}
