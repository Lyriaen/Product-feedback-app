import { StyledRadioInput , TagLabel } from "../AsideNavigation.styled";

export const TagContainer = ({tag}) => {
    return (
        <TagLabel as={'label'}>
            {tag}
            <StyledRadioInput name='tagOption'/>
        </TagLabel>
    )
}