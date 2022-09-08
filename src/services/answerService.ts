import * as answerMethods from "../repositories/answerRepository"

export async function createAnswer(answeredBy:string, answer:string, id:number){

    const myAnswer = {
        answeredBy,
        answer,
        questionId:id
    }

    await answerMethods.createAnswer(myAnswer);
}