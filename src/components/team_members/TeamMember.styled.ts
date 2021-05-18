import styled from "styled-components";

export const MemberEntry = styled.div`
  background-color: #ffffff;
  border: solid 1px #e6eaee;
  border-left: solid 4px #4f88ef;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 0 20px 0;
`;

export const BasicMemberInformation = styled.div`
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
  margin: 0 0 0 16px;
  width: 50px;

  ${(props) =>
    props.inForm &&
    `
      margin: 0;
    `}

  @media screen and (${({ theme }) => theme.desktop}) {
    ${(props) =>
      props.inForm &&
      `
				width: 100px;
				height: 100px;
				border-radius: 50px;
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

export const MemberButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 0 16px 0 0;
  padding: 0;
`;

export const ExtraMemberInformation = styled.div`
  display: ${(props) => (props.isOpenEntry ? "block" : "none")};
`;

export const DetailedInformation = styled.div`
  background-color: #f5f8fa;
  border: solid 1px #e6eaee;
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
