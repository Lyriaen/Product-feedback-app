import { useEffect , useState } from 'react';
import { getProjectsList } from '../../../getData/getData';
import { ProjectsList } from './project.class';

export const ProjectsListPage = () => {

    const [projectsList, setProjectsList]= useState<ProjectsList | []>([])

    useEffect(() => {
        getProjectsList(setProjectsList)
    }, [])

    return (
        <ul>
            <li>cos tam</li>
            <li>hhhhhh</li>
        </ul>
    )
}