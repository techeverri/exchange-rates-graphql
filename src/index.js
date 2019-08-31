import { PORT } from "./config"
import app from "./server"

app.listen(PORT, () => {
  console.log(`🚀Server ready on port ${PORT}`)
})
