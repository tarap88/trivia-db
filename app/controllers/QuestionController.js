import { AppState } from "../AppState.js";
import { questionService } from "../services/QuestionService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class QuestionsController {
    constructor() {
        console.log('controller loaded');
        this.drawQuestions
        AppState.on('questions', this.drawQuestions)
    }

    drawQuestions() {
        console.log('draw questions success');
        const questions = AppState.questions
        let triviaContent = ''
        questions.forEach(question => triviaContent += question.TriviaCard)
        setHTML('trivia-content', triviaContent)

    }

    getQuestions() {
        questionService.getQuestions()
        this.drawQuestions
    }




}















