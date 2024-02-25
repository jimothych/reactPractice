import StudentDashboard from './components/StudentDashboard.jsx'
import ProgressTab from './components/ProgressTab.jsx'
import GradesTab from './components/GradesTab.jsx';

function HomeScreen() {

    return(
        <>
            <div>
                <StudentDashboard/>
                <GradesTab/>
                <ProgressTab/>
            </div>
        </>
    );
}

export default HomeScreen