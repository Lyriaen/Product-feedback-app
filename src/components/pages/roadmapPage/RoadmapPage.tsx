import { useContext } from 'react';
import { FeedbacksListContext } from '../../providers/FeedbacksListProvider';
import { RoadmapPageHeader } from "./components/RoadmapPageHeader";

export const RoadmapPage = () => {
    const {feedbacksList} = useContext((FeedbacksListContext))
    return (
        <RoadmapPageHeader/>
    )
}