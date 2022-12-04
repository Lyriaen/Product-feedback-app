import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { ColumnContainer , Container } from "./FeedbacksPage.styled";
import { AsideNavigation } from "./asideNavigation/AsideNavigation";
import { FeedbacksHeader } from "./feedbacksHeader/FeedbacksHeader";


export const FeedbacksPage = () => {
    const [feedbacksList, setFeedbacksList] = useState(null)
    const { feedbacksID } = useParams()
    console.log(feedbacksID)
    return(
        <Container>
            <AsideNavigation/>
            <ColumnContainer>
                <FeedbacksHeader/>
            </ColumnContainer>
        </Container>
    )
}