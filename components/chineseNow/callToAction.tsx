import styles from '../../styles/Home.module.css'

const CallToAction = () => {

    return(
        <section className={styles.cta}>
            <h1 className="largetext">Impressed?</h1>
            <h3 className="mediumtext">Contact me for freelance and tutoring opportunities</h3>
            <button>Contact Me</button>
        </section>
    )
}

export default CallToAction