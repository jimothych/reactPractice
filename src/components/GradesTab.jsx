import StudentComponent from "./StudentComponent";

function GradesTab() {

    const styles = {
        border: "1px solid black",
        padding: "20px",
        fontFamilt: "Arial",
        display: "flex",
    };
        
    return(
        <div style={styles}>
            <StudentComponent name="James" score="500" id="10358932"/>
            <StudentComponent name="Nate" score="543" id="46144643"/>
            <StudentComponent name="Ali" score="2" id="23624237"/>
            <StudentComponent/>
        </div>
    );
}

export default GradesTab