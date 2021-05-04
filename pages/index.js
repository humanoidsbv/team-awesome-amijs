import AddTimeEntry from '../src/components/AddTimeEntry';
import Header from '../src/components/Header';
import TimeEntry from '../src/components/TimeEntry';

function HomePage() {
    return (
        <>
        <Header />
        <AddTimeEntry />
        <TimeEntry />

        <TimeEntry />
        <TimeEntry />

        <TimeEntry />
        </>
    );
}

export default HomePage;
