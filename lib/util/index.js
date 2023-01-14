export const debounce = (func) => {
  let timer;
  return (e) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(
      () => {
        func();
      },
      500,
      e
    );
  };
};
