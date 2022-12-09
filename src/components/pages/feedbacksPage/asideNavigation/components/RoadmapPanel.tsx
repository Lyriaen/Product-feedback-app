import {
    StyledRoadmapContainer ,
    StyledRoadmapHeading , StyledRoadmapOption ,
    StyledRoadmapOptionsContainer , TaskCounter ,
    ViewButton
} from "../AsideNavigation.styled";
import { NormalText , SmallHeading } from "../../../../common/common.styled";
import { roadmapOptions} from "../../../../../assets/consts";
import { useContext } from "react";
import { FeedbacksListContext } from "../../../../providers/FeedbacksListProvider";

export const RoadmapPanel = () => {
    const {feedbacksList} = useContext((FeedbacksListContext))
    const roadmapOptionsElementsList = []
    for (const option in roadmapOptions) {
        roadmapOptionsElementsList.push(
            <StyledRoadmapOption key={option} color={`${ roadmapOptions[ option ] }`}>
                <NormalText>{ option }</NormalText>
                <TaskCounter>{feedbacksList.getStatusCount(option.toLowerCase())}</TaskCounter>
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