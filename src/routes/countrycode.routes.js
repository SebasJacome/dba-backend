import { Router } from 'express'

const router = Router()

router.get('/countrycode', (req, res) => res.send('Obteniendo Country Codes'))

export default router