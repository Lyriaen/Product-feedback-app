import { BasicContainer } from "../../../../common/common.styled";
import { StyledForm } from "../AsideNavigation.styled";
import { tags } from "../../../../../assets/consts";
import { TagContainer } from "./TagContainer";
import { useContext } from "react";
import { FeedbacksListContext } from "../../../../providers/FeedbacksListProvider";

export const TagSelectPanel = () => {
    const {setSelectedTag} = useContext(FeedbacksListContext)
    const clickHandler = (event) => {
        if (event.target.tagName === 'LABEL'){
            setSelectedTag(event.target.innerText)
        }
    }
    return (
        <BasicContainer>
            <StyledForm onClick={clickHandler}>
                {tags.map(tag => {
                    return (
                        <TagContainer key={tag} tag={tag}/>
                    )
                })}
            </StyledForm>
        </BasicContainer>
    )
}