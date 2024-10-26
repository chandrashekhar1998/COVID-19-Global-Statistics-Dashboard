$.ajax({
    type: 'get',
    url: 'https://disease.sh/v3/covid-19/countries',
    success: function(response) {
        console.log(response);  
        for (var i = 0; i < response.length; i++) {
            var country = response[i]; 
            var tablerow = `
                <tr>
                    <td>${country.country}</td>
                    <td>${country.cases}</td>
                    <td>${country.active}</td>
                    <td>${country.recovered}</td>
                    <td>${country.deaths}</td>
                    <td>${country.population}</td>
                    <td>${country.todayCases}</td>
                </tr>
            `;
            $('#tbody').append(tablerow);
        }
        $('#covidtable').DataTable(); 
    },
    error: function(error) {
        console.log(error);
    }                 
});
