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

//小学校算数
var math_elem_1 = document.getElementById("math_elem_1");
math_elem_1.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_elem_2 = document.getElementById("math_elem_2");
math_elem_2.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_elem_3 = document.getElementById("math_elem_3");
math_elem_3.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_elem_4 = document.getElementById("math_elem_4");
math_elem_4.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_elem_5 = document.getElementById("math_elem_5");
math_elem_5.addEventListener('click', function() {
  root.render(notyet_element_math);
});

var math_elem_6 = document.getElementById("math_elem_6");
math_elem_6.addEventListener('click', function() {
  root.render(notyet_element_math);
});
