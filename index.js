import express from 'express'
import {pool} from './db.js'
const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 as Result')
    res.json(result)
});

app.listen(3000)
console.log('Server on port 3000')