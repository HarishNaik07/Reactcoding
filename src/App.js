import React, { Suspense } from 'react';
import './App.css';
import Form from './Form';

import Modal from './Reactcodingquestions/Modal';
//import Mycomponent from './Reactcodingquestions/Mycomponent';
import Name from './Reactcodingquestions/Name';
import Star from './Reactcodingquestions/Star';
import Mode from './Reactcodingquestions/Mode';
import Stopwatch from './Reactcodingquestions/Stopwatch';
import Add from './Reactcodingquestions/Add';
import Color from './Reactcodingquestions/Color';
import Options from './Reactcodingquestions/Options';
import Object from './Reactcodingquestions/Object';
const Lazy=React.lazy(()=>import('./Reactcodingquestions/Mycomponent'))

function App() {
  return (
    <div className="App">
   {/* <Form/>
   
   <Star/>
   <Modal/>
   <h1>Dynamic moduel loading</h1>
   <Suspense fallback={<div>loading....</div>}>
   <Lazy/>
   </Suspense>
   <Mode/>
   <Stopwatch/>
   <Add/>
   <Color/>
 */}
   {/* <Object/> */}
   {/* <Mode/> */}
   <Options/> 
   <Name/>
    </div>
  );
}

export default App;

