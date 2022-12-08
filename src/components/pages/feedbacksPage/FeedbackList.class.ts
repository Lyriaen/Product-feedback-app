import { Project } from "../projectListPage/project.class";

export class Feedback {
    constructor(
        private title: string,
        private description: string,
        private status: string,
        private commentsID: string,
        private commentsCount: number,
        private tag: string,
        private upvotes: number,
        private ID: string,
    ) { }
    get getStatus(){
        return this.status
    }
}

export class FeedbacksList {
    private feedbacksList: Feedback[] = []
    addNewFeedback(feedback: Feedback) {
        this.feedbacksList.push(feedback);
    }
    checkIfEmpty(){
        return !this.feedbacksList.length;
    }
    get getSuggestionsList(){
        return this.feedbacksList.filter(feedback => feedback.getStatus === 'suggestion');
    }
    get getSuggestionsCount(){
        return this.getStatusCount('suggestion')
    }
    private getStatusCount(status){
        return this.feedbacksList.reduce((sum, feedback) => {
            return feedback.getStatus === status ? ++sum : sum;
        },0)
    }
}