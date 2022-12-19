import { ExtraSmallHeading , SmallText } from "../../common/common.styled";
import { StyledInput , StyledLabel } from "../Form.styled";

export const PasswordInput = ({title}) => {
    return (
        <StyledLabel>
            <ExtraSmallHeading>{title}</ExtraSmallHeading>
            <StyledInput type={'password'}/>
        </StyledLabel>
    )
}