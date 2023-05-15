//ToolBox
import {
  delay, // Asynchronus delay function : delay(time)
  log, // shorthand console.log : log()
  select, //Custom querrySelector : select(element, ?all[true:false])
  event, // Custom event listener : event(element,event,callback)
  classlist, // Class manipulator : classlist(element,action["+"(add),"-"(remove),"x"(toggle)],class(string or [])),
  debounce, // Debounce ( runs the function only after the specified delay ) : debounce(function,delay)
  throttle, // Throttle ( runs the function n times per specified amount time ) : throttle(function,interval)
  random, // Random number generator : random(min,max)
} from './utils'

import anime from 'animejs/lib/anime.es.js'

const initApp = async () => {
  // 🚩 Global JavaScript ...
  log('⚡ DOM successfully Loaded')
  anime({
    targets: '.item',
    opacity: [0, 1],

    easing: 'easeInOutSine',
    duration: 700,
    delay: anime.stagger(20),
  })
  anime({
    targets: ['.title', '.subhead2'],
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 700,
    delay: anime.stagger(20),
  })
}

event(document, 'DOMContentLoaded', initApp)
