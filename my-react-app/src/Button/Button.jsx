import styles from "./Button.module.css"

function Button(){

    const handleClick = (event) => event.target.textContent = "Ouch!";
     
    return(<button onClick={(event) => handleClick(event)}className={styles.Button}>click me</button>);
}

export default Button