import { useState } from 'react'
import styles from '../../../styles/Home.module.css'

const CollapsibleSection = (props: any) => {
    const [open, setOpen] = useState(props.initialState);


    // this function manages stage of collapsible sections
    function setCollapsible(){
        if (open === false){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    return (
        <section className={styles.collapsible}>
            <div onClick={setCollapsible} title={props.title}>
                <h1 className={styles.extralargetext}>{props.label}</h1>
                {open && props.children}
            </div>
        </section>
    )
}
export default CollapsibleSection;