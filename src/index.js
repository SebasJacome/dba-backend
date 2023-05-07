import express from 'express'

import countriesRoutes from './routes/countrycode.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()


app.use(indexRoutes)
app.use('/api', countriesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint Not found'
    })
})

app.listen(3000)
console.log('Server on port 3000')