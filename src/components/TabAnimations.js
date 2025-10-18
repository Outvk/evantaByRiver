import gsap from "gsap";
import { CustomEase, Flip, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(CustomEase, Flip, ScrollTrigger);

CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

gsap.defaults({
  ease: "osmo-ease",
  duration: 0.8,
});

export function initTabSection() {
  const tabSection = document.querySelector(".cloneable");
  const tabLayout = document.querySelector(".tab-layout");
  const tabHeading = document.querySelector(".tab-layout-heading");
  const filterBar = document.querySelector(".filter-bar");
  const tabContent = document.querySelector(".tab-content-wrap");
  const tabVisual = document.querySelector(".tab-visual-wrap");

  // Create a single timeline for better performance
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: tabSection,
      start: "top 80%", // Start earlier
      end: "bottom 20%", // End earlier
      toggleActions: "play none none none", // Only play once
      once: true, // Ensure it only plays once
      markers: false, // Remove markers in production
      fastScrollEnd: true, // Optimize for fast scrolling
    },
  });

  // Batch animations together for better performance
  tl.fromTo(
    [tabLayout, tabHeading, filterBar, tabContent, tabVisual],
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
      clearProps: "all", // Clean up after animation
    }
  );
}

export function initFlipButtons() {
  let wrappers = document.querySelectorAll('[data-flip-button="wrap"]');

  wrappers.forEach((wrapper) => {
    let buttons = wrapper.querySelectorAll('[data-flip-button="button"]');
    let bg = wrapper.querySelector('[data-flip-button="bg"]');

    buttons.forEach(function (button) {
      // Handle mouse enter
      button.addEventListener("mouseenter", function () {
        const state = Flip.getState(bg);
        this.appendChild(bg);
        Flip.from(state, {
          duration: 0.3, // Faster duration
          ease: "power2.out", // Smoother easing
        });
      });

      // Handle focus for keyboard navigation
      button.addEventListener("focus", function () {
        const state = Flip.getState(bg);
        this.appendChild(bg);
        Flip.from(state, {
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Handle mouse leave
      button.addEventListener("mouseleave", function () {
        const state = Flip.getState(bg);
        const activeLink = wrapper.querySelector(".active");
        activeLink.appendChild(bg);
        Flip.from(state, {
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Handle blur to reset background for keyboard navigation
      button.addEventListener("blur", function () {
        const state = Flip.getState(bg);
        const activeLink = wrapper.querySelector(".active");
        activeLink.appendChild(bg);
        Flip.from(state, {
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  });
}

export function initTabSystem() {
  let wrappers = document.querySelectorAll('[data-tabs="wrapper"]');

  wrappers.forEach((wrapper) => {
    let nav = wrapper.querySelector('[data-tabs="nav"]');
    let buttons = nav.querySelectorAll('[data-tabs="button"]');
    let contentWrap = wrapper.querySelector('[data-tabs="content-wrap"]');
    let contentItems = contentWrap.querySelectorAll(
      '[data-tabs="content-item"]'
    );
    let visualWrap = wrapper.querySelector('[data-tabs="visual-wrap"]');
    let visualItems = visualWrap.querySelectorAll('[data-tabs="visual-item"]');

    let activeButton = buttons[0];
    let activeContent = contentItems[0];
    let activeVisual = visualItems[0];
    let isAnimating = false;

    function switchTab(index, initial = false) {
      if (!initial && (isAnimating || buttons[index] === activeButton)) return;
      isAnimating = true;

      const outgoingContent = activeContent;
      const incomingContent = contentItems[index];
      const outgoingVisual = activeVisual;
      const incomingVisual = visualItems[index];

      let outgoingLines =
        outgoingContent.querySelectorAll("[data-tabs-fade]") || [];
      let incomingLines = incomingContent.querySelectorAll("[data-tabs-fade]");

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
          duration: 0.4, // Faster duration
        },
        onComplete: () => {
          if (!initial) {
            outgoingContent && outgoingContent.classList.remove("active");
            outgoingVisual && outgoingVisual.classList.remove("active");
          }
          activeContent = incomingContent;
          activeVisual = incomingVisual;
          isAnimating = false;
        },
      });

      incomingContent.classList.add("active");
      incomingVisual.classList.add("active");

      timeline
        .to(outgoingLines, { y: "-1em", autoAlpha: 0 }, 0)
        .to(outgoingVisual, { autoAlpha: 0, xPercent: 2 }, 0)
        .fromTo(
          incomingLines,
          { y: "1em", autoAlpha: 0 },
          { y: "0em", autoAlpha: 1, stagger: 0.05 },
          0.2
        )
        .fromTo(
          incomingVisual,
          { autoAlpha: 0, xPercent: 2 },
          { autoAlpha: 1, xPercent: 0 },
          "<"
        );

      activeButton && activeButton.classList.remove("active");
      buttons[index].classList.add("active");
      activeButton = buttons[index];
    }

    switchTab(0, true);

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => switchTab(i));
    });

    contentItems[0].classList.add("active");
    visualItems[0].classList.add("active");
    buttons[0].classList.add("active");
  });
}
