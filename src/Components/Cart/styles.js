const styles = {
    container: {
        backgroundColor: '#E8E8E8',
        display: 'flex',
        flexDirection: 'row'
    },
    totalContainer: {
        width: '60%',
        height: '100%',
        margin: 50,
        padding: '0 0 20px 0',
        backgroundColor: 'white', 
        borderRadius: 15, 
        border: '1px transparent', 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },

    summaryContainer: {
        width: '30%',
        height: '80%',
        margin: 50,
        backgroundColor: 'white', 
        borderRadius: 15, 
        border: '1px transparent', 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    subHeader: {
        height: 50,
        borderRadius: '15px 15px 0 0',
        margin: 'auto',
        padding: '30px 0px 0px 20px',
        border: '1px 1px 0 0 transparent',
        backgroundColor: '#F7F8F7',
        borderColor: 'transparent'
    },
    totalSubHeader: {
        height: 70,
        borderRadius: '15px 15px 0 0',
        margin: 'auto',
        padding: '35px 0px 0px 25px',
        border: '1px 1px 0 0 transparent',
        backgroundColor: '#F7F8F7',
        borderColor: 'transparent'
    },
    emptySummary: {
        height: 300,
        fontSize: 18,
        padding: '50px 0 0 0',
        textAlign: 'center',
        color: '#B1B1B1'
    },
    itemCell: {
        display: 'flex',
        height: '30%',
        flexDirection: 'row',
        margin: '20px 30px 20px 30px',
        borderRadius: 15, 
        border: '1px transparent', 
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    },
    cellBigPart: {
        width: '70%',
        borderRadius: '15px 0 0 15px',
        backgroundColor: '#F7F8F7'
    },
    titleStrip: {
        height: '25%',
        backgroundColor: '#E6E6E6',
        padding: '10px 0 0 20px',
        borderRadius: '15px 0 0 0',
        overflow: 'hidden'
    },
    description: {
        display: 'flex',
        flex: 1,
        fontSize: 15,
        color: '#C9C9C9',
        backgroundColor: '#F7F8F7',
        padding: 20,
        borderRadius: '0 0 0 15px',
        overflow: 'hidden'
    },
    cellSmallPart: {
        width: '30%',
        backgroundColor: '#5BB0AD',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0 15px 15px 0',
        padding: 10
    },
    price: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
    buyButton: {
        height: 35,
        margin: '10px 0 10px 0',
        borderRadius: 10,
        border: '0.5px transparent',
        width: 70
    },
    date: {
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 15px 0'
    }
};

export default styles;


