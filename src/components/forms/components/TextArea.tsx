import { StyledInput , StyledLabel } from "../Form.styled";
import { ExtraSmallHeading , SmallText } from "../../common/common.styled";

export const TextArea = ({title, description, placeholder = ''}) => {
    return (
        <StyledLabel>
            <ExtraSmallHeading>{title}</ExtraSmallHeading>
            <SmallText>{description}</SmallText>
            <StyledInput as={'textarea'} placeholder={placeholder}/>
        </StyledLabel>
    )
}