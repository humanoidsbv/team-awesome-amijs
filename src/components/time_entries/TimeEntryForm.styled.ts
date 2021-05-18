import styled from "styled-components";

export const TimeEntryForm = styled.form`
  background-color: #f5f8fa;
  border-radius: 4px;
  border: solid 1px #e6eaee;
  display: ${(props) => (props.openForm ? "none" : "flex")};
  flex-direction: column;
  font-family: ProximaNova;
  margin: 24px 16px 0 16px;
  max-width: 1170px;
  padding: 16px 16px 32px 16px;
  width: -webkit-fill-available;
  box-sizing: border-box;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 12px 31px 16px 31px;

    ${(props) => props.desktop && `display: none`}
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  height: 8px;
  position: absolute;
  right: 32px;
  width: 8px;

  > svg {
    fill: #354052;
    height: 8px;
    width: 8px;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    > svg {
      display: none;
    }
  } ;
`;

export const HourEntries = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    :first-child {
      margin: 0 6px 0 0;
    }

    :last-child {
      margin: 0 0 0 6px;
    }
  }
`;

export const InputWrapper = styled.div`
  width: -webkit-fill-available;

  @media screen and (${({ theme }) => theme.desktop}) {
    margin: 0 13px 0 0;
    width: auto;
  }
`;

export const FormInputName = styled.p`
  color: #68768c;
  font-size: 12px;
  opacity: 0.5;
  width: max-content;
`;

export const FormInput = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px ${(props) => (props.isInputValid ? "#ced0da" : "#fb6375")};
  cursor: text;
  font-family: ProximaNova;
  height: 36px;
  margin: 12px 0 16px 0;
  padding: 0 10px 0 15px;
  width: -webkit-fill-available;

  :focus {
    outline: none;
  }
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    margin: 12px 0 0 0;
  }
`;

export const FormButton = styled.button`
  align-items: center;
  background-color: ${(props) => (props.isLoading ? "orange" : "#35ac45")};
  border-radius: 4px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-family: ProximaNova;
  height: 36px;
  justify-content: center;
  margin: 26px 0 0 0;

  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    margin: 0 0 0 auto;
    padding: 10px 32px;
  } ;
`;

export const NewEntryButton = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: #ffffff;
  cursor: pointer;
  display: ${(props) => (props.openForm ? "flex" : "none")};
  font-family: ProximaNova;
  height: 36px;
  justify-content: center;
  margin: 24px 16px 0 16px;

  > svg {
    margin: 0 15px 0 0;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    display: none;
  } ;
`;
