import MobileHeader from '../src/components/MobileHeader';
import HeaderTitle from '../src/components/HeaderTitle';
import HeaderButton from '../src/components/HeaderButton';

import * as Styled from '../src/components/MobileHeader.styled';

function HomePage() {
    return <Styled.MobileHeader>
        <HeaderTitle />
        <HeaderButton />
        <MobileHeader />
    </Styled.MobileHeader>
}
export default HomePage;
