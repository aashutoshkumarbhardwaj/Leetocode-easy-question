import React, { Fragment } from 'react';
import { useState } from 'react';

function App() {
    const [title, setTitle] = useState("My name is aashutosh");
    function updateTitle() {
        setTitle("my name is  " + Math.random());
    }
  return (
    <div>
     <button onClick={updateTitle}>Update Title</button>
      <Header title={title}></Header>
      
      <Header title="aashutosh2"></Header>
      <Header title="aashutosh3"></Header>
     
    </div>
  );
}

const Header = React.memo(function Header({ title }) {
  console.log("Header component rendered by aashutosh");
  return <div>{title}</div>;
});


export default App;

