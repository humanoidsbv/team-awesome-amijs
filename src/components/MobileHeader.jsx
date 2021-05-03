import * as Styled from './MobileHeader.styled'

function MobileHeader() {
  return (
    
      <nav>
        <Styled.NavList>
          <Styled.ListItem active>Timesheets</Styled.ListItem>
          <Styled.ListItem>Team members</Styled.ListItem>
          <Styled.ListItem>Projects</Styled.ListItem>
          <Styled.ListItem>Clients</Styled.ListItem>
          <Styled.ListItem>Documents</Styled.ListItem>
        </Styled.NavList> 
      </nav>
    
    
  )
}

export default MobileHeader;
