import React from 'react'
import ReactSwipe from 'react-swipe'
import 'Components/Category/style.scss'
import { Link } from 'react-router-dom'

export default class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        let opt = {
            auto: 3000,
            callback: (index) => {
                this.setState({
                    index:index
                })
            }
        }
        return (
            <div className="swipe-block">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="swipe-container">
                        <Link to="/search/ktv"><div className="swipe-item">1</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">2</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">3</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">4</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">5</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">6</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">7</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">8</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">9</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">10</div></Link>
                    </div>
                    <div className="swipe-container">
                        <Link to="/search/ktv"><div className="swipe-item">a</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">2</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">3</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">4</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">5</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">6</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">7</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">8</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">9</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">10</div></Link>
                    </div>
                    <div className="swipe-container">
                        <Link to="/search/ktv"><div className="swipe-item">b</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">2</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">3</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">4</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">5</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">6</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">7</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">8</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">9</div></Link>
                        <Link to="/search/ktv"><div className="swipe-item">10</div></Link>
                    </div>
                </ReactSwipe>
                <div className="swipe-index">
                    <ul>
                        <li className={this.state.index === 0 ? 'selected' : ''}></li>
                        <li className={this.state.index === 1 ? 'selected' : ''}></li>
                        <li className={this.state.index === 2 ? 'selected' : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}