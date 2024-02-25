import StudentDashboard from './components/StudentDashboard.jsx'
import ProgressTab from './components/ProgressTab.jsx'
import GradesTab from './components/GradesTab.jsx';

function HomeScreen() {
    return(
        <>
            <StudentDashboard/>
            <GradesTab/>
            <ProgressTab/>
        </>
    );
}

export default HomeScreen