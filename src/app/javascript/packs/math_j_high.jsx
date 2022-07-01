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


//中学校数学
var math_j_high_1 = document.getElementById("math_j_high_1");
math_j_high_1.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_j_high_2 = document.getElementById("math_j_high_2");
math_j_high_2.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_j_high_3 = document.getElementById("math_j_high_3");
math_j_high_3.addEventListener('click', function() {
  root.render(notyet_element_math);
});