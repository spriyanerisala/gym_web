import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Membership } from '../components/Membership';

export const MembershipPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (planName: string) => {
    navigate('/contact', { state: { plan: planName } });
  };

  return (
    <div className="pt-20">
      <Membership onSelectPlan={handleSelectPlan} />
    </div>
  );
};
