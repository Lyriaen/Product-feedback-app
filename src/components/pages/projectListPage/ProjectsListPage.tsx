import { useEffect , useState } from 'react';
import { getProjectsList } from '../../../getData/getData';
import { ProjectsList } from './project.class';
import { MediumHeading , NormalText } from "../../common/common.styled";
import { StyledUL, StyledLI } from "./ProjectsList.styled";

export const ProjectsListPage = () => {

    const [projectsList, setProjectsList]= useState<ProjectsList | null>(null)

    useEffect(() => {
        getProjectsList(setProjectsList)
    }, [])
    console.log(projectsList)

    return (
        <StyledUL>
            {projectsList && projectsList.getProjectsList.map(project => {
                const {ID, title, description, feedbackID} = project.getProject
                return (
                    <StyledLI key={ID} data-id={ID} data-feedbackid={feedbackID}>
                        <MediumHeading>{ title }</MediumHeading>
                        <NormalText>{ description }</NormalText>
                    </StyledLI>)
            })}
        </StyledUL>
    )
}