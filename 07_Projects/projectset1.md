# Project Related DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution

Project 1
```javascript
// first we have select all the buttons 
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body");

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click',function (e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "grey")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "white")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "blue")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "yellow")
    {
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === "purple")
    {
      body.style.backgroundColor = e.target.id;
    }
  })
})


```
Project 2
```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height))
  {
    result.innerHTML = `Please give a valid Height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight) )
  {
    result.innerHTML = `Please give a valid weight ${weight}`;
  }
  else
  {
    const BMI  = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>` ;  
  }
})

```
