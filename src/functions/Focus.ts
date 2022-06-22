import { MutableRefObject } from 'react';

export const addFocus = (el: MutableRefObject<HTMLDivElement | null>): void => {
  if (el.current) {
    el.current.classList.add('input-wrapper--focused');
  }
}

export const removeFocus = (el: MutableRefObject<HTMLDivElement | null>): void => {
  if (el.current) {
    el.current.classList.remove('input-wrapper--focused');
  }
}