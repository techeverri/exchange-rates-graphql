import rateLimit from "express-rate-limit"
import HttpStatus from "http-status-codes"
import jsonwebtoken from "jsonwebtoken"
import { JWT_SECRET_KEY } from "./config"

const BEARER_TOKEN_PREFIX = "Bearer "

export const ensureValidToken = (req, res, next) => {
  if (req.method === "POST") {
    let token = req.headers.authorization || ""

    if (token.startsWith(BEARER_TOKEN_PREFIX)) {
      token = token.slice(BEARER_TOKEN_PREFIX.length)

      try {
        req.token = jsonwebtoken.verify(token, JWT_SECRET_KEY)
      } catch (exception) {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ error: "Invalid token." })
      }
    } else {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ error: "Must authenticate." })
    }
  }

  next()
}

export const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30,
  keyGenerator: (req, res) => {
    if (req.method === "POST") {
      return req.token.jti
    }

    return req.ip
  },
  handler: (req, res, next) =>
    res
      .status(HttpStatus.TOO_MANY_REQUESTS)
      .json({ error: "Too many requests, please try again later." }),
})
