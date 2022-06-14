export const addFocus = (el) => {
  el.current.classList.add('input-wrapper--focused');
}

export const removeFocus = (el) => {
  el.current.classList.remove('input-wrapper--focused');
}