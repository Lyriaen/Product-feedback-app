import { StyledRadioInput , TagLabel } from "../AsideNavigation.styled";
import { useContext } from "react";
import { FeedbacksListContext } from "../../../../providers/FeedbacksListProvider";

export const TagContainer = ({tag}) => {
    const {selectedTag} = useContext(FeedbacksListContext)
    return (
        <TagLabel as={'label'}>
            {tag}
            <StyledRadioInput name='tagOption' defaultChecked={selectedTag === tag}/>
        </TagLabel>
    )
}