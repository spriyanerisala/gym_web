import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Offers } from '../components/Offers';

export const OffersPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClaimOffer = (offerCode: string) => {
    navigate('/contact', { state: { offer: offerCode } });
  };

  return (
    <div className="pt-20">
      <Offers onClaimOffer={handleClaimOffer} />
    </div>
  );
};
