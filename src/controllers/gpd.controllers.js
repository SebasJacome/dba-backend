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

export const getGDPCountries = async (req, res) => {
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

