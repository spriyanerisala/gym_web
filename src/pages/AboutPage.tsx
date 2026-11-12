import React from 'react';
import { useNavigate } from 'react-router-dom';
import { About } from '../components/About';

export const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      <About onOpenEnquiry={() => navigate('/contact')} />
    </div>
  );
};
