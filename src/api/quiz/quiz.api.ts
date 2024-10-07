import { QuizAdapter } from "./domain/quiz.adapter";

const useApiMock = process.env.NEXT_PUBLIC_USE_MOCK;
const selectedStrategy = useApiMock ? QuizAdapter.mock : QuizAdapter.http;

export { selectedStrategy as QuizApi };
