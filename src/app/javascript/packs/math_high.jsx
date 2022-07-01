//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);


//数学
const notyet_element_math = (
  <div>
    <img className="notyet" src="/assets/math_coming.PNG" />
  </div>
);


//高校数学
var math_high_1A2B = document.getElementById("math_high_1A2B");
math_high_1A2B.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_high_3C = document.getElementById("math_high_3C");
math_high_3C.addEventListener('click', function() {
  root.render(notyet_element_math);
});