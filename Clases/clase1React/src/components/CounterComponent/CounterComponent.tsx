import  { useState } from 'react'

export const CounterComponent = () => {
    const [contador,setContador]=useState(0);
    const Incremento=()=>{
        setContador(contador+1)
    }
    const Decremento=()=>{
        setContador(contador-1)
    }
  return (
    <div>
        <button onClick={Incremento}>Incremento</button>
        <button onClick={Decremento}>Decremento</button>
        <p>{contador}</p>
    </div>
  )
}
