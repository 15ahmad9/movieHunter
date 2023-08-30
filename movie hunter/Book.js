const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0f34bef930msh8d8fe3643c8bda7p13b351jsnd72b876b9f8 1',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
  }
  
  async function getData() {
    let response = await fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options)
    let data = await response.json();
    render(data);
  }
  getData()
  
  function render(data) {
    let table = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Author</th>
    <th>Cover</th>
    <th>Url of book</th>
    <th>votes</th>
    </tr>`;
  
    for (let key in data) {
      table += `<tr>  
        <td>${data[key].book_id}</td>
        <td>${data[key].name}</td>
        <td>${data[key].author}</td>
        <td><img src=${data[key].cover}></td> 
        <td><a href="${data[key].url}" target="_blank">${data[key].url}</a></td> 
        <td>${data[key].votes}</td>
        </tr>`
    }
    document.getElementById("BookAPI").innerHTML = table;
  }

