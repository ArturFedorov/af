import gsap, {Power1, Power3, Linear, Elastic, TweenLite} from 'gsap'
import anime from 'animejs';
export class AnimationService {
  static gsap = gsap;
  static anime = anime;
  static tweenLite = TweenLite;
  static easing = {
    power1: Power1,
    power3: Power3,
    elastic: Elastic
  };

  static runningTimeline(elements: HTMLElement, width: number, duration = 10) {
    this.tweenLite.to(elements, duration, {
      x: width,
      repeat: -1,
      ease: Linear.easeNone,
      yoyo: true
    })
  }

  static appenCloneToParrent(parent: HTMLElement, clone: HTMLElement, numberOfClones: number) {
    for (let i = 0; i<numberOfClones; i++) {
      parent.appendChild(clone.cloneNode(true))
    }

    return parent;
  }
}
