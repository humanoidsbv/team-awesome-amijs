import React, { useState } from 'react';
import Navigation from '../components/Navigation';

import * as Styled from '../components/Header.styled';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    console.log(isOpen)

    return(
        <Styled.Header isOpen={isOpen}>
            <Styled.Title>team awesome</Styled.Title>
            <Styled.Button onClick={handleClick}>
                <Styled.Cross isOpen={isOpen} src="/assets/shape.svg" />
                <Styled.Hamburger isOpen={isOpen} src="/assets/group.svg" />
            </Styled.Button>
            <Navigation isOpen={isOpen} />
        </Styled.Header>
    );
}

export default Header;
