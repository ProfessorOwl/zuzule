import { Suspense } from 'react';
import { CheckableHeading } from './CheckableHeading';

interface SuspenseCheckableHeadingProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  maxHeight?: number;
}

export function SuspenseCheckableHeading({ title, children, id, maxHeight }: SuspenseCheckableHeadingProps) {
  return (
    <Suspense>
      <CheckableHeading title={title} id={id} maxHeight={maxHeight}>
        {children}
      </CheckableHeading>
    </Suspense>
  );
}