import type { ReactNode } from 'react';
import React from 'react';

import { StepBackButton } from '../../templates';
import * as S from './style.css';

export interface AppbarProps {
  titleText?: string;
  action?: ReactNode;
}

export const Appbar = ({ titleText, action }: AppbarProps) => {
  return (
    <header className={S.appbar}>
      <div className={S.popWrapper}>
        <StepBackButton back={true} />
      </div>
      {titleText && <h2 className={S.appbarTitle}>{titleText}</h2>}
      {action && <div className={S.actionWrapper}>{action}</div>}
    </header>
  );
};
