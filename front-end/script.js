function getData() {
  fetch("http://127.0.0.1:5000/monitoramento")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const tableBody = document
        .getElementById("tabelaMonitoramento")
        .getElementsByTagName("tbody")[0];
      tableBody.innerHTML = ""; // Limpa o corpo da tabela
      data.forEach((item) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
                      <td class="alignItensColumn">${item.id}</td>
                      <td class="alignItensColumn">${item.temperatura}</td>
                      <td class="alignItensColumn">${item.umidade}</td>
                      <td class="alignItensColumn">${item.dispositivo}</td>
                      <td class="alignItensColumn">${item.luminosidade}</td>
                      <td class="alignItensColumn">${item.presenca}</td>
                      <td class="alignItensColumn">${item.distancia}</td>
                      <td class="alignItensColumn">${item.dt_created}</td>
                  `;
      });
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
}

let pesquisaInput = document.getElementById("inputPesquisa");

pesquisaInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    pesquisa = e.target.value;
    console.log(pesquisa);
    getDataByDispositivo();
  }
});

function getDataByDispositivo() {
  fetch(`http://127.0.0.1:5000/monitoramento/${pesquisa}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const tableBody = document
        .getElementById("tabelaMonitoramento")
        .getElementsByTagName("tbody")[0];
      tableBody.innerHTML = "";
      data.forEach((item) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
                      <td class="alignItensColumn">${item.id}</td>
                      <td class="alignItensColumn">${item.temperatura}</td>
                      <td class="alignItensColumn">${item.umidade}</td>
                      <td class="alignItensColumn">${item.dispositivo}</td>
                      <td class="alignItensColumn">${item.luminosidade}</td>
                      <td class="alignItensColumn">${item.presenca}</td>
                      <td class="alignItensColumn">${item.distancia}</td>
                      <td class="alignItensColumn">${item.dt_created}</td>
                  `;
      });
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
}

pesquisaInput.addEventListener("input", function (e) {
  if (!e.target.value.trim()) {
    window.location.reload();
  }
});

getData();
