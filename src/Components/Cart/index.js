import React, {Component} from 'react';
import styles from './styles.js';
import Counter from './counter.js';
const data = require('../../mockData.json');


export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: {
                items: [],
            }
        };
    }

    calculateTotal() {
        let total = 0;
        this.state.cart.items.map(item => {
            total += parseInt(item.qty)*parseInt(item.price);
            return item;
        });
        return total;
    }
    
    increaseQty(item){
        let c = this.state.cart;
        c.items.map(i => {
            console.log("Item i", i, item);
            if(i.id === item.id){
                console.log("Item qty", i);
                i.qty++;
            }
            return i;
        });
        this.setState({cart: c});
    }

    decreaseQty(item){
        let c = this.state.cart;
        let j = -1;
        c.items.map((i, index) => {
            if(i.id === item.id){
                console.log("Item qty", i);
                i.qty--;
            }
            if(i.qty === 0){
                j = index;
            }
            return i;
        });
        if(j !== -1){
            c.items.splice(j, 1);
        }
        this.setState({cart: c});
    }

    isCartEmpty() {
        const {cart} = this.state;
        return cart.items.length === 0;
    }

    isItemAlreadyinCart(item) {
        const {cart} = this.state;
        if(!cart.items.length) {
            return false;
        }
        return cart.items.find(element => element.id === item.id)
    }

    onBuyPress(item) {
        const {cart } = this.state;
        if(cart.items.length) {
            if(this.isItemAlreadyinCart(item)){
                let c = cart;
                const index = c.items.indexOf(item);
                c.items.splice(index, 1);
                this.setState({
                    cart: c
                });
                return;
            }
        }
        let c = cart;
        let i = item;
        i.qty = 1;
        c.items.push(i);
        this.setState({cart:c});
    }

    renderItemList() {
        console.log(data);
        return(
                data.data.map(item => (
                    <div key={item.id}>
                    <div style={styles.itemHeader}>
                        {item.header}
                    </div>
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
                                onClick={() => this.onBuyPress(item)}
                            >
                                {this.isItemAlreadyinCart(item) ? "Cancel" : "Buy"}
                            </button>
                            <div style={styles.date}>
                                Closing on
                                <div>{item.closingDate}</div>
                            </div>
                            
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
                            ) : 
                            (
                                this.state.cart.items.map(
                                    (item) => 
                                        (
                                            <div key={item.id} style={styles.cartItem}>
                                                <div style={styles.cartItemName}>
                                                    {item.title}
                                                </div>
                                                <div style={styles.calculation}>
                                                    <Counter 
                                                        item = {item}
                                                        increaseQty = {(item)=> this.increaseQty(item)}
                                                        decreaseQty = {(item)=> this.decreaseQty(item)}
                                                    />
                                                    <div style={styles.cartItemPrice}>
                                                        {`x ₹${item.price}`}
                                                    </div>
                                                    <div style={styles.cartFinalPrice}>
                                                        {`₹${parseInt(item.qty)*parseInt(item.price)}`}
                                                    </div>
                                                </div>
                                                <div style={styles.separator} />
                                            </div>
                                        )
                                )
                            )
                    }
                </div>
                {
                    this.isCartEmpty() ? null
                     : (
                         <div>
                            <div style={styles.total}>
                                <div style={styles.subtotalText}>Subtotal</div>
                                <div style={styles.subtotalText}>{`₹ ${this.calculateTotal()}`}</div>
                            </div>
                            <div style={styles.continueButton}>
                                <button>Continue</button>
                            </div>
                        </div>
                        )
                }
            </div>
        );
    }
    
    render() {
        return(
            <div style={styles.container}>
            {this.renderItems()}
            {this.renderSummary()}
        </div>
        );
    }
}