import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import AccountButton from '../components/AccountButton';

import * as Styled from '../components/Header.styled';
import HamburgerIcon from '../../public/assets/group.svg';
import CrossIcon from '../../public/assets/shape.svg';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return(
        <Styled.Header isOpen={isOpen}>
            <Styled.Title>team awesome</Styled.Title>
            <Styled.Button onClick={handleClick}>
                {isOpen ? <CrossIcon /> : <HamburgerIcon />}
            </Styled.Button>
            <Navigation isOpen={isOpen} />
            <AccountButton />
        </Styled.Header>
    );
}

export default Header;
