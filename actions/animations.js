import { gsap } from "gsap";

export const introAnimation = (wordGroupsRef) => {
  const tl = gsap.timeline();
  tl.to(wordGroupsRef.current, {
    yPercent: -80,
    duration: 6,
    ease: "expo.inOut",
  });
  return tl;
};

export const collapseWords = (loaderRef) => {
  const tl = gsap.timeline();
  tl.to(loaderRef.current, {
    "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
    duration: 3,
    ease: "expo.inOut",
  });
  return tl;
};

export const animateSearchButton = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-button]",
    {
      width: 0,
    },
    {
      width: "auto",
    }
  );

  return tl;
};

export const animateAdminTabs = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-admin-tabs]",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );

  return tl;
};

export const animateUsersPage = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-users-item]",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      stagger: 0.4,
      y: 0,
    }
  );

  return tl;
};

export const animateRequestsPage = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-requests-item]",
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      stagger: 0.4,
      y: 0,
    }
  );

  return tl;
};

export const animateSearchButtonContent = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-button-content]",
    {
      opacity: 0,
    },
    {
      opacity: 1,
    }
  );

  return tl;
};

export const animateMenu = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-menu-item]",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.5,
      duration: 2,
    }
  );

  return tl;
};

export const animteFilterItem = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-filter-item]",
    {
      autoAlpha: 0,
      opacity: 0,
      y: 10,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.5,
      opacity: 1,
      duration: 2,
    }
  );

  return tl;
};

export const animateLogo = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.fromTo(
    "[data-last-name]",
    {
      paddingRight: 0,
    },
    {
      duration: 2,
      paddingRight: 43,
    }
  );

  return tl;
};

export const animateFlightCard = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });
  tl.fromTo(
    "[data-flight-card]",
    {
      autoAlpha: 0,
      y: 20,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.5,
      duration: 3,
    }
  );
  return tl;
};

export const animateSearcher = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });
  tl.fromTo(
    "[data-searcher]",
    {
      height: 0,
    },
    {
      height: "auto",
      duration: 2,
    }
  );
  return tl;
};

export const animateSearcherContent = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });
  tl.fromTo(
    "[data-searcher-content]",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 2,
    }
  );
  return tl;
};

export const animateCardSign = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });
  tl.fromTo(
    "[data-card-sign]",
    {
      autoAlpha: 0,
      y: 32,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 2,
    }
  );
  return tl;
};
