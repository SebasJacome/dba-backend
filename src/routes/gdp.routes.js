import { Router } from 'express'
import { getGDP_Growth, getGDP_PC, getGDPCountries } from '../controllers/gpd.controllers.js'
const router = Router()

router.get('/gdp_growth', getGDP_Growth)
router.get('/gdp_pc', getGDP_PC)
router.get('/gdp_countries/:id', getGDPCountries)


export default router