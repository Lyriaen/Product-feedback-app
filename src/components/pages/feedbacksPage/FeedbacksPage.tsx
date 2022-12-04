import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { ColumnContainer , Container } from "./FeedbacksPage.styled";
import { AsideNavigation } from "./asideNavigation/AsideNavigation";
import { FeedbacksHeader } from "./feedbacksHeader/FeedbacksHeader";
import { FeedbacksContainer } from "./feedbacksList/FeedbacksContainer";


export const FeedbacksPage = () => {
    const [feedbacksList, setFeedbacksList] = useState(null)
    const { feedbacksID } = useParams()
    console.log(feedbacksID)
    return(
        <Container>
            <AsideNavigation/>
            <ColumnContainer>
                <FeedbacksHeader/>
                <FeedbacksContainer/>
            </ColumnContainer>
        </Container>
    )
}