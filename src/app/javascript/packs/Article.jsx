import React from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'


const Article = () => {
    return (
        <ul id="subjects">
            <li class="science_school">
            <a href="4_science_elem.html">小学校理科</a>
            </li>
            <li class="science_school">
            <a href="4_science_j_high.html">中学校理科</a>
            </li>
            <li class="science_school">
            <a href="4_science_high.html">高校理科</a>
            </li>
        </ul>
    );
};

export default Article;