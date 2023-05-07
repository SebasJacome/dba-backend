import {createPool} from 'mysql2/promise'

import {config} from 'dotenv'

config();

export const pool = createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: 'worlddata',
})
