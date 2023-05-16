import { Router } from 'express'
import { getGeography_SurfaceArea, getGeography_PopDensity } from '../controllers/geography.controllers.js'
const router = Router()

router.get('/geographySurfaceArea', getGeography_SurfaceArea)

router.get('/geographyPopDensity', getGeography_PopDensity)

export default router