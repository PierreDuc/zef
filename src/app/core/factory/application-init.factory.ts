import {QuestionDataService} from '../service/question-data.service';

export function applicationInit(questionService: QuestionDataService): () => Promise<void> {
  return () => questionService.loadQuestions();
}
