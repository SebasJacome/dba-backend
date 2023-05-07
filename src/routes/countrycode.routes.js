import { Router } from 'express'
import { getCountryCodes } from '../controllers/countrycode.controllers.js'
const router = Router()

router.get('/countrycode', getCountryCodes)

export default router