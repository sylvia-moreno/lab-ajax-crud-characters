const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
    document.getElementById('fetch-all').onclick = function(e) {
        e.preventDefault();

        charactersAPI.getFullList().then(resp => {
            const html = resp.data.map(character => {
                return `<div class="character-info">
                          <div class="name">Id: ${character.id}</div>
                          <div class="name">Name: ${character.name}</div>
                          <div class="occupation">Occupation: ${character.occupation}</div>
                          <div class="weapon">Weapon: ${character.weapon}</div>
                        </div>`
            })
            document.getElementsByClassName('characters-container')[0].innerHTML = html;
        })
    }

    document.getElementById('fetch-one').onclick = function(e) {
        e.preventDefault();

        const characterId = document.getElementsByName('character-id')[0].value;
        let html = '';
        charactersAPI
            .getOneRegister(characterId)
            .then(resp => {
                const data = resp.data;
                html = `<div class="character-info">
                <div class="name">Id: ${data.id}</div>
                <div class="name">Name: ${data.name}</div>
                <div class="occupation">Occupation: ${data.occupation}</div>
                <div class="weapon">Weapon: ${data.weapon}</div>
                </div>`;
                document.getElementsByClassName('characters-container')[0].innerHTML = html;
            })
    }

    document.getElementById('delete-one').onclick = function(e) {
        e.preventDefault();

        const characterId = document.getElementsByName('character-id-delete')[0].value;
        const btn = document.getElementById("delete-one");

        charactersAPI
            .deleteOneRegister(characterId)
            .then(resp => {
                btn.style.backgroundColor = 'green';
            })
            .catch(err => {
                btn.style.backgroundColor = 'red';
            })
    }

    document.getElementById('edit-character-form').onsubmit = function(e) {
        e.preventDefault();
        const btn = document.getElementById("send-data2");

        let data = {
            id: document.getElementsByName('chr-id')[0].value,
            name: document.getElementsByName('name')[0].value,
            occupation: document.getElementsByName('occupation')[0].value,
            weapon: document.getElementsByName('weapon')[0].value,
            cartoon: document.getElementsByName('cartoon').checked,
        }

        charactersAPI
            .updateOneRegister(data)
            .then(resp => {
                btn.style.backgroundColor = 'green';
            })
            .catch(err => {
                btn.style.backgroundColor = 'red';
            })
    }

    document.getElementById('new-character-form').onsubmit = function(e) {
        e.preventDefault();
        const btn = document.getElementById("send-data1");

        let data = {
            name: document.getElementsByName('name')[0].value,
            occupation: document.getElementsByName('occupation')[0].value,
            weapon: document.getElementsByName('weapon')[0].value,
            cartoon: document.getElementsByName('cartoon').checked,
        }

        charactersAPI
            .createOneRegister(data)
            .then(resp => {
                btn.style.backgroundColor = 'green';
            })
            .catch(err => {
                btn.style.backgroundColor = 'red';
            })
    }
})