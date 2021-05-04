import * as Styled from '../components/TimeEntry.styled'

function TimeEntry(props) {
    return (
        <Styled.Entry firstEntry={props.firstEntry} middleEntry={props.middleEntry} lastEntry={props.lastEntry}>
            {props.children}
        </Styled.Entry>
    )
};

export default TimeEntry;
