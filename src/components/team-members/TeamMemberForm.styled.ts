import styled from "styled-components";

export const TeamMemberForm = styled.form`
  background-color: #f5f8fa;
  border-radius: 4px;
  border: ${({ theme }) => theme.borderLightGrey};
  display: ${(props) => (props.isFormVisible ? "none" : "flex")};
  flex-direction: column;
  margin: 24px 16px 0 16px;
  max-width: 1170px;
  padding: 16px 16px 32px 16px;

  @media screen and (${({ theme }) => theme.desktop}) {
    background-color: #ffffff;
    border-radius: 0 4px 4px 4px;
    border: ${({ theme }) => theme.borderLightGrey};
    border-left: solid 4px #4f88ef;
    flex-direction: row;
    padding: 42px 32px;
    margin-top: 0;
    width: calc(100% - 32px);
  }
`;

export const MemberFormHeader = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 32px);
    max-width: 1170px;
    margin: 32px 16px 0 16px;

    h1 {
      font-size: 24px;
      color: #354052;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 19px 0 0 0;
  position: relative;

  @media screen and (${({ theme }) => theme.desktop}) {
    :first-child {
      margin: 0;
    }
  }
`;

export const InputLabel = styled.label`
  color: #7f8fa4;
  font-size: 14px;
  width: max-content;
`;

export const Input = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px ${(props) => (props.isInputValid ? "#ced0da" : "#fb6375")};
  cursor: text;
  height: 36px;
  margin: 7px 0 0 0;
  padding: 0 10px 0 15px;
  width: 100%;

  :focus {
    outline: none;
  }

  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  ${(props) =>
    props.twitter &&
    `
      padding-left: 53px;
			border: solid 1px #ced0da;
    `}

  ${(props) =>
    props.facebook &&
    `
      margin-top: 10px;
      padding-left: 53px;
			border: solid 1px #ced0da;
    `}
`;

export const TextArea = styled.textarea`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px #ced0da;
  cursor: text;
  margin: 7px 0 0 0;
  padding: 10px 10px 6px 15px;
  resize: none;

  :focus {
    outline: none;
  }
`;

export const SocialIcon = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #2ea1f8 0%, #1a91ec 98%);
  border-radius: 4px;
  display: flex;
  height: 36px;
  justify-content: center;
  position: absolute;
  top: 21px;
  width: 36px;

  > svg {
    fill: #ffffff;
  }

  ${(props) =>
    props.facebook &&
    `
      background-image: linear-gradient(to top, #137ece 98%, #288bd5 2%);
      top: 67px;
    `}
`;

export const NameWrapper = styled.div`
  display: flex;
  margin: 19px 0 0 0;

  :first-of-type {
    margin: 0;
  }

  > div {
    margin: 0;
    width: 50%;

    :first-child {
      margin-right: 10px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  > button {
    :first-of-type,
    :last-of-type {
      margin-right: 12px;
    }
  }
`;

export const SortButton = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: ${(props) => (props.isListVisible ? "4px 4px 0 0" : "4px")};
  border: ${({ theme }) => theme.borderLightGrey};
  color: #7f8fa4;
  cursor: pointer;
  display: ${(props) => (props.isFormVisible ? "flex" : "none")};
  font-size: 14px;
  height: 36px;
  justify-content: space-between;
  padding: 0 14px;
  width: 120px;
`;

export const SortList = styled.div`
  background-color: #ffffff;
  border: ${({ theme }) => theme.borderLightGrey};
  border-radius: 0 0 4px 4px;
  border-top: none;
  color: #7f8fa4;
  display: ${(props) => (props.isListVisible ? "block" : "none")};
  min-width: 120px;
  position: absolute;

  > li {
    background-color: #ffffff;
    border-bottom: ${({ theme }) => theme.borderLightGrey};
    font-size: 14px;
    list-style: none;

    :last-child {
      border-bottom: none;
    }

    > button {
      background-color: transparent;
      border: 0;
      color: inherit;
      cursor: pointer;
      font: inherit;
      margin: 0;
      padding: 10px 14px;
    }
  }
`;

export const FliebelWrapper = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    display: ${(props) => (props.isFormVisible ? "none" : "flex")};
    margin: 24px 16px 0 16px;
    max-width: 1170px;
    width: calc(100% - 32px);
  }
`;

export const Fliebel = styled.div`
  align-items: center;
  align-self: flex-start;
  background-color: #ffffff;
  border-radius: 4px 4px 0 0;
  border: ${({ theme }) => theme.borderLightGrey};
  border-bottom: solid 0 #ffffff;
  border-left: solid 4px #4f88ef;
  color: #354052;
  display: ${(props) => (props.isFormVisible ? "none" : "flex")};
  font-size: 18px;
  justify-content: center;
  left: 0;
  margin: 0 0 -1px 0;
  padding: 15px 32px;
  z-index: 1;
`;

export const FormSection = styled.section`
  display: ${(props) => (props.personalSection ? "none" : "block")};

  @media screen and (${({ theme }) => theme.desktop}) {
    display: block;
    flex-grow: 1;
    padding: 0 30px;

    :first-of-type {
      border-right: 1px solid #dfe3e9;
    }

    :last-of-type {
      padding: 0 0 0 30px;
    }
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

export const AvatarWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  p {
    color: #354052;
    font-size: 12px;
    padding-top: 4px;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    p {
      font-size: 14px;
      padding-top: 10px;
    }
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
  height: 36px;
  justify-content: center;
  margin: 26px 0 0 0;

  :disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    display: none;
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

export const NewEntryButton = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: ${({ theme }) => theme.borderGreen};
  color: #ffffff;
  cursor: pointer;
  display: ${(props) => (props.openForm ? "flex" : "none")};
  height: 36px;
  justify-content: center;
  margin: 24px 16px 0 16px;

  > svg {
    margin: 0 15px 0 0;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;
