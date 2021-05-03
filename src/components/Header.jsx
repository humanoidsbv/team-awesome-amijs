import Navigation from '../components/Navigation';

import * as Styled from '../components/Header.styled';

function Header() {
    return(
        <Styled.Header>
            <Styled.HeaderTitle>team awesome</Styled.HeaderTitle>
            <Styled.HeaderButton>
                <img src="../assets/shape.svg" />
            </Styled.HeaderButton>
            <Navigation />
        </Styled.Header>
    );
}

export default Header;
