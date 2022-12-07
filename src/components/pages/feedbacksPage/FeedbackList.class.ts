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
}

export class FeedbacksList {
    private feedbacksList: Feedback[] = []
    addNewFeedback(feedback: Feedback) {
        this.feedbacksList.push(feedback)
    }
}