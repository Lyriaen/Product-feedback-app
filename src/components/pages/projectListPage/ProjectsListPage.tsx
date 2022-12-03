import { useEffect , useState } from "react";
import { getProjectsList } from "../../../getData/getData";
import { Project } from "./projectClass";

export const ProjectsListPage = () => {

    const [projectsList, setProjectsList]= useState<Project[]>([])

    useEffect(() => {
        getProjectsList(setProjectsList)
    }, [])
    console.log(projectsList)
    return (
        <ul>
            <li>cos tam</li>
            <li>hhhhhh</li>
        </ul>
    )
}