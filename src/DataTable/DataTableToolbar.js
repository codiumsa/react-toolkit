import React from 'react';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import FilterListIcon from 'material-ui-icons/FilterList';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import PropTypes from 'prop-types';

/**
 * Componente que permite extender la barra de elementos que tiene el DataTable.
 *
 * @param {Object} props
 * @return {JSX.Element}
 */
let DataTableToolbar = props => {
  const {classes} = props;
  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography type="title">{props.title}</Typography>
      </div>
      <div className={classes.spacer} />
      {props.children}
      <Tooltip title="Agregar filtro">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

DataTableToolbar.propTypes = {
  /**
   * @ignore
   */
  classes: PropTypes.any,

  /**
   * El título del DataTable.
   */
  title: PropTypes.string.isRequired,

  /**
   * Componente a renderizar como children del Toolbar. Útil para
   * renderizar botones adicionales.
   */
  children: PropTypes.element
};

const toolbarStyles = theme => ({
  spacer: {
    flex: '100 100 100%'
  },
  title: {
    flex: '0 0 auto'
  }
});

export default withStyles(toolbarStyles)(DataTableToolbar);
