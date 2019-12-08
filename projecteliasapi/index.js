const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/listings', (req, res) => {
    request('https://www.compass.com/api/v3/listings/search/list/relations',
        {
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
        },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({
                    type: 'error',
                    message: err.message
                });
            }

            res.json(JSON.parse(body));
        }
    )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));