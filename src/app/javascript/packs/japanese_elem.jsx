//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

//国語
const notyet_element_jap = (
  <div>
    <img className="notyet" src="/assets/jap_coming.PNG" />
  </div>
);

//小学校国語
var japanese_elem_1 = document.getElementById("japanese_elem_1");
japanese_elem_1.addEventListener('click', function() {
  root.render(notyet_element_jap);
});

var japanese_elem_2 = document.getElementById("japanese_elem_2");
japanese_elem_2.addEventListener('click', function() {
  root.render(notyet_element_jap);
});

var japanese_elem_3 = document.getElementById("japanese_elem_3");
japanese_elem_3.addEventListener('click', function() {
  root.render(notyet_element_jap);
});

var japanese_elem_4 = document.getElementById("japanese_elem_4");
japanese_elem_4.addEventListener('click', function() {
  root.render(notyet_element_jap);
});

var japanese_elem_5 = document.getElementById("japanese_elem_5");
japanese_elem_5.addEventListener('click', function() {
  root.render(notyet_element_jap);
});

var japanese_elem_6 = document.getElementById("japanese_elem_6");
japanese_elem_6.addEventListener('click', function() {
  root.render(notyet_element_jap);
});