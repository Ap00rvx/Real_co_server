const express = require('express')
const app = express()
const connectDatabase = require('./config/database.connection')
const cors  = require('cors')
const dotenv = require('dotenv')



const clientRoutes = require('./routes/client.routes')
const servicesRoutes = require('./routes/services.routes')
const projectRoutes = require('./routes/project.routes')
const userRoutes = require('./routes/user.routes')
const statsRoutes = require('./routes/stats.routes')
const visitorRoutes  = require('./routes/visitor.routes')
const generalRoutes = require('./routes/general.routes')


dotenv.config()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

connectDatabase(process.env.DATABASE_URL, process.env.DATABASE_NAME);

app.use('/api/user', userRoutes)
app.use('/api/service', servicesRoutes)
app.use('/api/client', clientRoutes)
app.use('/api/stats', statsRoutes)
app.use('/api/project', projectRoutes)
app.use("/api/visitor",visitorRoutes); 
app.use('/api/general', generalRoutes)





app.listen(port, () => console.log(`App listening on port ${port}!`))

