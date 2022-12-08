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

export const Feedback = ({feedback}) => {
    const [isUpvoted, setIsUpvoted] = useState(false)
    return (
        <StyledFeedback>
            <UpvoteCounter>
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33447 6L5.33447 2L9.33447 6" strokeWidth="2"/>
                </svg>
                { feedback.upvotes }
                <UpvoteCheckbox checked={isUpvoted} onChange={e=>setIsUpvoted(prevState => !prevState)}/>
            </UpvoteCounter>
            <StyledFeedbackDetails>
                <SmallHeading>{ feedback.title }</SmallHeading>
                <NormalText>{ feedback.description }</NormalText>
                <TagDiv>{ feedback.tag }</TagDiv>
            </StyledFeedbackDetails>
            <StyledCommentsInfo>
                <img src={comment}/>
                <p>{ feedback.commentsCount }</p>
            </StyledCommentsInfo>
        </StyledFeedback>
    )
}