import gsap, {Power1, Power3, TweenLite} from 'gsap'
export class AnimationService {
  static gsap = gsap;
  static tweenLite = TweenLite;
  static easing = {
    power1: Power1,
    power3: Power3
  };
}
