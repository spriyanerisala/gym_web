import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Programs } from '../components/Programs';

export const ProgramsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectProgram = (programName: string) => {
    navigate('/contact', { state: { program: programName } });
  };

  return (
    <div className="pt-20">
      <Programs onSelectProgram={handleSelectProgram} />
    </div>
  );
};
