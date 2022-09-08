import * as questionMethods from "../repositories/questionRepository";

export async function createPergunta(askedBy:string, question:string) {

    const pergunta = {
        askedBy,
        question
    }

    await questionMethods.createPergunta(pergunta);
}

export async function getPerguntas(){
    return await questionMethods.getPerguntas();
}

export async function getPerguntaById(id:number){
    const pergunta = await questionMethods.getAnswerByQuestionId(id);

    
    return pergunta
}
