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
    opacity:[0,1],
    translateY: [-8,0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: anime.stagger(120)
  });

  anime({
    targets: '.mas',
    // opacity:[0,1],
    // translateY: [20,0],
    scaleX:[1,0],
    easing: 'easeInOutQuad',
    duration: 1200,
    delay: anime.stagger(150),
    complete: function(anim){
      select('.animation-dividers').remove()
    }
  })
  
  
}

event(document, 'DOMContentLoaded', initApp)
