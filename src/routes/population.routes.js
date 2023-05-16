import { Router } from 'express'
import { getPopulation_LifeExpectancy, getPopulation_BirthDeath } from '../controllers/population.controllers.js'
const router = Router()

router.get('/populationLife', getPopulation_LifeExpectancy)

router.get('/populationBiDe', getPopulation_BirthDeath)

export default router