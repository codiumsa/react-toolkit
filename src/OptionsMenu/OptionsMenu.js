import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';

/**
 * Componente que renderiza un boton de despliegue vertical. Recibe como children
 * los MenuItem que se mostraran como opciones al desplegar el menu.
 */
class OptionsMenu extends Component {
    state = {
        open: false,
        anchorEl: undefined
    };
    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };
    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        //Primero tenemos que clonar todos los elementos del menu para "aumentar" la funcion de
        //onClick para agregar el cierre del menu. Si no hacemos esto, el menu se quedara abierto
        //por mas que se haya seleccionado una de las opciones

        const clonedChildren = [];
        React.Children.forEach(this.props.children,
            (child, ii) => {
                let enhancedOnClick = _ => { this.handleRequestClose() };
                if (child.props.onClick) {
                    enhancedOnClick = _ => { child.props.onClick(); this.handleRequestClose() }
                }
                clonedChildren.push(
                    React.cloneElement(child,
                        { ...child.props, onClick: enhancedOnClick, key: ii },
                        child.props.children)
                );
            }
        );
        return (
            <div>
                <IconButton
                    aria-label="More"
                    aria-owns="long-menu"
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                >
                    {clonedChildren}
                </Menu>
            </div>
        );
    }
}

export default OptionsMenu;
