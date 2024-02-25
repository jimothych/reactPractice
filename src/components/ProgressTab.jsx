import Calendar from "./PTcomponents/Calendar";
import TimeSpentTab from "./PTcomponents/TimeSpentTab";
import StudentDropDown from "./PTcomponents/StudentDropDown";
import Badges from "./PTcomponents/Badges";

function ProgressTab() {
    return(
        <>
            <StudentDropDown></StudentDropDown>
            <Badges></Badges>
            <Calendar></Calendar>
            <TimeSpentTab></TimeSpentTab>
        </>
    );
}

export default ProgressTab