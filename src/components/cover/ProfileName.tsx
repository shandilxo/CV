import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Linkedin } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            SHANDIL THAKUR
            <div className="text-sm font-thin flex justify-between items-center">
                @shandilthakur
                <Link
                    className="block md:hidden"
                    href="https://www.linkedin.com/in/shandilthakur/"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Linkedin />
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileName;
