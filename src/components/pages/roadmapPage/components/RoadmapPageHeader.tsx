import { StyledRoadmapPageHeader } from "../RoadmapPage.styled";
import { GoBackButton } from "../../../common/GoBackButton";
import { BigHeading , VioletButton } from "../../../common/common.styled";

export const RoadmapPageHeader = () => {
    return <StyledRoadmapPageHeader>
        <div>
            <GoBackButton/>
            <BigHeading style={{color: '#FFF',}}>Roadmap</BigHeading>
        </div>
        <VioletButton>+ Add Feedback</VioletButton>
    </StyledRoadmapPageHeader>
}