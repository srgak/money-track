import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from "@angular/animations";

export const accordionAnimationList: AnimationTriggerMetadata[] = [
  trigger('toggleContent', [
    state('close', style({
      height: 0,
      paddingTop: 0,
      paddingBottom: 0,
      borderTopColor: 'transparent'
    })),
    state('open', style({
      height: '*',
      padding: '*'
    })),
    transition('close <=> open', animate('.3s ease-in'))
  ]),
  trigger('rotateArrow',  [
    state('start', style({
      transform: 'rotate(0deg)'
    })),
    state('finish', style({
      transform: 'rotate(180deg)'
    }))
  ])
]