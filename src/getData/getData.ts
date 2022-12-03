import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../api/firebase';
import { ProjectsList , Project} from "../components/pages/projectListPage/projectClass";

export const getProjectsList = (setProjectsList: (prev: ProjectsList) => void) => {
    const collectionRef = collection(db, 'projects');
    getDocs(collectionRef).then(querySnapshot => {
        const projectsListFromServer = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            ID: doc.id
        }))
        const projectsList = new ProjectsList()
        projectsListFromServer.map((project) =>
            projectsList.addNewProject(new Project(project.ID, project.title, project.description, project.feedbackID)) )
    })
}