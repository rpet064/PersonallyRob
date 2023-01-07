import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
      <div className={styles.footer}>
        <p>© Robert Pether {new Date().getFullYear()}</p>
      </div>
    )
  }