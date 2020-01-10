const express = require('express');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.get('/api', function (req, res) {
    axios.post('https://www.compass.com/api/v3/listings/search/list/relations', {
        searchQuery: {
            start: 0,
            num: 24,
            sortOrder: 90,
            listingTypes: [2],
            agentSearch: true,
            saleStatuses: [9, 12],
            geography: 'san_diego',
            listingDetailsAllowPartialMatch: {
                'Agent Name': {
                    listValues: ['richard elias']
                }
            },
        },
        relationTypes: [0]
    })
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

app.get('/api/listings', (req, res) => {
    axios.post('https://www.compass.com/api/v3/listings/search/list/relations', {
        searchQuery: {
            start: 0,
            num: 24,
            sortOrder: 90,
            listingTypes: [2],
            agentSearch: true,
            saleStatuses: [9, 12],
            geography: 'san_diego',
            listingDetailsAllowPartialMatch: {
                'Agent Name': {
                    listValues: ['richard elias']
                }
            },
        },
        relationTypes: [0]
    })
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));