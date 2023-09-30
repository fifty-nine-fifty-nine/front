'use client';
import { Dialog, Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { Fragment, useState } from 'react';

export interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  content?: string;
  actions?: Array<ReactNode>;
}

const PopupModal = ({ isOpen, closeModal, title, content, actions }: ModalProps) => (
  <div className="relative max-w-md">
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
        <div className="relative max-w-md min-h-screen mx-auto px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute top-0 bottom-0 left-0 right-0 inset-0 bg-black opacity-60" />
          </Transition.Child>

          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block max-w-md p-6 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl text-center">
              <Dialog.Title as="h3" className="text-lg font-medium whitespace-pre-wrap">
                {title}
              </Dialog.Title>
              <div className="mt-2 px-5">
                <p className="text-sm text-gray-500 pt-2 whitespace-pre-wrap">{content}</p>
              </div>

              {actions && <div className="mt-4 flex flex-col gap-y-1">{...actions}</div>}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  </div>
);

export default PopupModal;

export const usePopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return { isOpen, openModal, closeModal };
};
