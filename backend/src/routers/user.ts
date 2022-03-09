import express, { Request, Response, NextFunction } from 'express'
import https from 'https'

import {
  NotFoundError,
  BadRequestError,
  InternalServerError,
} from '../helpers/apiError'

const router = express.Router()

// Get repos
router.get(
  '/github/profile/:username/repos', 
  async (req: Request, res: Response, next: NextFunction) => {
    const pageSize = Number(req.query.per_page)
    const user = req.params.username
    const options = {
      hostname: 'api.github.com',
      path: `/users/${user}/repos?per_page=${pageSize}`,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
      pageSize,
      OAuth: process.env.GITHUB_ACCESS_TOKEN,
    }
    https
      .get (options, function (response) {
        response.pipe(res)
      })
      .on('error', (err) => {
        next(new InternalServerError(err.message))
      })
  }
)

// Get gists
router.get(
  '/github/profile/:username/gists', 
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.params.username
    
    const options = {
      hostname: 'api.github.com',
      path: `/users/${user}/gists`,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
      OAuth: process.env.GITHUB_ACCESS_TOKEN,
    }
    https
      .get(options, function (response) {
        response.pipe(res)
      })
      .on('error', (err) => {
        next(new InternalServerError(err.message))
      })
  }
)

// Get organizations
router.get(
  '/github/profile/:username/orgs', 
  async (req: Request, res: Response, next: NextFunction) => {
    const user = req.params.username
    const options = {
      hostname: 'api.github.com',
      path: `/users/${user}/orgs`,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
      OAuth: process.env.GITHUB_ACCESS_TOKEN,
    }
    https
      .get(options, function (response) {
        response.pipe(res)
      })
      .on('error', (err) => {
        next(new InternalServerError(err.message))
      })
  }
)


export default router;
