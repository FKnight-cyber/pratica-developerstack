import { prisma } from "../config/database"

import { IQuestionData } from "../types/questionTypes";

export async function createPergunta(question:IQuestionData) {
    await prisma.perguntas.create({ data:question });
}

export async function getPerguntas() {
    return prisma.perguntas.findMany();
}

export async function getAnswerByQuestionId(id:number){
    return prisma.perguntas.findFirst({
        where:{
            id
        },include:{
            questions: {
                where:{questionId:id},
                select:{
                    answeredBy:true,
                    answer:true
                }
            }
        }})
    ;
}