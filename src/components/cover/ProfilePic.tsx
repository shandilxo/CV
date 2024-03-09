import Image from 'next/image';
import { FC } from 'react';
import styles from './ProfilePic.module.css'; // Import CSS file for styling

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className={styles.profilePicContainer}>
            <div className={styles.animatedBorder}></div> {/* Border animation */}
            <Image
                alt="Shandil Thakur"
                src="/images/pho.jpg"
                height={120}
                width={120}
                className={`object-fill rounded-full shadow-md ${styles.animatedBorder}`}
            />
        </div>
    );
};

export default ProfilePic;
