// script.js
document.addEventListener('DOMContentLoaded', function () {
    const getDataButton = document.getElementById('getDataButton');
    const catFactDiv = document.getElementById('catFact');

    function fetchCatFact() {
        const apiUrl = 'https://meowfacts.herokuapp.com/';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                catFactDiv.textContent = data.data;
            })
            .catch(error => {
                catFactDiv.textContent = 'Error: ' + error;
            });
    }

    getDataButton.addEventListener('click', function () {
        fetchCatFact();
    });
});

