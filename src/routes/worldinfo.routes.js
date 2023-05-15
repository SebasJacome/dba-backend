import { Router } from 'express'
import { getPopulation, getSurfaceArea} from '../controllers/worldinfo.controllers.js'
const router = Router()

router.get('/population', getPopulation)

router.get('/surfacearea', getSurfaceArea)

router.get('/gdp', getGDP)

router.get('/employment', getEmployment)

export default router