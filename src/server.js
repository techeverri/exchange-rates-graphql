import { ApolloServer } from "apollo-server-express"
import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import HttpStatus from "http-status-codes"
import jsonwebtoken from "jsonwebtoken"
import uuid from "uuid/v4"
import { CORS_ORIGIN_HEADER, JWT_SECRET_KEY } from "./config"
import dataSources from "./datasources"
import { ensureValidToken, rateLimiter } from "./middlewares"
import resolvers from "./resolvers"
import typeDefs from "./schema"

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.get("/ping", function ping(req, res) {
  return res.send("pong")
})

app.post("/login", function loginHandler(req, res) {
  const payload = { userId: uuid() }
  const options = { jwtid: uuid() }
  const token = jsonwebtoken.sign(payload, JWT_SECRET_KEY, options)

  return res.status(HttpStatus.OK).json({ token: token })
})

app.use("/graphql", ensureValidToken, rateLimiter)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
})

server.applyMiddleware({ app })

export default app
