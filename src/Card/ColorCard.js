import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function ColorCard() {

  const [colors, setColors] = useState(
    [
        {
            id: 1,
            bgColor: '#FF0000',
            textColor: '#fff',
            text: 'Red'
        },
        {
            id: 2,
            bgColor: '#2AAA8A',
            textColor: '#fff',
            text: 'Green'
        },
        {
            id: 3,
            bgColor: '#FFC300',
            textColor: '#000',
            text: 'Yellow'
        },
        {
            id: 4,
            bgColor: '#7FFFD4',
            textColor: '#000',
            text: 'Aquamarine'
        },
        {
            id: 5,
            bgColor: '#1E90FF',
            textColor: '#fff',
            text: 'Blue'
        },
        {
            id: 6,
            bgColor: '#000',
            textColor: '#fff',
            text: 'Black'
        }
    ]
  )

  const [colorText, setColorText] = useState('');

  let colorValues = colors.filter((color) => color.text.toLocaleLowerCase() == colorText.toLocaleLowerCase())
  
  const colorToggle = (id) => {
    const updatedColors = colors.map(
        (color) => color.id == id ?
        {
           ...color, bgColor: color.textColor, textColor: color.bgColor
        } : color
    )
    setColors(updatedColors);
    console.log(updatedColors);
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
    <Card style={{ width: '18rem' }} className="m-auto">
        {colorValues.length ? (
            colorValues.map((color) => (

                <div key={color.id} className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '300px', border: '1px solid rgb(0 0 0 / 18%)', backgroundColor: `${color.bgColor}` }}>
                    <p style={{ color: `${color.textColor}`}}><strong>{color.text}</strong></p>
                </div>
            ))
            ) : (
            <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '300px', border: '1px solid rgb(0 0 0 / 18%)' }}>
                <p>Enter color</p>
            </div>
        )}
        <Card.Body>
        <Form.Control type="text" placeholder="Color" value={colorText} onChange={(e) => setColorText(e.target.value)}/>
        { colorValues.length ? colorValues.map( (color) =>
        <Button variant="primary" className="w-100 mt-3" onClick={() => colorToggle(color.id)}>Toggle</Button> ) : 
        <Button variant="primary" className="w-100 mt-3">Toggle</Button> }  
        </Card.Body>
    </Card>
    </div>
  )
}

