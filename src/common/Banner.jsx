import React, {Component} from "react"
import { Link } from 'react-router';
import {Layout} from 'antd'


export default class Banner extends Component {

    render() {
        return (
            <div className="banner">
                <div className="container">

                        <div className="flexslider">
                            <div className="flex-viewport">
                                <ul className="slides">
                                    <li className="clone">
                                        <div className="banner-info">
                                            <div className="banner-info-left">
                                                <h1>在这里，我们一起当学霸</h1>
                                                <p>css3动画效果的强大不言而喻，自它出现一直热度不减，它与js动画的优劣也一直成为前端界争论的话题，不可置疑的是css3动画的出现在一定程度上降低了动画效果的实现难度，利于前端的学习</p>

                                            </div>
                                        </div>
                                    </li>
                                   

                                </ul>
                            </div>


                        </div>

                </div>
            </div>
        )
    }
}

