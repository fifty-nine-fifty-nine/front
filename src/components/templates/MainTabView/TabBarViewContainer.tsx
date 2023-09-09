'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import { BusinessCardView } from './BusinessCardView';
import { PetCardView } from './PetCardView';
import { TabBar } from './TabBar';

export const TabBarViewContainer = () => {
  const searchParams = useSearchParams();
  const tabIndex = parseInt(searchParams.get('tab') ?? '0');

  return (
    <>
      <TabBar tabIndex={tabIndex} />

      <div className={`relative h-[calc(100vh-260px)] bg-white`}>
        <BusinessCardView active={tabIndex == 0} />
        <PetCardView active={tabIndex == 1} />
      </div>
    </>
  );
};
