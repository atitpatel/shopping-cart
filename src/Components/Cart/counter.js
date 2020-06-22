import React, {PureComponent} from 'react';


export default class Counter extends PureComponent {
    render() {
        const {item, increaseQty, decreaseQty} = this.props;
        const styles = {
            container: {
                height: '60%',
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                width: '40%'
            },
            minusButton: {
                flex: 1,
                borderRadius: '10px 0 0 10px',
                border: '1px transparent',
                color: '#5BB0AD'
            },
            rightButton: {
                flex: 1,
                borderRadius: '0 10px 10px 0px',
                color: '#5BB0AD',
                border: '1px transparent'
            },
            qtySection: {
                flex: 1,
                backgroundColor: '#5BB0AD',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                padding: 5
            }
        };

        return(
            <div style={styles.container}>
                <button onClick={() => decreaseQty(item)} style={styles.minusButton}>
                    -
                </button>
                <div style={styles.qtySection}>
                    {item.qty}
                </div>
                <button onClick={() => increaseQty(item)} style={styles.rightButton}>
                    +
                </button>
            </div>
        );
    }

}