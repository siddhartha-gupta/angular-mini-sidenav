import { trigger, transition, style, animate, AnimationTriggerMetadata, state, group, query, animateChild } from '@angular/animations';

const defaultDuration = '100ms';
const defaultMinWidth = '60px';
const defaultMaxWidth = '200px';
const defaultMinFontSize = '20px';
const defaultMaxFontSize = '24px';

export function mainContentAnimation(
  animationDuration: string = defaultDuration,
  minWidth: string = defaultMinWidth,
  maxWidth: string = defaultMaxWidth,
): AnimationTriggerMetadata {
  return trigger('onSideNavChange', [
    state('close',
      style({
        'margin-left': minWidth,
      })
    ),
    state('open',
      style({
        'margin-left': maxWidth,
      })
    ),
    transition('close => open', animate(`${animationDuration} ease-in`)),
    transition('open => close', animate(`${animationDuration} ease-out`)),
  ]);
}

export function sidebarAnimation(
  animationDuration: string = defaultDuration,
  minWidth: string = defaultMinWidth,
  maxWidth: string = defaultMaxWidth,
): AnimationTriggerMetadata {
  return trigger('onSideNavChange', [
    state('close',
      style({
        width: minWidth,
      })
    ),
    state('open',
      style({
        width: maxWidth,
      })
    ),
    transition('close => open', group([
      query('@iconAnimation', animateChild()),
      query('@labelAnimation', animateChild()),
      animate(`${animationDuration} ease-in-out`)
    ])),
    transition('open => close', group([
      query('@iconAnimation', animateChild()),
      query('@labelAnimation', animateChild()),
      animate(`${animationDuration} ease-in-out`)
    ])),
  ]);
}

export function iconAnimation(
  animationDuration: string = defaultDuration,
  minFontSize: string = defaultMinFontSize,
  maxFontSize: string = defaultMaxFontSize,
): AnimationTriggerMetadata {
  return trigger('iconAnimation', [
    state('open', style({
      fontSize: maxFontSize,
    })),
    state('close', style({
      fontSize: minFontSize,
    })),
    transition('close => open', animate(`${animationDuration} ease-in-out`)),
    transition('open => close', animate(`${animationDuration} ease-in-out`)),
  ]);
}

export function labelAnimation(
  animationDuration: string = defaultDuration,
): AnimationTriggerMetadata {
  return trigger('labelAnimation', [
    state('open', style({
      display: 'inline',
      opacity: 1
    })),
    state('close', style({
      display: 'none',
      opacity: 0
    })),
    transition('close => open', animate(`${animationDuration} ease-in-out`)),
    transition('open => close', animate(`${animationDuration} ease-in-out`)),
  ]);
}
