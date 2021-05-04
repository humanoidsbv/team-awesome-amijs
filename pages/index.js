import AddTimeEntry from '../src/components/AddTimeEntry';
import Header from '../src/components/Header';
import TimeEntries from '../src/components/TimeEntries'

function HomePage() {
    return (
        <>
        <Header />
        <AddTimeEntry />
        <TimeEntries />
        </>
    );
}

export default HomePage;
