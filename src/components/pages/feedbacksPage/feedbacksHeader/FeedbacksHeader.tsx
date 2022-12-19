import { StyledFeedbacksHeader } from "./FeedbacksHeader.styled";
import { FeedbacksHeaderLogo } from "./FeedbacksHeaderLogo";
import { VioletButton } from "../../../common/common.styled";
import { SortOptionsSelect } from "./SortOptionsSelect";
import { Link } from "react-router-dom";

export const FeedbacksHeader = () => {
    return (
        <StyledFeedbacksHeader>
            <FeedbacksHeaderLogo/>
            <SortOptionsSelect/>
            <VioletButton as={Link} to={'./addFeedback'}>+ Add Feedback</VioletButton>
        </StyledFeedbacksHeader>
    )
}