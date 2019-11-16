import React from 'react';
import Aux from '../../hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';


const Layout = (props) => (
    <Aux>
        <div>toolbar, sideDrawer, backdrop</div>
        <main>
            <BurgerBuilder/>
            {props.children}
        </main>
    </Aux>
)

export default Layout;