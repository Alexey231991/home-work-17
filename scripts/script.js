const url = 'https://rickandmortyapi.com/api/character/?page=';
let pageNum = 0;
const btn = document.querySelector('.load-btn')
const ul = document.querySelector('.character-list')

btn.addEventListener('click', loadNames)

function loadNames() {
    btn.innerText = 'Getting data...'

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url + pageNum);
    xhr.send();
    xhr.onload = function () {
        const res = JSON.parse(xhr.response);

        btn.innerText = 'Get data'

        if (res.error) {
            btn.disabled = true
            return;
        }

        res.results.forEach(el => {
            const li = document.createElement('li');
            li.innerText = el.name;
            ul.append(li)
        });

        pageNum = pageNum + 1;
    };

}