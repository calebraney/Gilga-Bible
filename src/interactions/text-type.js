import { attr, checkBreakpoints } from '../utilities';

export const textType = function (gsapContext) {
  //animation id
  const ANIMATION_ID = 'typetext';
  // selectors
  const WRAP = '[data-ix-typetext="wrap"]';
  const ITEM = '[data-ix-typetext="item"]';

  //elements
  const wraps = [...document.querySelectorAll(WRAP)];
  const items = [...document.querySelectorAll(ITEM)];

  //guard clause
  if (items.length === 0) return;

  //setup timeline
  let tl = gsap.timeline({
    paused: true,
    defaults: {
      duration: 1,
      ease: 'power2.out',
    },
  });
  ScrollTrigger.create({
    trigger: items[0],
    start: 'center 90%',
    end: 'bottom top',
    onEnter: (self) => tl.play(),
  });

  //add a tween for each item
  items.forEach((item) => {
    //check breakpoints and quit function if set on specific breakpoints
    let runOnBreakpoint = checkBreakpoints(item, ANIMATION_ID, gsapContext);
    if (runOnBreakpoint === false) return;

    const text = item.textContent;
    // gsap.set(item, {
    //   text: '',
    // });

    tl.fromTo(
      item,
      {
        text: '  ',
      },
      {
        text: text,
      },
      '-=.5'
    );
  });
};
