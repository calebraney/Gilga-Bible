import { attr } from './utilities';
import { clickActive } from './interactions/click-active';
import { hoverActive } from './interactions/hover-active';
import { initLenis } from './interactions/lenis';
import { load } from './interactions/load';
import { textType } from './interactions/text-type';
import { parallax } from './interactions/parallax';
import { scrollIn } from './interactions/scroll-in';
import { scrolling } from './interactions/scrolling';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  // console.log('Local Script');
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }
  if (gsap.TextPlugin !== undefined) {
    gsap.registerPlugin(TextPlugin);
  }

  //////////////////////////////
  //Global Variables
  let lenis;

  const typeSample = function () {
    //animation id
    const ANIMATION_ID = 'typesample';
    // selectors
    const ITEM = '[data-ix-typesample="item"]';
    //elements
    const items = [...document.querySelectorAll(ITEM)];
    //guard clause
    if (items.length === 0) return;
    //add a tween for each item
    items.forEach((item) => {
      const children = item.children;
      //setup timeline
      let tl = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: item,
          start: 'center 90%',
          end: 'bottom top',
          toggleActions: 'play none none none',
        },
        defaults: {
          duration: 1,
          ease: 'power2.inOut',
        },
      });
      tl.fromTo(
        children,
        {
          opacity: 0,
          // translateX: '0.5rem',
        },
        {
          opacity: 1,
          // translateX: '0rem',
          stagger: { each: 0.02, from: 'start' },
        }
      );
    });
  };

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        lenis = initLenis();
        //functional interactions
        clickActive(gsapContext);
        hoverActive(gsapContext);
        load(gsapContext);

        //conditional interactions
        if (!reduceMotion) {
          scrollIn(gsapContext);
          scrolling(gsapContext);
          parallax(gsapContext);
          textType(gsapContext);
          typeSample();
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  const scrollReset = function () {
    //selector
    const RESET_EL = '[data-ix-reset]';
    //time option
    const RESET_TIME = 'data-ix-reset-time';
    const resetScrollTriggers = document.querySelectorAll(RESET_EL);
    resetScrollTriggers.forEach(function (item) {
      item.addEventListener('click', function (e) {
        //reset scrolltrigger
        ScrollTrigger.refresh();
        //if item has reset timer reset scrolltriggers after timer as well.
        if (item.hasAttribute(RESET_TIME)) {
          let time = attr(1000, item.getAttribute(RESET_TIME));
          //get potential timer reset
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, time);
        }
      });
    });
  };
  scrollReset();
});
