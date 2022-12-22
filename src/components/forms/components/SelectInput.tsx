import {
    StyledInput ,
    StyledLabel ,
    StyledOptionItem ,
    StyledOptionsList ,
    StyledSelectInput
} from "../Form.styled";
import { ExtraSmallHeading , SmallText } from "../../common/common.styled";
import { useState } from "react";

export const SelectInput = ({title, description, options}) => {
    const [selectedValue, setSelectedValue] = useState('')
    const [showOptions, setShowOptions] = useState(false)
    return (
        <StyledLabel onClick={(event) => {
            event.stopPropagation()
            event.preventDefault()
            setShowOptions(prev => !prev)
        }}>
            <ExtraSmallHeading>{title}</ExtraSmallHeading>
            <SmallText>{description}</SmallText>
            <StyledSelectInput as={'div'}>
                <StyledInput value={selectedValue} style={{userSelect: "none"}} readOnly={true}/>
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" data-show={showOptions}>
                    <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" strokeWidth="2" />
                </svg>
            </StyledSelectInput>
            { showOptions &&
                <StyledOptionsList>
                    { options.map( option =>
                        <StyledOptionItem key={ option } value={ option } onClick={ () => setSelectedValue( option ) }>
                            { option }
                            { option === selectedValue &&
                                <svg width="13" height="11" viewBox="0 0 13 11" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.23287L4.52154 9L12 1" stroke="#AD1FEA" strokeWidth="2"/>
                                </svg> }
                        </StyledOptionItem>
                    ) }
                </StyledOptionsList>
            }
        </StyledLabel>
    )
}