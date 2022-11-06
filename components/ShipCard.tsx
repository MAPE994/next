import styles from '../styles/ShipCard.module.css'
import { ArrowRight } from 'react-feather';
import iShip from '../interfaces/iShip';
import Link from 'next/link';

const FALLBACK_IMAGE_URL: string = "https://ichef.bbci.co.uk/news/976/cpsprodpb/C5EC/production/_117686605_9d7a3562-59e1-454a-ac31-88a108c54573.jpg";

export default function ShipCard({ ship }: { ship: iShip }) {
    return (
        <div className={styles.shipCard} style={{ background: `url(${!!ship.image ? ship.image : FALLBACK_IMAGE_URL}) no-repeat`, backgroundSize: "cover" }}>
            <div className={styles.content}>
                <div>
                    <h2 className={styles.shipName}>{ship.name}</h2>
                    <h3 className={styles.shipType}>{ship.type}</h3>
                </div>
                <div className={styles.cta}>
                    <Link href={`/ships/${ship.id}`}><ArrowRight /></Link>
                </div>

            </div>

        </div>
    )
};