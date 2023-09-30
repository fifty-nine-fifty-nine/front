'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Fragment, useState } from 'react';

import { usePopupModal } from '@/components/common/PopupModal';
import { fetcher } from '@/lib/fetcher';
import * as S from '@/styles/ogoo';
import * as A from '@/styles/ogoo/alignment.css';
import * as C from '@/styles/ogoo/colors.css';
import { subtitle } from '@/styles/ogoo/typography.css';
import type { BusinesscardWithId } from '@/types';
import { cn } from '@/utils';
import { findUrlFromFirestore } from '@/utils/image-utils';

import { CardDeleteModal } from '../businesscard/components/CardDeleteModal';
import { CardShareModal } from '../businesscard/components/CardShareModal';
import { FallbackCardSlot } from './FallbackCardSlot';

export const CardSlots = ({ data }: { data: Array<BusinesscardWithId> | null }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const {
    isOpen: isDeleteModalOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = usePopupModal();
  const {
    isOpen: isShareModalOpen,
    openModal: openShareModal,
    closeModal: closeShareModal,
  } = usePopupModal();
  const [selectedCardPetName, setSelectedCardPetName] = useState<string>('');
  const [selectedCardId, setSelectedCardId] = useState<number>();
  const [selectedCardUrl, setSeletedCardUrl] = useState<string[]>([]);
  const [selectedShareThumb, setSeletedShareThumb] = useState<string>('');

  const myPetBusinesscardList = data || [];
  console.log(accessToken, myPetBusinesscardList); // FIXME: 추후 삭제

  const handleDeleteCard = async () => {
    if (!accessToken) return;
    try {
      await fetcher(`/pets/businesscards/${selectedCardId}`, 'DELETE', accessToken);
    } catch (e) {
      console.error(e);
    } finally {
      closeDeleteModal();
      router.refresh();
    }
  };

  const frontPath = async (frontPage: string) => {
    const frontPathname = await findUrlFromFirestore({
      folderName: 'businesscard',
      fileName: frontPage,
    });
    setSeletedShareThumb(frontPathname);
  };

  return (
    <div className={cn(A.flexRowCenter)}>
      {myPetBusinesscardList.length > 0 &&
        myPetBusinesscardList.map((card: BusinesscardWithId, idx) => (
          <Fragment key={card.id}>
            <article
              className={cn(
                C.bgSub,
                A.flexColCenter,
                'relative w-[183px] h-[210px] mx-1.5 rounded-xl pt-4 hover:transform hover:scale-105 transition-all',
              )}
            >
              <Image
                src={card.petProfileImgPath}
                alt=""
                width={100}
                height={100}
                priority
                className={`rounded-full bg-gray-300 object-cover w-[100px] h-[100px]`}
              />
              <div className={cn(A.flexRow, 'items-end gap-1 pt-5 pb-1')}>
                <p>{idx == 0 ? '첫째' : '둘째'}</p>
                <p className={cn(subtitle, C.primary)}>{card.petName}</p>
              </div>

              <Link
                href={`/mypage/businesscard/${card.id}/edit`}
                className="absolute top-2 right-2 rounded p-1 hover:bg-neutral-100 ease-in duration-150"
              >
                <Image
                  src="/svg/edit.svg"
                  width={16}
                  height={16}
                  style={{ width: 'auto', height: 'auto' }}
                  alt="수정"
                  priority
                />
              </Link>

              <div className={cn(A.flexRowCenter, C.whiteText, 'gap-2')}>
                <button
                  type="button"
                  className={cn(C.bgTertiary, S.button({ size: 'xxs' }))}
                  onClick={() => {
                    frontPath(card.businesscardImgPath[0]);
                    setSelectedCardPetName(card.petName);
                    setSeletedCardUrl(card.businesscardImgPath);
                    openShareModal();
                  }}
                >
                  공유
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCardId(card.id);
                    openDeleteModal();
                  }}
                  className={cn(C.bgDangerSub, S.button({ size: 'xxs' }))}
                >
                  삭제
                </button>
              </div>
            </article>

            <CardDeleteModal
              isOpen={isDeleteModalOpen}
              closeModal={closeDeleteModal}
              onClickDelete={() => handleDeleteCard()}
            />
            <CardShareModal
              isOpen={isShareModalOpen}
              closeModal={closeShareModal}
              petName={selectedCardPetName}
              imageUrl={selectedCardUrl}
              selectedShareThumb={selectedShareThumb}
            />
          </Fragment>
        ))}
      {myPetBusinesscardList.length <= 1 && <FallbackCardSlot />}
      {myPetBusinesscardList.length === 0 && <FallbackCardSlot />}
    </div>
  );
};
