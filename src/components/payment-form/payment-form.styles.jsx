import styled from "styled-components";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  width:100%
  flex-direction: column;
  @media (max-width: 740px) {
    width: 100%;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  width:100%
  min-width: 100%;
  @media (max-width: 740px) {
    width: 100%;
  }
`;
