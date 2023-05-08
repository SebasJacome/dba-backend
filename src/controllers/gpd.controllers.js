import { pool } from '../db.js'

export const getGDP_Growth = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryName, GDP_USD, GDPgrowth_Percent, GDPPerCap_USD from countrycode natural join gdp order by GDPgrowth_Percent desc limit 5;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getGDP_PC = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryName, GDP_USD, GDPgrowth_Percent, GDPPerCap_USD from countrycode natural join gdp order by GDPPerCap_USD desc limit 5;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getGDPCountries = async (req, res) => {
    const countrycode = req.params.id
    try{
        const [rows] = await pool.query(`select CountryName, GDP_USD, GDPgrowth_Percent, GDPPerCap_USD from countrycode natural join gdp where CountryCode = '${countrycode}';`)
        res.json(rows[0])
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

