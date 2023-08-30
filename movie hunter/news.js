const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0f34bef930msh8d8fe3643c8bda7p13b351jsnd72b876b9f8 1',
        'X-RapidAPI-Host': 'moka-news.p.rapidapi.com'
    }
  }
  
  async function getData() {
    let response = await fetch('https://moka-news.p.rapidapi.com/sources.php', options)
    let data = await response.json();
    render(data);
  }
  getData()
  
  function render(data) {
    let table = `<tr>
    <th>ID</th>
    <th>sourceName</th>
    <th>source</th>
    </tr>`;
  
    for (let key in data) {
      table += `<tr>  
        <td>${data[key].id}</td>
        <td>${data[key].sourceName}</td>
        <td>${data[key].source}</td>
        
        </tr>`
    }
    document.getElementById("NewsAPI").innerHTML = table;
  }

