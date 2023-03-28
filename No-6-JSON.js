
const tableBody = document.querySelector('#data-table');

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const row = document.createElement('tr');
                const idCell = document.createElement('td');
                const nameCell = document.createElement('td');
                const usernameCell = document.createElement('td');
                const emailCell = document.createElement('td');
                const StreetCell = document.createElement('td');
                const SuiteCell = document.createElement('td');
                const CityCell = document.createElement('td');
                const Zipcode = document.createElement('td');
                const geoLat = document.createElement('td');
                const geolng = document.createElement('td');
                const phone = document.createElement('td');
                const webiste = document.createElement('td');
                const company = document.createElement('td');
                const catchphrase = document.createElement('td');
                const bs = document.createElement('td');
                idCell.textContent = item.id;
                nameCell.textContent = item.name;
                usernameCell.textContent = item.username;
                emailCell.textContent = item.email;
                StreetCell.textContent = item.address.street;
                SuiteCell.textContent = item.address.suite;
                CityCell.textContent = item.address.city;
                Zipcode.textContent = item.address.zipcode;
                geoLat.textContent = item.address.geo.lat;
                geolng.textContent = item.address.geo.lng;
                phone.textContent = item.phone;
                webiste.textContent = item.website;
                company.textContent = item.company.name;
                catchphrase.textContent = item.company.catchPhrase;
                bs.textContent = item.company.bs;
                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(usernameCell);
                row.appendChild(emailCell);
                row.appendChild(StreetCell);
                row.appendChild(SuiteCell);
                row.appendChild(CityCell);
                row.appendChild(Zipcode);
                row.appendChild(geoLat);
                row.appendChild(geolng);
                row.appendChild(phone);
                row.appendChild(webiste);
                row.appendChild(company);
                row.appendChild(catchphrase);
                row.appendChild(bs);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error(error));
}

loadData();
