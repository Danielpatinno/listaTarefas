import { styled } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  border: 1px;
  gap: 4;
  align-items: center;
  max-width: 600px;

  input[type='submit'] {
    margin-top: 4px;
    padding: 7px;
    width: 120px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 15px;
    transition: 0.2s;

    &:hover {
      background-color: gray;
      color: #FFFFFF;
    }
  }
`

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  

  @media(max-width: 1400px) {
    width: 80%;
  }

  label {
    font-size: 20px;
    letter-spacing: 2px;
  }

  select {
    padding: 8px;
    cursor: pointer;
  }

  input {
    padding: 8px;
    border-radius: 5px;
  }
`