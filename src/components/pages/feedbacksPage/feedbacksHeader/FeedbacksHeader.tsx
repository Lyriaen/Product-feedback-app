import { StyledFeedbacksHeader } from "./FeedbacksHeader.styled";
import { FeedbacksHeaderLogo } from "./FeedbacksHeaderLogo";
import { VioletButton } from "../../../common/common.styled";
import { SortOptionsSelect } from "./SortOptionsSelect";

export const FeedbacksHeader = () => {
    return (
        <StyledFeedbacksHeader>
            <FeedbacksHeaderLogo/>
            <SortOptionsSelect/>
            <VioletButton>+ Add Feedback</VioletButton>
        </StyledFeedbacksHeader>
    )
}