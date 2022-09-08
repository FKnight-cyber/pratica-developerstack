import { prisma } from "../config/database";
import { IAnswerData } from "../types/answerTypes";

export async function findQuestionById(id:number) {
    return await prisma.perguntas.findFirst({where:{id}});
}

export async function createAnswer(answer:IAnswerData) {
    await prisma.questions.create({data:answer});
}

