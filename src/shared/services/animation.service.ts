import gsap, {Power1, Power3, Power4, Linear, Elastic, TweenLite} from 'gsap'
import anime from 'animejs';
export class AnimationService {
  static gsap = gsap;
  static anime = anime;
  static tweenLite = TweenLite;
  static easing = {
    power1: Power1,
    power3: Power3,
    power4: Power4,
    elastic: Elastic
  };

  static runningTimeline(elements: HTMLElement, width: number, duration = 10, yoyo = true) {
    this.tweenLite.to(elements, duration, {
      x: width,
      repeat: -1,
      ease: Linear.easeNone,
      yoyo
    })
  }

  static appenCloneToParrent(parent: HTMLElement, clone: HTMLElement, numberOfClones: number) {
    for (let i = 0; i<numberOfClones; i++) {
      parent.appendChild(clone.cloneNode(true))
    }

    return parent;
  }

  static removeCover() {
    this.tweenLite.fromTo('.grid-row', {
      minHeight: 230,
      stagger: 0.1
    }, {
      minHeight: 196,
      duration: 2.5,
      ease: AnimationService.easing.power3.easeOut
    });

    this.tweenLite.to('.start-animate', {
      x: '-110%',
      duration: 2.5,
      ease: AnimationService.easing.power3.easeInOut,
      stagger: 0.1
    })
  }

  static cover(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.gsap.timeline()
        .fromTo('.grid-row', {
          minHeight: 196,
          stagger: 0.1
        }, {
          duration: 2,
          minHeight: 230,
          ease: AnimationService.easing.power3.easeOut
        })
        .to('.grid-row-section-cover', {
          delay: -1.5,
          duration: 1.5,
          x: 0,
          ease: AnimationService.easing.power4.easeInOut,
          onComplete: () => resolve(true)
      });
    });
  }
}
