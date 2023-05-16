import { Router } from 'express'
import { getEmploymentPercent_DC, getEmploymentPercent_BC} from '../controllers/employment.controllers.js'
const router = Router()

router.get('/employmentDC', getEmploymentPercent_DC)

router.get('/employmentBC', getEmploymentPercent_BC)

export default router