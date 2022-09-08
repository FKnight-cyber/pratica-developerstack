import { perguntas } from "@prisma/client";

export type IQuestionData = Omit<perguntas, "id">;
