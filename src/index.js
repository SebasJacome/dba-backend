import express from 'express'
import cors from 'cors'
import {config} from 'dotenv'
import countriesRoutes from './routes/countrycode.routes.js'
import gdpRoutes from './routes/gdp.routes.js'
import indexRoutes from './routes/index.routes.js'
import worldinfoRoutes from './routes/worldinfo.routes.js'

const app = express()

config()
const PORT = process.env.PORT || 3000

app.use(cors())

app.use(indexRoutes)
app.use('/api', countriesRoutes)
app.use('/api', gdpRoutes)
app.use('/api', worldinfoRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint Not found'
    })
})

app.listen(PORT)
console.log('Server on port', PORT)