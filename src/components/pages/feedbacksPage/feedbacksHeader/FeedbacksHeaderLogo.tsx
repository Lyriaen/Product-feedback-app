import { StyledFeedbacksHeaderLogo } from "./FeedbacksHeader.styled";
import bulb from '../../../../img/bulb.svg'
import { SmallHeading } from "../../../common/common.styled";
import { useContext } from "react";
import { FeedbacksListContext } from "../../../providers/FeedbacksListProvider";

export const FeedbacksHeaderLogo = () => {
    const {feedbacksList} = useContext((FeedbacksListContext))
    return (
        <StyledFeedbacksHeaderLogo>
            <img src={bulb}/>
            <SmallHeading style={ { color: '#ffffff' }}>{ feedbacksList.getSuggestionsCount } Suggestions</SmallHeading>
        </StyledFeedbacksHeaderLogo>
    )
}