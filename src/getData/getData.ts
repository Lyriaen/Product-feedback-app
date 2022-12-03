import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../api/firebase';
import { ProjectsList , Project} from '../components/pages/projectListPage/project.class';

interface ProjectOne{
    ID:string;
    title:string;
    description:string;
    feedbackID:string
}

export const getProjectsList = (setProjectsList: (prev: ProjectsList) => void) => {
    const collectionRef = collection(db, 'projects');
    getDocs(collectionRef).then(querySnapshot => {
        const projectsListFromServer = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            ID: doc.id
        } )) as ProjectOne[]
        console.log(projectsListFromServer)
        const newProjectsList = new ProjectsList()
        projectsListFromServer.forEach((project ) =>
            newProjectsList.addNewProject(new Project(project.ID, project.title, project.description, project.feedbackID)) )
        setProjectsList(newProjectsList)
    })
}