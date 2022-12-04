import styled from "styled-components";
import { BasicContainer } from "../../../common/common.styled";

export const FeedbackContainer = styled.article`
    background-color: ${props => props.theme.colors.primaryBg};
    border-radius: 10px;
    width: 100%;
    `

export const EmptyListContainer = styled(BasicContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 110px 0;
    img {
      margin-bottom: 50px;
    }
    p {
      width: 410px;
      margin-top: 0;
      text-align: center;
    }
    button {
      margin-top: 43px;
    }
    `