import React from 'react';
import { useLocation } from 'react-router-dom';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const state = (location.state as { plan?: string; program?: string; offer?: string }) || {};

  return (
    <div className="pt-20">
      <Contact
        prefilledPlan={state.plan}
        prefilledProgram={state.program}
        prefilledOffer={state.offer}
      />
    </div>
  );
};
