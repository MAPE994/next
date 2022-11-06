import backgroundSvg from '../public/basic_info_bg.svg';
import styles from '../styles/BasicInfoCard.module.css'

export default function BasicInfoCard({ title, value }: { title: string, value?: string }) {
  return (
    <div className={styles.basicInfoCard} style={{ background: `url(${backgroundSvg.src}) no-repeat bottom`, backgroundSize: "cover" }}>
      <h3 className={styles.basicInfoCardTitle}>{title}</h3>
      <p>{value}</p>
    </div>
  )
};