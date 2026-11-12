import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trainers } from '../components/Trainers';

export const TrainersPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBookTrainer = (trainerName: string) => {
    navigate('/contact', {
      state: {
        plan: 'Personal Training Plan',
        program: `1-on-1 with Coach ${trainerName}`
      }
    });
  };

  return (
    <div className="pt-20">
      <Trainers onBookTrainer={handleBookTrainer} />
    </div>
  );
};
