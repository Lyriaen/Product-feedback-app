import { StyledFeedbacksHeaderLogo } from "./FeedbacksHeader.styled";
import bulb from '../../../../img/bulb.svg'
import { SmallHeading } from "../../../common/common.styled";

export const FeedbacksHeaderLogo = () => {
    return (
        <StyledFeedbacksHeaderLogo>
            <img src={bulb}/>
            <SmallHeading style={ { color: '#ffffff' }}>0 Suggestions</SmallHeading>
        </StyledFeedbacksHeaderLogo>
    )
}