import { FormContainer } from "./components/FormContainer";
import { TextInput } from "./components/TextInput";
import { SelectInput } from "./components/SelectInput";
import { TextArea } from "./components/TextArea";
import { BlueButton , RedButton , VioletButton } from "../common/common.styled";
import { ButtonsContainer } from "./Form.styled";
import { roadmapOptions , tags } from "../../assets/consts";

export const EditFeedbackForm = () => {
    const feedback = {
        title: 'a',
        description: 'f',
        tag: 'bug',
        status: 'suggestion',
    }
    return (
        <FormContainer title={`Editing ${feedback.title}`}>
            <TextInput
                title={'Feedback Title'}
                description={'Add a short, descriptive headline'}
                value={feedback.description}
            />
            <SelectInput
                title={'Category'}
                description={'Choose a category for your feedback'}
                options={tags}
                value={feedback.tag}
            />
            <SelectInput
                title={'Update Status'}
                description={'Change feedback state'}
                options={ [ 'Suggestion', ...Object.keys(roadmapOptions) ] }
                value={feedback.status}
            />
            <TextArea
                title={'Feedback Detail'}
                description={'Include any specific comments on what should be improved, added, etc.'}
                value={feedback.description}
            />
            <ButtonsContainer style={{justifyContent: 'space-between'}}>
                <RedButton>Delete</RedButton>
                <ButtonsContainer style={{ margin: '0' }}>
                    <BlueButton>Cancel</BlueButton>
                    <VioletButton>Save</VioletButton>
                </ButtonsContainer>
            </ButtonsContainer>
        </FormContainer>
    )}