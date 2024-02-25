function StudentComponent(props) {

    const name = props.name;
    const score = props.score;
    const id = props.id;

    const styles = {
        padding: "30px",
        border: "1px solid black",
        flexDirection: "column-reverse",
    }

    return(
        <div style = {styles}>
            <span>Name: {name} Score: {score} ID: {id}</span>
        </div>
    );
}

StudentComponent.defaultProps = {
    name: "none",
    score: "0",
    id: "0000",
}

export default StudentComponent