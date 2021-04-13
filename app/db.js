const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./MLPX.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database is now Connected.');
});

async function runAllData(){
    db.serialize(() => {
        db.each(`SELECT * FROM AAPL`, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row)
        });
    });
};

//runAllData();


module.exports = {
    db,
    runAllData,
}