const express = require('express');

const app = express();

const port = 5000;

app.get('/api/developers', (req, res) =>{
    const developers = [
        {id: 1, firstName: 'Nigel', lastName: 'Jaure'},
        {id: 2, firstName: 'Nigel', lastName: 'Chindungwe'},
        {id: 3, firstName: 'Abington', lastName: 'Manyere'},
        {id: 4, firstName: 'Vechnet', lastName: 'Makuyana'},
    ];

    res.json(developers);
});

app.listen(port, () => console.log(`express server started on port ${port}`));
