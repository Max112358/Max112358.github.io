const REVEAL_SELECTOR = ".reveal";
const VISIBLE_CLASS = "visible";
const DEFAULT_THRESHOLD = 0.1;

function initReveal(threshold = DEFAULT_THRESHOLD) {
  const elements = document.querySelectorAll(REVEAL_SELECTOR);

  if (elements.length === 0) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(VISIBLE_CLASS);
        }
      });
    },
    { threshold },
  );

  elements.forEach((element) => observer.observe(element));
}
