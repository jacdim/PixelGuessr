import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 

type Props ={

}

type State = {
  
}

const getRandomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}



class App extends React.Component<Props, State> {
  private pixelLocation: [number, number]


  constructor(p) {
    super(p)
    this.pixelLocation = [getRandomInRange(0,window.innerWidth), getRandomInRange(0,window.innerHeight)]
    console.log(this.pixelLocation)
  }

  render() {
    return (
      <div className={'text-primary bg-primary'}>
        literally why arent you black
      </div>
    )
  }
  
}
export default App;


