import { createContext , useEffect , useState } from "react";
import { getFeedbacksList } from "../../getData/getData";
import { useParams } from "react-router-dom";

export const FeedbacksListContext = createContext('')

export const FeedbacksListProvider = ({children}) => {
    const { feedbacksID } = useParams()
    const [feedbacksList, setFeedbacksList] = useState(null )
    useEffect(()=> {
        getFeedbacksList(setFeedbacksList, feedbacksID)
    }, [])
    return (
        <FeedbacksListContext.Provider value={{ feedbacksList , setFeedbacksList }}>
            {children}
        </FeedbacksListContext.Provider>
    )
}