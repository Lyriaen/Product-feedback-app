import { BasicContainer } from "../../../../common/common.styled";
import { StyledForm } from "../AsideNavigation.styled";
import { tags } from "../../../../../assets/consts";
import { TagContainer } from "./TagContainer";

export const TagSelectPanel = () => {
    return (
        <BasicContainer>
            <StyledForm>
                {tags.map(tag => {
                    return (
                        <TagContainer key={tag} tag={tag}/>
                    )
                })}
            </StyledForm>
        </BasicContainer>
    )
}