import {pool} from '../db.js'

export const getPopulation = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, Population from countrycode natural join population;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getSurfaceArea = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, SurfaceArea_km2 from countrycode natural join geography;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}
export const getGDP = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, GDP_USD from countrycode natural join gdp;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}
export const getEmployment = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, Employment_Percent from countrycode natural join employment;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}