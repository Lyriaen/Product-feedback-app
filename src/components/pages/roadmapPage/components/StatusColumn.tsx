import { StyledStatusColumn } from "../RoadmapPage.styled";
import { useContext } from "react";
import { FeedbacksListContext } from "../../../providers/FeedbacksListProvider";
import { NormalText , SmallHeading } from "../../../common/common.styled";
import { StatusArticle } from "./StatusArticle";

export const StatusColumn = ({settings, status}) => {
    const {feedbacksList} = useContext((FeedbacksListContext))
    return (
        <StyledStatusColumn>
            <header>
                <SmallHeading>{status} ({feedbacksList.getStatusCount(status)})</SmallHeading>
                <NormalText>{settings.description}</NormalText>
            </header>
            {feedbacksList.getStatusFeedbackList(status).map((feedback, index) =>
                <StatusArticle key={status + '-' + index} feedback={feedback} color={settings.color}/>
            )}
        </StyledStatusColumn>
    )
}