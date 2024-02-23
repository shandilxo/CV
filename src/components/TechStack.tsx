import { FC } from 'react';
import TechCard from './Card/TechCard';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechCard
          title="Core skills"
          classaName="bg-[#4f91f2]"
          tech={[
            'EXCEL',
            'TALLY',
            'Accounting Skills',
            'Financial Modeling',
            'Adaptability and Learning Agility'
          ]}
        />
        <TechCard
          title="Extra Skills"
          classaName="bg-[#f37c36]"
          tech={['Generative AI', 'ITR' , 'TCS & TDS Return', 'GST', 'BI','DATA ANALYSIS']}
        />
        <TechCard
          title="Programming Language"
          classaName="bg-[#e0558a]"
          tech={[' Python  ', ' SQL ',]}
        />
        <TechCard
          title="Artistic Skills"
          classaName="bg-[#10c0a2]"
          tech={[
            'GFX',
            'VFX',
          ]}
        />
      </div>
    </div>
  );
};

export default TechStack;
