import backgroundSvg from '../public/basic_info_bg.svg';
import styles from '../styles/Mission.module.css'

export default function Mission({ title, value }: { title: string, value?: string }) {
    return (
        <div className={styles.mission}>
            <h3 className={styles.missionName}>{title}</h3>
            <p className={styles.missionFlight}>{value}</p>
        </div>
    )
};