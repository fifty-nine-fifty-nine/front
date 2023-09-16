import { sprinkles } from '../sprinkles.css';

export const flexCenter = sprinkles({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const flexRow = sprinkles({
  display: 'flex',
});

export const flexCol = sprinkles({
  display: 'flex',
  flexDirection: 'column',
});

export const flexRowCenter = sprinkles({
  display: 'flex',
  justifyContent: 'center',
});

export const flexRowItemsEnd = sprinkles({
  display: 'flex',
  alignItems: 'flex-end',
});

export const flexColCenter = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const flexRowBetween = sprinkles({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const flexRowBetweenItemsEnd = sprinkles({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

export const flexColBetween = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
});
