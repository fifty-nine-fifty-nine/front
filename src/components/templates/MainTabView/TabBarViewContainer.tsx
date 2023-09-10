'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

import { MainBusinessCardView } from './MainBusinessCardView';
import { MainPetCardView } from './MainPetCardView';
import { TabBar } from './TabBar';

export const TabBarViewContainer = () => {
  const searchParams = useSearchParams();
  const tabIndex = parseInt(searchParams.get('tab') ?? '0');

  return (
    <>
      <TabBar tabIndex={tabIndex} />

      <div className={`relative h-[calc(100vh-260px)] bg-white`}>
        <MainBusinessCardView active={tabIndex == 0} />
        <MainPetCardView active={tabIndex == 1} />
      </div>
    </>
  );
};
