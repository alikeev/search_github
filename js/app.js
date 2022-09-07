document.getElementById('toggle').addEventListener('click', Vanille)


function Vanille() {
    const gitOrder = document.getElementById('order').value
    const gitUsers = document.getElementById('select').value
    let count = document.getElementById('count').value
    let page = document.getElementById('page').value
    let username = document.getElementById('search').value
    let url = 'https://api.github.com/search/users?&q=' + username + `&per_page=${count}&page=${page}&sort=${gitUsers}&order=${gitOrder}`
    const headers = {
        "Accept": "application/vnd.github+json"
    }
    const response = fetch(url, {
        "method": "GET",
        "headers": headers
    })
        .then(res => res.json())
        .then(data => {

            document.querySelector('.total').innerHTML = `Результаты поиска:  ${data.total_count}`
            document.getElementById('result').innerHTML = ' '
            data.items.map((item) => {
                document.getElementById('result').insertAdjacentHTML('beforeend', `
                        <div class="users_block">
                         <a href="https://www.github.com/${item.login}" >  <img class="users_images" src="${item.avatar_url}"/> </a>
                         <a href="https://www.github.com/${item.login}" >  <p>${item.login} </p> </a> 
                         <a href="https://www.github.com/${item.login}?tab=repositories" >  <p>Repositories</p> </a>  
                        </div>`)
            })

        }).catch(e => {
            document.getElementById('result').innerHTML += `<p>OPPSSSSS Ошибка попробуйте перезагрузить страницу</p>`
        })

}


document.addEventListener("DOMContentLoaded", function (event) {
    fetch('https://api.github.com/users?&per_page=5').then(res => res.json())
        .then((data) => data.map((item) => {
            document.getElementById('result').innerHTML += `
            <div class="users_block">
            <a href="https://www.github.com/${item.login}" > <img class="users_images" src="${item.avatar_url}"/> </a>
            <a href="https://www.github.com/${item.login}" > <p>${item.login} </p> </a>  
            <a href="https://www.github.com/${item.login}?tab=repositories" >  <p>Repositories</p> </a> 
            <button class="btn-fav" data-id="${item.id}">Click me</button>
            </div> ` })
        ).catch(e => {
            document.getElementById('result').innerHTML += `<p>OPPSSSSS Ошибка попробуйте перезагрузить страницу</p>`
        })



})
















