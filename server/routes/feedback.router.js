const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "name";';

    pool.query(queryText)
        .then((result) => {
            console.log('get success', result);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('err in get', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    let feedback = req.body;
    console.log('adding new feedback', feedback);

    let queryText = `INSERT INTO "feedback" ("name", "feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [feedback.name, feedback.feeling, feedback.understanding, feedback.support, feedback.comment])
        .then(() => {
            console.log('post success')
            res.sendStatus(201)
        })
        .catch(err => {
            console.log('post failed', err);
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
  
    console.log('in delete', req.params.id);

    const sqlQuery = `
        DELETE FROM "feedback"
        WHERE "id" = $1;
    `;
  

    pool.query(sqlQuery, [req.params.id])
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => {
            console.log(`DELETE failed: ${err}`);
            res.sendStatus(500);
        });

});


router.put('/:id', (req, res) => {
    const sqlQuery = `
        UPDATE "feedback"
        SET "flagged" = $2
        WHERE id = $1;
    `;
    

    pool.query(sqlQuery, [req.params.id, !req.body.flagged])
        .then(() => {
            console.log('flagged success')
            res.sendStatus(200);
        })
        .catch((err) => {
            console.log(`PUT failed, ${err}`);
            res.sendStatus(500);
        });
});



module.exports = router;