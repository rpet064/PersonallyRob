import styles from '../../../styles/Home.module.css'

const Footer = () => {
    function getYear() {
        return new Date().getFullYear();
    }

    return(
        <section className={styles.footer}>
            <p>© Robert Pether {getYear()}</p>
        </section>
    )
}

export default Footer