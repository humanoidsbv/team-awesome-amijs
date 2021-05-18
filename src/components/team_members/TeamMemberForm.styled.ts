import styled from "styled-components";

export const MemberFormHeader = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin: 32px 16px 0 16px;
    max-width: 1170px;
    width: -webkit-fill-available;

    h1 {
      font-size: 24px;
      color: #354052;
    }
  }
`;

export const InputWrapper = styled.div`
  margin: 19px 0 0 0;
  position: relative;

  :first-child {
    margin: 0;
  }
`;

export const FormInputName = styled.p`
  color: #7f8fa4;
  font-size: 14px;
  width: max-content;
`;

export const FormInput = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #ffffff);
  border-radius: 4px;
  border: solid 1px #ced0da;
  cursor: text;
  font-family: ProximaNova;
  height: 36px;
  margin: 7px 0 0 0;
  padding: 0 10px 0 15px;
  width: -webkit-fill-available;

  :focus {
    outline: none;
  }

  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }

  ${(props) =>
    props.Bio &&
    `
      height: 84px;
    `}

  ${(props) =>
    props.Twitter &&
    `
			padding-left: 53px;
    `}

  ${(props) =>
    props.Facebook &&
    `
      margin-top: 10px;
			padding-left: 53px;
    `}
`;

export const SocialIcon = styled.div`
  align-items: center;
  background-image: linear-gradient(to bottom, #2ea1f8 0%, #1a91ec 98%);
  border-radius: 4px;
  display: flex;
  height: 38px;
  justify-content: center;
  position: absolute;
  top: 21px;
  width: 38px;

  > svg {
    fill: #ffffff;
  }

  ${(props) =>
    props.Facebook &&
    `
      background-image: linear-gradient(to top, #137ece 98%, #288bd5 2%);
			top: 69px;
    `}
`;

export const NameWrapper = styled.div`
  display: flex;
  margin: 19px 0 0 0;

  :first-of-type {
    margin: 0;
  }

  > div {
    width: -webkit-fill-available;
    margin: 0;

    :first-child {
      margin: 0 10px 0 0;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
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

export const CancelButton = styled.button`
  align-items: center;
  background-color: #f5f7f9;
  border-radius: 4px;
  border: solid 1px #ced0da;
  color: #4b5464;
  cursor: pointer;
  display: ${(props) => (props.isOpenForm ? "flex" : "none")};
  font-family: ProximaNova;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  padding: 10px 0;
  width: 100px;
`;

export const SaveButton = styled.button`
  align-items: center;
  background-color: #35ac45;
  border-radius: 4px;
  border: solid 1px #249533;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-family: ProximaNova;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  margin: 0 0 0 12px;
  padding: ${(props) => (props.isOpenForm ? "10px 0" : "10px 20px")};
  width: ${(props) => (props.isOpenForm ? "100px" : "auto")};

  > svg {
    margin: 0 14px 0 0;
    display: ${(props) => (props.isOpenForm ? "none" : "block")};
  }
`;

export const TeamMemberForm = styled.form`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    background-color: #ffffff;
    border-radius: 0 4px 4px 4px;
    border: solid 1px #e6eaee;
    border-left: solid 4px #4f88ef;
    display: flex;
    font-family: ProximaNova;
    padding: 42px 32px;
  }
`;

export const Fliebel = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    align-items: center;
    align-self: flex-start;
    background-color: #ffffff;
    border-radius: 4px 4px 0 0;
    border: solid 1px #e6eaee;
    border-bottom: solid 0 #ffffff;
    border-left: solid 4px #4f88ef;
    color: #354052;
    display: flex;
    font-size: 18px;
    justify-content: center;
    left: 0;
    margin-bottom: -1px;
    margin-top: 22px;
    padding: 15px 32px;
    z-index: 1;
  }
`;

export const MemberFormWrapper = styled.div`
  display: none;

  @media screen and (${({ theme }) => theme.desktop}) {
    box-sizing: border-box;
    display: ${(props) => (props.isOpenForm ? "flex" : "none")};
    flex-direction: column;
    margin: 0 16px;
    max-width: 1170px;
    width: -webkit-fill-available;
  }
`;

export const FormSection = styled.section`
  flex-grow: 1;
  padding: 0 30px;

  :first-of-type {
    border-right: 1px solid #dfe3e9;
  }

  :last-of-type {
    padding: 0 0 0 30px;
  }
`;
