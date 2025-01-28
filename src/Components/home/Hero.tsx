import Image from "next/image";
import CloudImage from '../../../public/cloud-hosting.png';
import { TiTick } from "react-icons/ti";
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroLeft}>
                <h1 className={styles.title}>Article Publisher</h1>
                <p className={styles.desc}>
                    The ultimate platform for sharing your stories and insights
                </p>
                <div className={styles.services}>
                    <div className={styles.serviceItem}>
                        <TiTick /> User-Friendly Publishing Tools
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Secure Content Management
                    </div>
                    <div className={styles.serviceItem}>
                        <TiTick /> Easy Collaboration with Teams
                    </div>
                </div>
            </div>
            <div>
                <Image src={CloudImage} alt='publishing' width={500} height={500} />
            </div>
        </div>

    )
}

export default Hero