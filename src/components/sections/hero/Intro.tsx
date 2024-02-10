import List from '@/components/ui/List';
import { Eye, History, ThumbsUp } from 'lucide-react';
import { FC } from 'react';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 flex-col md:flex-row gap-7">
            <div className="flex flex-1">
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src="https://www.youtube.com/embed/BB2ETUKFV_k?rel=0"
                ></iframe>
            </div>
            <div className="flex flex-col justify-between flex-1 p-5 md:p-0">
                <div className="flex flex-col gap-4 ">
                    <div className="text-2xl text-highlight font-semibold">
                        Learning made EZ - An introduction
                    </div>
                    <div className="flex gap-4">
                        <List variant="info" sizes="xs">
                            <Eye size={16} />
                            2,36,898
                        </List>
                        <List variant="info" sizes="xs">
                            <History size={16} /> 1 month ago
                        </List>
                        <List variant="info" sizes="xs">
                            <ThumbsUp size={16} /> 23,729
                        </List>
                    </div>
                </div>
                <div className="text-secondary text-sm mt-2 md:mt-0  max-w-[500px]">
                Allow me to introduce Shandil Thakur, a dynamic individual with a diverse background and a passion for excellence. Born on April 8th, 2003, in Himachal Pradesh, Shandil was raised in the vibrant city of Faridabad, Haryana. He completed his Bachelor of Commerce Honors from Delhi University in 2023, following a stellar academic journey that began at Delhi Public School, Ballabgarh, where he completed his 12th-grade studies in commerce in 2020.
Beyond academia, Shandil is currently pursuing Company Secretaryship (CS), demonstrating his commitment to professional growth and legal expertise. Furthermore, he has a keen interest in graphic effects (GFX) and visual effects (VFX), showcasing his creative flair and technical acumen in multimedia production. Shandil's multifaceted skill set and dedication make him a valuable asset in any endeavor he undertakes.
                </div>
            </div>
        </div>
    );
};

export default Intro;
