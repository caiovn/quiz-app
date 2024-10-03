import { QuizAdapter } from "./domain/quiz.adapter";

const useApiMock = true;
const selectedStrategy = useApiMock ? QuizAdapter.mock : QuizAdapter.http;

export { selectedStrategy as QuizApi };
