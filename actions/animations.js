import {gsap} from "gsap"

export const introAnimation = (wordGroupsRef) => {
    const tl = gsap.timeline()
    tl.to(wordGroupsRef.current, {
        yPercent: -80,
        duration: 6,
        ease: 'expo.inOut'
      })
      return tl
}

export const collapseWords = (loaderRef) => {
    const tl = gsap.timeline()
    tl.to(loaderRef.current, {
        "clip-path": "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)",
        duration: 3,
        ease: "expo.inOut"
    })
    return tl
}

export const animateSearchButton = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.out",
            duration: 2
        }
    })
    
    tl.fromTo('[data-button]', {
        opacity: 0,
        scaleX: 0,
        scaleY: 0
    }, {
        opacity: 1,
        scaleX: 1,
        scaleY: 1
    })

    return tl
}

export const animateMenu = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.out",
            duration: 2
        }
    })
    
    tl.fromTo('[data-menu-item]', {
        autoAlpha: 0,
    }, {
        autoAlpha: 1,
        y: 0,
        stagger: 0.5,
        duration: 2
    })

    return tl
}

export const animateLogo = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.inOut"
        }
    })
    
    tl.fromTo('[data-last-name]', {
        paddingRight: 0,
    }, {
        duration: 2,
        paddingRight: 43,
    })

    return tl
}

export const animateCardSign = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: 'expo.inOut'
        }
    })
    tl.fromTo('[data-card-sign]', {
        autoAlpha: 0,
        y: 32,
    }, {
        autoAlpha: 1,
        y: 0,
        duration: 2
    })
    return tl
}