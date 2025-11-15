
import React from 'react';

interface SkillPillProps {
  skill: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ skill }) => {
  return (
    <span className="inline-block bg-cyan-800/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
      {skill}
    </span>
  );
};

export default SkillPill;
