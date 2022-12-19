import { StyledInput , StyledLabel } from "../Form.styled";
import { ExtraSmallHeading , SmallText } from "../../common/common.styled";

export const SelectInput = ({title, description, placeholder = ''}) => {
    return (
        <StyledLabel>
            <ExtraSmallHeading>{title}</ExtraSmallHeading>
            <SmallText>{description}</SmallText>
            <StyledInput type={'select'} placeholder={placeholder}/>
        </StyledLabel>
    )
}