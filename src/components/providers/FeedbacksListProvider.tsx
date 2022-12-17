import { createContext , useEffect , useState } from "react";
import { getFeedbacksList } from "../../getData/getData";
import { useParams } from "react-router-dom";
import { FeedbacksList } from "../pages/feedbacksPage/FeedbackList.class";

export const FeedbacksListContext = createContext('')

export const FeedbacksListProvider = ({children}) => {
    const { feedbacksID } = useParams()
    const [feedbacksList, setFeedbacksList] = useState(new FeedbacksList() )
    const [selectedTag, setSelectedTag] = useState('All')
    useEffect(()=> {
        getFeedbacksList(setFeedbacksList, selectedTag, feedbacksID)
    }, [])
    return (
        <FeedbacksListContext.Provider value={{
            feedbacksList,
            setFeedbacksList,
            selectedTag,
            setSelectedTag,
        }}>
            {children}
        </FeedbacksListContext.Provider>
    )
}