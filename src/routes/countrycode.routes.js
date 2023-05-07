import { Router } from 'express'
import { getCountryCodes, getCountryCode} from '../controllers/countrycode.controllers.js'
const router = Router()

router.get('/countrycode', getCountryCodes)

router.get('/countrycode/:id', getCountryCode)

export default router