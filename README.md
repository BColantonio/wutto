# wutto
Recommendations from the people that matter most

stack: mongoDB, express, react, node.js


add database configuration
`./db/conn.js

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/wutto';

(async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${url}`);
       mongoose.connection.close();

    } catch (err) {
        console.error(err);
    }
})();`
