import Navigation from '../components/Navigation';

import * as Styled from '../components/Header.styled';

function Header() {
    return(
        <Styled.Header>
            <Styled.Title>team awesome</Styled.Title>
            <Styled.Button>
                <img src="../assets/shape.svg" />
            </Styled.Button>
            <Navigation />
        </Styled.Header>
    );
}

export default Header;
