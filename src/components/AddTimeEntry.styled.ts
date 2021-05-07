import styled from "styled-components";

export const NewEntryForm = styled.form`
  background-color: #f5f8fa;
  border-radius: 4px;
  border: solid 1px #e6eaee;
  display: ${(props) => (props.openForm ? "none" : "flex")};
  flex-direction: column;
  font-family: ProximaNova;
  margin: 24px 16px 0 16px;
  padding: 16px 16px 32px 16px;

  > svg {
    position: absolute;
    width: 7px;
    height: 7px;
    right: 32px;
    fill: #354052;
  }
`;

export const HourEntries = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FormInputName = styled.p`
  color: #68768c;
  font-size: 12px;
  margin: 0;
  opacity: 0.5;
`;

export const FormInput = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px #ced0da;
  font-family: ProximaNova;
  height: 36px;
  margin: 12px 0 16px 0;
  padding: 0 0 0 15px;

  :focus {
    outline: none;
  }
`;

export const FormButton = styled.div`
  align-items: center;
  background-color: #35ac45;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  font-family: ProximaNova;
  height: 36px;
  justify-content: center;
  margin: 26px 0 0 0;
`;

export const NewEntryButton = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: #ffffff;
  display: ${(props) => (props.openForm ? "flex" : "none")};
  font-family: ProximaNova;
  height: 36px;
  justify-content: center;
  margin: 24px 16px 0 16px;

  > svg {
    margin: 0 15px 0 0;
  }
`;
