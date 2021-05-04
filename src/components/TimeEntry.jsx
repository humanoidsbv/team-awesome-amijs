import * as Styled from '../components/TimeEntry.styled'

function TimeEntry() {
    return (
        <Styled.EntryWrapper>
            <Styled.EntryDate>
                <p>04-05-2021</p>
            </Styled.EntryDate>
            <Styled.Entry>
                <p>Port of Rotterdam</p>
                <p>09:00 - 17:00</p>
            </Styled.Entry>
        </Styled.EntryWrapper>
    )
};

export default TimeEntry;
