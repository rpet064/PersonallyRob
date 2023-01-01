import { useState } from 'react'
import styles from '../../../styles/Home.module.css'

const CollapsibleSection = (props: any) => {
    const [open, setOpen] = useState(false);

    return (
        <section className={styles.collapsible}>
            <div onClick={() => setOpen(true)}>{props.children}</div>
        </section>
    )
}
export default CollapsibleSection;