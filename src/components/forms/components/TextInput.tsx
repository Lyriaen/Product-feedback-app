import { StyledInput, StyledLabel } from "../Form.styled";
import { ExtraSmallHeading , SmallText } from "../../common/common.styled";

export const TextInput = ({title, description = '', placeholder = ''}) => {
    return (
        <StyledLabel>
            <ExtraSmallHeading>{title}</ExtraSmallHeading>
            <SmallText>{description}</SmallText>
            <StyledInput type={'text'} placeholder={placeholder}/>
        </StyledLabel>
    )
}