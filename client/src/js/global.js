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

const initApp = async () => {
  // 🚩 Global JavaScript ...
  log('⚡ DOM successfully Loaded')
  const SERVER = 'https://galleria-server.onrender.com'

  const request = await fetch('https://galleria-server.onrender.com/assets/imagedata.json')
  const data = await request.json()
  console.log(data)
  data.forEach((img) =>{
     const thumbnail = document.createElement('img')
     thumbnail.src = SERVER+img.thumbnail
     select('.galleria-grid').appendChild(thumbnail)
  })

}

event(document, 'DOMContentLoaded', initApp)
