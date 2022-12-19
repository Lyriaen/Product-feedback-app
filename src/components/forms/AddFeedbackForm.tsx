import { FormContainer } from "./components/FormContainer";
import { TextInput } from "./components/TextInput";
import { SelectInput } from "./components/SelectInput";
import { TextArea } from "./components/TextArea";
import { BlueButton , RedButton , VioletButton } from "../common/common.styled";
import { ButtonsContainer } from "./Form.styled";

export const AddFeedbackForm = () => {
    return (
        <FormContainer title={'create new feedback'}>
            <TextInput
                title={'Feedback Title'}
                description={'Add a short, descriptive headline'}
            />
            <SelectInput
                title={'Category'}
                description={'Choose a category for your feedback'}
            />
            <TextArea
                title={'Feedback Detail'}
                description={'Include any specific comments on what should be improved, added, etc.'}
            />

                <ButtonsContainer>
                    <BlueButton>Cancel</BlueButton>
                    <VioletButton>Add Feedback</VioletButton>
                </ButtonsContainer>

        </FormContainer>
    )}