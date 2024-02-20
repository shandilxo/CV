import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Shandil Thakur"
                src="/images/pho.jpg"
                height={120}
                width={120}
                quality={100}
                className="object-fill border-3 border-slate-800 rounded-full shadow-md"
            />
        </div>
    );
};

export default ProfilePic;
