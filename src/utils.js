const getDocHeight = () => {
  const d = document;
  return Math.max(
    d.body.scrollHeight,
    d.body.offsetHeight,
    d.body.clientHeight,
    d.documentElement.scrollHeight,
    d.documentElement.offsetHeight,
    d.documentElement.clientHeight
  );
};

const amountScrolled = () => {
  const winHeight= window.innerHeight || (document.documentElement || document.body).clientHeight;
  const docHeight = getDocHeight();
  const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  const trackLength = docHeight - winHeight;
  const pctScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  return pctScrolled;
};

export { amountScrolled };
