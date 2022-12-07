import { ColumnContainer , Container } from "./FeedbacksPage.styled";
import { AsideNavigation } from "./asideNavigation/AsideNavigation";
import { FeedbacksHeader } from "./feedbacksHeader/FeedbacksHeader";
import { FeedbacksContainer } from "./feedbacksList/FeedbacksContainer";
import { FeedbacksListProvider } from "../../providers/FeedbacksListProvider";

export const FeedbacksPage = () => {
    return(
        <Container>
            <FeedbacksListProvider>
                <AsideNavigation/>
                <ColumnContainer>
                    <FeedbacksHeader/>
                    <FeedbacksContainer/>
                </ColumnContainer>
            </FeedbacksListProvider>
        </Container>
    )
}