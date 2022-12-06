import {
    StyledCommentsInfo ,
    StyledFeedback ,
    StyledFeedbackDetails , UpvoteCheckbox ,
    UpvoteCounter
} from "../FeedbacksContainer.styled";
import { SmallHeading , NormalText } from "../../../../common/common.styled";
import { TagDiv } from "../../asideNavigation/AsideNavigation.styled";
import comment from "../../../../../img/comment.svg"
import { useState } from "react";

export const Feedback = () => {
    const [isUpvoted, setIsUpvoted] = useState(true)
    return (
        <StyledFeedback>
            <UpvoteCounter>
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33447 6L5.33447 2L9.33447 6" stroke-width="2"/>
                </svg>
                112
                <UpvoteCheckbox checked={isUpvoted} onChange={e=>setIsUpvoted(prevState => !prevState)}/>
            </UpvoteCounter>
            <StyledFeedbackDetails>
                <SmallHeading>Add tags for solutions</SmallHeading>
                <NormalText>Easier to search for solutions based on a specific stack.</NormalText>
                <TagDiv>Feature</TagDiv>
            </StyledFeedbackDetails>
            <StyledCommentsInfo>
                <img src={comment}/>
                <p>2</p>
            </StyledCommentsInfo>
        </StyledFeedback>
    )
}