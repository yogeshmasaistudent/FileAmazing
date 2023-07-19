import styles from './Moviescard.module.css'
function Moviescard(props){
    return(
        <div className={styles.movies}>
           <img src={props.src} alt='Poster'/>
           <p>{props.name}</p>
           <p>{props.year}</p>
        </div>
    )
}

export default Moviescard;