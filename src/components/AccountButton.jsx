import ArrowIcon from '../../public/assets/arrow-down.svg';
import HumanoidsLogo from '../../public/assets/humanoids-logo.svg'

import * as Styled from '../components/AccountButton.styled';

function AccountButton () {
    return (
        <Styled.AccountWrapper>
            <Styled.AccountButton>
                <HumanoidsLogo />
                <Styled.AccountPicture src="/assets/antje.jpg" />
            </Styled.AccountButton>
            <Styled.AccountArrow>
                <ArrowIcon />
            </Styled.AccountArrow>
        </Styled.AccountWrapper>
    )
}

export default AccountButton;
