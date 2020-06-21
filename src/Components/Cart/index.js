import React, {Component} from 'react';
// import styles from '../../styles.module.css';
import styles from './styles.js';
const data = require('../../mockData.json');


export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: {
                itemNames: [],
                qty: []
            }
        };
    }

    isCartEmpty() {
        const {cart} = this.state;
        return cart.itemNames.length === 0;
    }

    renderItemList() {
        console.log(data);
        return(
                data.data.map(item => (
                    <div style={styles.itemCell}>
                        <div style={styles.cellBigPart}>
                            <div style={styles.titleStrip}>
                                {item.title}
                            </div>
                            <div style={styles.description}>
                                {item.description}
                            </div>
                        </div>
                        <div style={styles.cellSmallPart}>
                            <div style={styles.price}>{`₹ ${item.price}`}</div>
                            <button 
                                style={styles.buyButton}
                                onClick={this.onBuyPress}
                            >
                                Buy
                            </button>
                            <div style={styles.date}>
                                Closing on
                                <div>{item.closingDate}</div>
                            </div>
                            
                        </div>
                    </div>
                ))
        );

    }

    renderItems() {
        return(
            <div style={styles.totalContainer}>
                <div style={styles.totalSubHeader}>
                    Choose Ticket
                </div>
                {this.renderItemList()}
            </div>
        );
    }

    renderSummary() {
        return(
            <div style={styles.summaryContainer}>
                <div style={styles.subHeader}>
                    Summary
                </div>
                <div style={styles.summaryBody}>
                    {
                        this.isCartEmpty() ? 
                            (
                                <div style={styles.emptySummary}>
                                    No Tickets Chosen Yet!
                                </div>
                            ) : null
                    }
                </div>
            </div>
        );
    }
    
    render() {
        console.log("Data....", data);
        return(
            <div style={styles.container}>
            {this.renderItems()}
            {this.renderSummary()}
        </div>
        );
    }
}