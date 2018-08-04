import React from 'react'
import 'Components/BuyAndStore/style.scss'

export default class BuyAndStore extends React.Component{
    constructor(props) {
        super(props);
        
    }

    clickStoreHandle() {
        this.props.storeHandle();
    }

    clickBuyHandle() {
        this.props.buyHandle();
    }

    render() {
        return (
            <div className="buy-and-store-block">
                <div className="btn-item">
                    <button onClick={this.clickStoreHandle.bind(this)}>
                        {
                            this.props.isStore 
                            ?
                            "取消收藏"
                            :
                            "收藏"
                        }
                    </button>
                </div>
                <div className="btn-item">
                    <button onClick={this.clickBuyHandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }


}