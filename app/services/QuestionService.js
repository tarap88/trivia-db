import { AppState } from "../AppState.js";
import { Question } from "../models/Trivia.js"




class QuestionsService {

    async getQuestions() {
        console.log('question loading');
        const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
        console.log('fetch works');
    }


}










export const questionService = new QuestionsService()