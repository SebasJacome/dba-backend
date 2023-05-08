import { Router } from 'express'
import { getGDP_Growth, getGDP_PC, getGDPCountries } from '../controllers/gdp.controllers.js'
const router = Router()

router.get('/gdp_growth', getGDP_Growth)
router.get('/gdp_pc', getGDP_PC)
router.get('/gdp_countries', getGDPCountries)


export default router