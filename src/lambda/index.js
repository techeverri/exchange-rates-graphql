import serverless from "serverless-http"
import app from "../server"

export default {
  handler: serverless(app),
}
