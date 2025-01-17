const handleScrollUp = () => {
  if (!window.scrollY) return;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleScrollDown = () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const viewHeight = window.innerHeight;
  const currentScroll = window.scrollY;

  if (currentScroll + viewHeight >= scrollHeight) return;

  window.scrollTo({
    top: scrollHeight - viewHeight,
    behavior: 'smooth',
  });
};

export { handleScrollUp, handleScrollDown };
