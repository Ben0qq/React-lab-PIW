import React from 'react';
import logo from './pwr.png';
import suprise from './suprise.png';
import './App.css';

function Title(props)
{
    return <h1>{props.title}</h1>;
}

class Rzeczy extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      rzeczy: [{"id": 1, "rzecz": 'przedmiot'}, {"id": 2, "rzecz": 'coś'}, {"id": 3, "rzecz": 'istota'}, {"id": 4, "rzecz": 'sprawa'}]
    }
  }

  render()
  {
    const rzeczy = this.state.rzeczy;
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Synonim słowa rzecz</th>
          </tr>
        </thead> 
        <tbody>
          {rzeczy.map((f) => {
            return (
              <tr key = {f.id}>
                <th>{f.id}</th>
                <th>{f.rzecz}</th>
              </tr>
            )
          })}
        </tbody> 
      </table>
    )
  }
}

class Guzik extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    let vis;
    if(this.state.isToggleOn === false)
    {
      vis = 'hidden';
    }else
    {
      vis = 'visible';
    }
    return (
      <div>
      <button onClick={this.handleClick}>
        Niespodzianka
      </button>
      <br/>
      <img src={suprise} className="suprise" alt="spr"  style={{visibility:vis}}/>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
        <Title title="Strona powitalna"/>
        <h4>Zrealizowana na potrzeby laboratoriów 5 z Projektowania Interfejsów webowych strona powitalna</h4>
        <img src={logo} className="App-logo" alt="logo"/>
        <br/>
        <Guzik/>
        <Rzeczy/>
    </div>
  );
}



export default App;