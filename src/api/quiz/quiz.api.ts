import { QuizAdapter } from "./domain/quiz.adapter";

const useApiMock = process.env.NEXT_PUBLIC_USE_MOCK;
console.log("public", useApiMock);
console.log("env", process.env.NEXT_PUBLIC_ENV);
const selectedStrategy = useApiMock ? QuizAdapter.mock : QuizAdapter.http;

export { selectedStrategy as QuizApi };
