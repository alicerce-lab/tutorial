/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import logger from 'jet-logger';

import 'express-async-errors';

import BaseRouter from '@src/routes/api';
import Paths from '@src/constants/Paths';

import EnvVars from '@src/constants/EnvVars';
import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import { NodeEnvs } from '@src/constants/misc';
import { RouteError } from '@src/other/classes';


// **** Variables **** //

const app = express();


// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(EnvVars.CookieProps.Secret));

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan('dev'));
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet());
}

// Add APIs, must be after middleware
// app.use(Paths.Base, BaseRouter);

// Add error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
    logger.err(err, true);
  }
  let status = HttpStatusCodes.BAD_REQUEST;
  if (err instanceof RouteError) {
    status = err.status;
  }
  return res.status(status).json({ error: err.message });
});


// ** Front-End Content ** //

// Set views directory (html)
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Nav to users pg by default
// app.get('/', (_: Request, res: Response) => {
//   return res.redirect('/users');
// });

// Redirect to login if not logged in.
// app.get('/users', (_: Request, res: Response) => {
//   return res.sendFile('users.html', { root: viewsDir });
// });

/// Pode mexer daqui pra baixo

app.get('/api/carros/:id', (req, res) => {
  logger.info(JSON.stringify({ body: req.body, path: req.params, query: req.query }))
  res.json(
    {
      message: 'ola mundo',
      body: req.body, 
      params: req.params, 
      query: req.query
    }
  )
})

app.get('/api/getCube/:num', (req, res) => {
  const num = Number(req.params.num)
  res.json({
    result: num * num
  })
})

app.get('/api/getconta/:saldo', (req, res) => {
  const saldo= Number(req.params.saldo)
  const result = (saldo + 10)/2
  if (result > 7) {
  
    res.json({
      mensagem: "Aprovado!!",
      result: result
    });
  } else {
  
    res.json({
      mensagem: "Reprovado",
      result: result
    });
  }
});

app.get('/api/getPrimeiraMensagem', (req,res) => {
  logger.info(JSON.stringify({ body: req.body, path: req.params, query: req.query }))
  res.json(
    {
      message: 'Get feito por Jamerson',
      body: req.body, 
      params: req.params, 
      query: req.query
    }
  )
})

app.get('/api/getSomeDouble/:num1', (req, res) => {
  const num1 = Number(req.params.num1);

  if (isNaN(num1)) {
    console.log("Você colocou letras ou palavras, somente números são permitidos");
    res.status(400).json({
      error: "Entrada inválida. Por favor, forneça um número válido."
    });
  } else {
    const result = num1 + (2 * num1);
    res.json({
      result: result
    });
  }
});




/// pode mexer daqui pra cima

// **** Export default **** //

export default app;
