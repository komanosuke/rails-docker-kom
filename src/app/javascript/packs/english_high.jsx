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



//高校英語
var english_high_listening = document.getElementById("english_high_listening");
english_high_listening.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_high_reading = document.getElementById("english_high_reading");
english_high_reading.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_high_speaking = document.getElementById("english_high_speaking");
english_high_speaking.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_high_writing = document.getElementById("english_high_writing");
english_high_writing.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_high_grammar = document.getElementById("english_high_grammar");
english_high_grammar.addEventListener('click', function() {
  root.render(notyet_element_eng);
});

var english_high_voca = document.getElementById("english_high_voca");
english_high_voca.addEventListener('click', function() {
  root.render(notyet_element_eng);
});