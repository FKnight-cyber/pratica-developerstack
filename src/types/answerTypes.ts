import { questions } from "@prisma/client";

export type IAnswerData = Omit<questions, "id">;