import { Request, Response } from 'express';
import * as questionServices from '../services/questionService'
import * as answerServices from "../services/answerService";

export async function createQuestion(req: Request, res: Response) {
  const { askedBy, question } : { askedBy:string, question:string } = req.body;

  await questionServices.createPergunta(askedBy,question);

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const { answeredBy, answer } : { answeredBy:string, answer:string } = req.body;
  const id:number = Number(req.params.id);

  await answerServices.createAnswer(answeredBy,answer,id);

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {

  const questions = await questionServices.getPerguntas();
  
  res.status(200).send({questions:questions})
}

export async function getById(req: Request, res: Response) {
  const id = Number(req.params.id);

  const question = await questionServices.getPerguntaById(id);

  return res.status(200).send(question)
}
