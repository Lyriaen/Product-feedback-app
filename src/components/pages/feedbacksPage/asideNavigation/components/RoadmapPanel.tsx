import {
    StyledRoadmapContainer ,
    StyledRoadmapHeading , StyledRoadmapOption ,
    StyledRoadmapOptionsContainer , TaskCounter ,
    ViewButton
} from "../AsideNavigation.styled";
import { NormalText , SmallHeading } from "../../../../common/common.styled";
import { roadmapOptions} from "../../../../../assets/consts";

export const RoadmapPanel = () => {
    const roadmapOptionsElementsList = []
    for (const option in roadmapOptions) {
        roadmapOptionsElementsList.push(
            <StyledRoadmapOption key={option} color={`${ roadmapOptions[ option ] }`}>
                <NormalText>{ option }</NormalText>
                <TaskCounter>0</TaskCounter>
            </StyledRoadmapOption>)
    }
    return (
        <StyledRoadmapContainer>
            <StyledRoadmapHeading>
                <SmallHeading>Roadmap</SmallHeading>
                <ViewButton to={'./roadmap'}>View</ViewButton>
            </StyledRoadmapHeading>
            <StyledRoadmapOptionsContainer>
                { roadmapOptionsElementsList }
            </StyledRoadmapOptionsContainer>
        </StyledRoadmapContainer>
    )
}