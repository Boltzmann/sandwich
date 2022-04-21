import React, {useState} from 'react';
import './App.css';

type Sandwich = {
  name: string;
  bread: string;
  meat: string;
  salad1: string;
  salad2: string;
  salad3: string;
  sauce : string;
  cheese : string;
  extra?:string;
  beverage? : string;
  toasted : string;
  wishes : string;
}

function App() {

  const [name, setName] = useState('');
  const [bread, setBread] = useState('');
  const [meat, setMeat] = useState('');
  const [salad1, setSalad1] = useState('');
  const [salad2, setSalad2] = useState('');
  const [salad3, setSalad3] = useState('');
  const [sauce, setSauce] = useState('');
  const [cheese, setCheese] = useState('');
  const [extra, setExtra] = useState('');
  const [beverage, setBeverage] = useState('');
  const [toasted, setToasted] = useState('');
  const [wishes, setWishes] = useState('');
  
  return (
      <div className="App">
        <h1>
          Sandwich maker
        </h1>
        <label>Your Sandwich</label>
        <input type={"text"} required value={name} onChange={(e) => setName(e.target.value) }/>
        <label>bread</label>
        <select required value={bread} onChange={(e) => setBread(e.target.value) }>
          <option value={"white bread"}>white bread </option>
          <option value={"whole bread"} > whole bread</option>
          <option value={"bread bread"} >bread bread </option>
          <option value={"thin bread"} >thin bread </option>
          <option value={"dead bread"} > dead bread</option>
          <option value={"holy bread"} >holy bread </option>
        </select>
        <label>meat</label>
        <select required value={meat} onChange={(e) => setMeat(e.target.value)}>
          <option  value={"pork belly"}>pork belly </option>
          <option value={"chicken breast"} > chicken breast</option>
          <option value={"holy meat"} >holy meat </option>
          <option value={"thin meat"} >thin meat </option>
          <option value={"dead meat"} > dead meat</option>
          <option value={"no meat"} >no meat </option>
        </select>
        <label>veggies</label>
        <select required value={salad1} onChange={(e) => setSalad1(e.target.value)}>
          <option  value={"salad"}>salad </option>
          <option value={"paprika"} > paprika</option>
          <option value={"cucumber"} >cucumber </option>
          <option value={"corn"} >corn </option>
          <option value={"tomato"} > tomato</option>
          <option value={"no veggies"} >no veggies </option>
        </select>
        <label>veggies</label>
        <select required value={salad2} onChange={(e) => setSalad2(e.target.value)}>
          <option  value={"salad"}>salad </option>
          <option value={"paprika"} > paprika</option>
          <option value={"cucumber"} >cucumber </option>
          <option value={"corn"} >corn </option>
          <option value={"tomato"} > tomato</option>
          <option value={"no veggies"} >no veggies </option>
        </select>
        <label>veggies</label>
        <select required value={salad3} onChange={(e) => setSalad3(e.target.value)}>
          <option  value={"salad"}>salad </option>
          <option value={"paprika"} > paprika</option>
          <option value={"cucumber"} >cucumber </option>
          <option value={"corn"} >corn </option>
          <option value={"tomato"} > tomato</option>
          <option value={"no veggies"} >no veggies </option>
        </select>
        <label>sauce</label>
        <select required value={sauce} onChange={(e) => setSauce(e.target.value)}>
          <option  value={"mayo"}>mayo </option>
          <option value={"spicy mayo"} > spicy mayo</option>
          <option value={"bbq-sauce"} >bbq-sauce </option>
          <option value={"teriyaki-sauce"} >teriyaki-sauce </option>
          <option value={"tabasco"} > tabasco</option>
          <option value={"no sauce"} >no sauce </option>
        </select>
        <label>cheese</label>
        <select required value={cheese} onChange={(e) => setCheese(e.target.value)}>
          <option  value={"gouda"}>gouda </option>
          <option value={"cheddar"} > cheddar</option>
          <option value={"mozzarella"} >mozzarella </option>
          <option value={"provolone"} >provolone </option>
          <option value={"holy cheese"} > holy cheese</option>
          <option value={"no cheese"} >no cheese </option>
        </select>
        <label>extras?</label>
        <select value={extra} onChange={(e) => setExtra(e.target.value)}>
          <option >no extra </option>
          <option value={"extra meat"}>extra meat </option>
          <option value={"extra cheese"} > extra cheese</option>
          <option value={"extra sauce"} >extra sauce </option>
        </select>
        <label>beverages?</label>
        <select value={beverage} onChange={(e) => setBeverage(e.target.value)}>
          <option >no beverage </option>
          <option value={"coke"}>coke </option>
          <option value={"orange juice"} > orange juice</option>
          <option value={"sparkling water"} >sparkling water </option>
        </select>
        <label>toasted?</label>
        <select value={toasted} onChange={(e) => setToasted(e.target.value)}>
          <option  value={"NO!"}>NO! </option>
          <option value={"yes please!"} > yes please!</option>
          <option value={"as dark as my Soul!"} >as dark as my Soul! </option>
        </select>
        <label>Any extra wishes? Let us know!</label>
        <textarea value={wishes} onChange={(e) => setWishes(e.target.value)}> </textarea>
      </div>
  );
}

export default App;
