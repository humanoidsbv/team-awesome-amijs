import styled from "styled-components";

export const MemberEntry = styled.div`
  background-color: #ffffff;
  border: ${({ theme }) => theme.borderPrimary};
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 0 20px 0;
`;

export const BasicMemberInformation = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 82px;
`;

export const MemberWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const MemberAvatar = styled.img`
  border-radius: 25px;
  height: 50px;
  margin: ${(props) => (props.insideForm ? "0" : "0 0 0 16px")};
  width: 50px;

  @media screen and (${({ theme }) => theme.desktop}) {
    ${(props) =>
      props.insideForm &&
      `
        border-radius: 50px;
        height: 100px;
        width: 100px;
      `}
  }
`;

export const MemberName = styled.p`
  color: #354052;
  margin: 0 0 0 25px;
  padding: 0 0 2px 0;
`;

export const MemberFunction = styled.p`
  color: #7f8fa4;
  font-size: 14px;
  margin: 0 0 0 25px;
  padding: 2px 0 0 0;
`;

export const ArrowIcon = styled.div`
  margin: 0 16px 0 0;
  padding: 0;
`;

export const ExtraMemberInformation = styled.div`
  display: ${(props) => (props.isOpenEntry ? "block" : "none")};
`;

export const DetailedInformation = styled.div`
  background-color: #f5f8fa;
  border: ${({ theme }) => theme.borderPrimary};
  color: #7f8fa4;
  font-size: 14px;
  padding: 10px 30px;
`;

export const Details = styled.div`
  color: #354052;
  font-size: 16px;
  margin: 16px 0 0 16px;

  :last-child {
    margin: 16px;
  }
`;

export const Description = styled.p`
  color: #7f8fa4;
  font-size: 14px;
  margin: 4px 0 0 0;
`;

export const DetailedInformationWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;

export const InformationSection = styled.section`
  flex: 1;
  padding: 0 30px;

  :last-of-type {
    border-left: 1px solid #dfe3e9;
    display: none;
    padding: 0 0 0 30px;
  }

  @media screen and (${({ theme }) => theme.desktop}) {
    :last-of-type {
      display: block;
      padding: 0 0 0 30px;
    }
  }
`;
