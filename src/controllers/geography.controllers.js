import {pool} from '../db.js'

export const getGeography_SurfaceArea = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, SurfaceArea_km2, ((AgricultureLand_Percent/100)*SurfaceArea_km2) as AgricultureLand_km2, ((ArableLand_Percent/100)*SurfaceArea_km2) as ArableLand_km2 from countrycode natural join geography where AgricultureLand_Percent IS NOT NULL and ArableLand_Percent IS NOT NULL;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}

export const getGeography_PopDensity = async (req, res) => {
    try{
        const [rows] = await pool.query('select CountryCode, CountryName, (Population/SurfaceArea_km2) as PopulationDensity_km2 from countrycode natural join geography natural join population where SurfaceArea_km2 IS NOT NULL order by PopulationDensity_km2 desc limit 10;')
        res.json(rows)
    }
    catch(error){
        return res.status(500).json({
            message: 'Something goes wrong',
            error
        })
    }
}
