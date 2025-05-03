import React from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './Card/CardsView';
import ListView from './List/ListView';
import products from '../products.json';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMode: 'cards',
            products: products
        };
        this.handleSwitchView = this.handleSwitchView.bind(this);
    }

    handleSwitchView() {
        this.setState(prevState => ({
            viewMode: prevState.viewMode === 'cards' ? 'list' : 'cards'
        }));
    }

    render() {
        const { viewMode, products } = this.state;
        const icon = viewMode === 'cards' ? 'view_list' : 'view_module';

        return (
            <div className="store-container">
                <IconSwitch icon={icon} onSwitch={this.handleSwitchView} />
                {viewMode === 'cards'
                    ? <CardsView cards={products} />
                    : <ListView items={products} />
                }
            </div>
        );
    }
}

export default Store;