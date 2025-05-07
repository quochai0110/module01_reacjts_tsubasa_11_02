import React from 'react'
import Parents from './components/Parents'
import EventComponent from './components/EventComponent'
import StateComponent from './components/StateComponent'
import FormControl from './components/FormControl'
import FormUncontrol from './components/FormUncontrol'
import HookUseEffect from './components/HookUseEffect'


export default function App() {
  return (
    <div>
      function component
      <Parents></Parents>
      <EventComponent></EventComponent> 
      **************************
      <StateComponent></StateComponent>
      *********************
      <FormControl></FormControl>
      *********************
      <FormUncontrol></FormUncontrol>
      <HookUseEffect></HookUseEffect>
    </div>
  )
}
