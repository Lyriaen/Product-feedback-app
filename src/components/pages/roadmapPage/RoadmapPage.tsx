import { RoadmapPageHeader } from "./components/RoadmapPageHeader";
import { StyledRoadmapPage , StyledStatusColumnsContainer } from "./RoadmapPage.styled";
import { roadmapOptions } from "../../../assets/consts";
import { StatusColumn } from "./components/StatusColumn";

export const RoadmapPage = () => {
    const statusColumns = []
    for (const option in roadmapOptions) {
        statusColumns.push(
            <StatusColumn key={option} settings={roadmapOptions[option]} status={option}/>
                )
    }
    return (
        <StyledRoadmapPage>
            <RoadmapPageHeader/>
            <StyledStatusColumnsContainer>
                {statusColumns}
            </StyledStatusColumnsContainer>
        </StyledRoadmapPage>

    )
}