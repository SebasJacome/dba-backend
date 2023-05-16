import {pool} from '../db.js'

export const getEmploymentPercent_DC = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, AgricultureEmployees_Percent, IndustryEmployees_Percent, ServicesEmployees_Percent from employment natural join countrycode where Employment_Percent IS NOT NULL;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getEmploymentPercent_BC = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, Employment_Percent from employment natural join countrycode order by Employment_Percent desc limit 10;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}
