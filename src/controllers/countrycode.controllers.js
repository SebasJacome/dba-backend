import { pool } from '../db.js'

export const getCountryCodes = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM countrycode')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getCountryCode = async (req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM countrycode WHERE CountryCode = ?', [req.params.id])
    
    if(rows.length <= 0) return res.status(404).json({
        message: 'CountryCode not found'
    })

    res.send(rows[0])
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}