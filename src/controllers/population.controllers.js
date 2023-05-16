import {pool} from '../db.js'

export const getPopulation_LifeExpectancy = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, LifeExpectancy from countrycode natural join population where LifeExpectancy IS NOT NULL;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getPopulation_BirthDeath = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, DeathRate_Per1000, BirthRate_Per1000 from countrycode natural join population where BirthRate_Per1000 IS NOT NULL;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}
