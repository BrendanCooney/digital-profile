
import React, { useEffect, useState } from 'react';
import type { ExpertiseLevel } from '../types';
import Card from './Card';

interface ExperienceBarGraphProps {
  expertiseData: ExpertiseLevel[];
}

const ExperienceBarGraph: React.FC<ExperienceBarGraphProps> = ({ expertiseData }) => {
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    // Trigger the animation shortly after the component mounts
    const timer = setTimeout(() => setRendered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <div className="space-y-6">
        {expertiseData.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between mb-2">
              <span className="text-base font-medium text-white">{item.skill}</span>
              <span className="text-sm font-medium text-cyan-400">{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-cyan-500 to-teal-500 h-4 rounded-full transition-all duration-1000 ease-out"
                style={{ width: rendered ? `${item.percentage}%` : '0%' }}
                role="progressbar"
                aria-valuenow={item.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${item.skill} expertise level`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ExperienceBarGraph;
