//propsを使ってコンポーネント化する必要あり

import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);


//英語
const notyet_element_eng = (
  <div>
    <img className="notyet" src="/assets/eng_coming.PNG" />
  </div>
);

//小学校英語
var english_elem_3_6 = document.getElementById("english_elem_3_6");
english_elem_3_6.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_elem_voca = document.getElementById("english_elem_voca");
english_elem_voca.addEventListener('click', function() {
  root.render(notyet_element_eng);
});