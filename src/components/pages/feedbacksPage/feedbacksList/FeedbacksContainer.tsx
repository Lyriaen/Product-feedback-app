import { EmptyList } from "./components/EmptyList";
import { Feedback } from "./components/Feedback";
import { useContext } from "react";
import { FeedbacksListContext } from "../../../providers/FeedbacksListProvider";

export const FeedbacksContainer = () => {
    const {feedbacksList} = useContext((FeedbacksListContext))
    console.log(feedbacksList)
    return (
        <>
            {feedbacksList.checkIfEmpty() ?
                <EmptyList/> :
                feedbacksList.getSuggestionsList.map((feedback, index) => <Feedback key={index} feedback={feedback}/>)
            }
        </>


    )
}