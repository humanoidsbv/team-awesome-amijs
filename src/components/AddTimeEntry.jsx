import * as Styled from '../components/AddTimeEntry.styled';

import PlusIcon from '../../public/assets/plus-icon.svg';

function AddTimeEntry () {
    return (
        <Styled.NewEntryButton>
            <PlusIcon />
            <p>New time entry</p>
        </Styled.NewEntryButton>
    );
}

export default AddTimeEntry;
