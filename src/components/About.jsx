
import React, { useState } from 'react';
import './About.css';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
     <div className="container my-4">
        <h1>About Us</h1>
    <div className={darkMode ? 'about-page dark-mode' : 'about-page light-mode'}>
     

        <div className="accordion">
            
          <details className="accordion-item" name="accordionExample">
            <summary className="accordion-header">
              Accordion Item #1
            </summary>
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong>
              {' '}You can put any content here.
            </div>
          </details>

          <details className="accordion-item" name="accordionExample">
            <summary className="accordion-header">
              Accordion Item #2
            </summary>
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong>
              {' '}This is the content of the second item.
            </div>
          </details>

          <details className="accordion-item" name="accordionExample">
            <summary className="accordion-header">
              Accordion Item #3
            </summary>
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong>
              {' '}This is the content of the third item.
            </div>
          </details>
        </div>
 <button
          className="btn btn-primary my-4"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </button>
        
      </div>
     
    </div>
  );
}
