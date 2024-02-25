import TimeSpentTab from "./PTcomponents/TimeSpentTab.jsx";
import StudentDropDown from "./PTcomponents/StudentDropDown";
import Badges from "./PTcomponents/Badges.jsx";

function ProgressTab() {
    return(
        <>
            <StudentDropDown></StudentDropDown>
            <Badges></Badges>
            <TimeSpentTab></TimeSpentTab>
        </>
    );
}

export default ProgressTab