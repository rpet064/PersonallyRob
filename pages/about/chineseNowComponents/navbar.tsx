import styles from '../../../styles/Home.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { library, config } from "@fortawesome/fontawesome-svg-core";
  library.add(faUser, faCircleQuestion);
  config.autoAddCss = false

const Navbar = () => {

    return(
        <section className={styles.navbar}>
            <div className={styles.logo}>
                <h1>CN 現中</h1>
            </div>
            <div className={styles.iconcontainer}>
                <button><FontAwesomeIcon icon={faUser} /></button>
                <button><FontAwesomeIcon icon={faCircleQuestion} /></button>
            </div>
        </section>
    )
}

export default Navbar