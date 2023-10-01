'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React from 'react';

import { usePopupModal } from '@/components/common/PopupModal';
import { fetcher } from '@/lib/fetcher';
import { optionalText } from '@/styles/ogoo/colors.css';
import { bodyMd } from '@/styles/ogoo/typography.css';
import { cn } from '@/utils';

import { CardDeleteModal } from '../../../components/CardDeleteModal';

export const CardDeleteButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const { isOpen, openModal, closeModal } = usePopupModal();

  const handleDeleteCard = async () => {
    if (!accessToken) return;
    try {
      await fetcher(`/pets/businesscards/${id}`, 'DELETE', accessToken);
    } catch (e) {
      console.error(e);
    } finally {
      closeModal();
      const timestamp = Date.now();
      router.replace(`/mypage?timestamp=${timestamp}`);
    }
  };

  return (
    <>
      <button
        type="button"
        className={cn(bodyMd, optionalText, `font-semibold`)}
        onClick={openModal}
      >
        삭제하기
      </button>
      <CardDeleteModal isOpen={isOpen} closeModal={closeModal} onClickDelete={handleDeleteCard} />
    </>
  );
};
