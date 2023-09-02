import React from 'react';

import { cn } from '@/utils';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={cn(
        `fixed z-10 w-full h-96 bottom-0 left-0 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`,
      )}
    >
      <div className="flex justify-center max-w-2xl  h-full bg-black  px-4">
        <button className="bg-gray-300 px-2 py-1 rounded-md text-sm" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
