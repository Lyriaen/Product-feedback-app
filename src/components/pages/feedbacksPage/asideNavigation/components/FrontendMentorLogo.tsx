import { StyledFrontendMentorLogo } from "../AsideNavigation.styled";
import { MediumHeading , SmallHeading , SmallText } from "../../../../common/common.styled";

export const FrontendMentorLogo = () => {
    return (
        <StyledFrontendMentorLogo>
            <MediumHeading style={{color: '#FFFFFF'}}>Frontend Mentor</MediumHeading>
            <SmallText style={{color: '#FFFFFF'}}>Feedback Board</SmallText>
        </StyledFrontendMentorLogo>
    )
}