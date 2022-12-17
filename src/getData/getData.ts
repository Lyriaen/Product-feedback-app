import { collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore';
import { db } from '../api/firebase';
import { ProjectsList , Project} from '../components/pages/projectListPage/project.class';
import { FeedbacksList, Feedback } from "../components/pages/feedbacksPage/FeedbackList.class";

interface ProjectOne{
    ID:string;
    title:string;
    description:string;
    feedbackID:string
}

export const getProjectsList = (setProjectsList: (prev: ProjectsList) => void) => {
    const collectionRef = collection(db, 'projects');
    getDocs(collectionRef).then(querySnapshot => {

        const projectsListFromServer = querySnapshot.docs.map(doc => {
            return ({
                ...doc.data() ,
                ID: doc.id
            })
        }) as ProjectOne[]
        const newProjectsList = new ProjectsList()
        projectsListFromServer.forEach((project ) =>
            newProjectsList.addNewProject(new Project(project.ID, project.title, project.description, project.feedbackID)) )
        setProjectsList(newProjectsList)
    })

}

export const getFeedbacksList = (setFeedbacksList, selectedTag, feedbackID) => {
    if (selectedTag === 'All') {
        getAllFeedbacks(setFeedbacksList, feedbackID)
        return;
    }
}

const getAllFeedbacks = (setFeedbacksList, projectID) => {
    const feedbacksRef = collection(db, `projects/${projectID}/feedbacks`);
    getDocs(feedbacksRef).then(querysnapshot => {
        const newFeedbacksList = new FeedbacksList();
        querysnapshot.docs.map( feedbackData => {
            const feedback = feedbackData.data();
            newFeedbacksList.addNewFeedback( new Feedback(
                feedback.title ,
                feedback.description ,
                feedback.status ,
                feedback.commentsCount ,
                feedback.tag ,
                feedback.upvotes ,
                feedback.id ,
            ) )
        } )
        setFeedbacksList( newFeedbacksList );
    })
}