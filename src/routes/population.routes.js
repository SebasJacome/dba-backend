import { Router } from 'express'
import { getPopulation_LifeExpectancy, getPopulation_BirthDeath_OrderByBirth, getPopulation_BirthDeath_OrderByDeath } from '../controllers/population.controllers.js'
const router = Router()

router.get('/populationLife', getPopulation_LifeExpectancy)

router.get('/populationBiDeOrderBirth', getPopulation_BirthDeath_OrderByBirth)

router.get('/populationBiDeOrderDeath', getPopulation_BirthDeath_OrderByDeath)

export default router