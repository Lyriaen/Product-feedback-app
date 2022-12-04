import { StyledLabel , StyledSelect , StyledSortOptionsSelect } from "./FeedbacksHeader.styled";

export const SortOptionsSelect = () => {
    return (
        <StyledSortOptionsSelect>
            <StyledLabel htmlFor='sort' >Sort by :
                <StyledSelect name='sort' id='sort'>
                    <option value='most-upvote'>Most Upvote</option>
                    <option value='least-upvote'>Least Upvote</option>
                    <option value='most-comments'>Most Comments</option>
                    <option value='least-comments'>Least Comments</option>
                </StyledSelect>
            </StyledLabel>
        </StyledSortOptionsSelect>
    )
}