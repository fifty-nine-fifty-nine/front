import React from 'react';
import { match } from 'ts-pattern';

import type { AppbarProps } from '@/components';
import { Appbar, Navbar } from '@/components';

import * as S from './style.css';

interface Props extends AppbarProps {
  children: React.ReactNode;
  withAppBar?: Boolean;
  withNavbar?: Boolean;
}

export const Template = ({
  children,
  withAppBar = false,
  withNavbar = true,
  titleText,
  action,
}: Props) => {
  const optionVar: S.OptionVar = match({ withAppBar, withNavbar })
    .with({ withAppBar: true, withNavbar: true }, () => 'both')
    .with({ withAppBar: true, withNavbar: false }, () => 'appbar')
    .with({ withAppBar: false, withNavbar: true }, () => 'navbar')
    .otherwise(() => 'default') as S.OptionVar;

  return (
    <>
      {withAppBar && <Appbar titleText={titleText} action={action} />}

      <div className={`${S.contentWrapper} ${S.viewportHeight[optionVar]} viewport`}>
        {children}
      </div>

      {withNavbar && <Navbar />}
    </>
  );
};
