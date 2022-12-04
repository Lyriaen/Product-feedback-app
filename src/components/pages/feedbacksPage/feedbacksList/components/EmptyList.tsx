import { EmptyListContainer , FeedbackContainer } from "../FeedbacksContainer.styled";
import { BasicContainer , BigHeading , NormalText , VioletButton } from "../../../../common/common.styled";
import detective from '../../../../../img/detective.svg'
export const EmptyList = () => {
    return (
        <EmptyListContainer>
            <img src={detective}/>
            <BigHeading>There is no feedback yet.</BigHeading>
            <NormalText>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</NormalText>
            <VioletButton>+ Add Feedback</VioletButton>
        </EmptyListContainer>
    )
}