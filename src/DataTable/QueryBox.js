import React from 'react';
import { withStyles } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Input from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';


const styleSheet = theme => ({
    underline: {
        '&:before': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',

        }
    },
    chip: {
        backgroundColor: theme.palette.primary['50']
    },
    avatar: {
        backgroundColor: theme.palette.primary['200']
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    filtersContainer: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
    },
    filterLabel: {
        color: 'rgba(0, 0, 0, 0.54)'
    }
});

/**
 * Componente que renderiza un toolbar con text input con el que realizar filtrados.
 * Recibe en los props el state de busqueda, con el siguiente formato:
 * {
 *  value: String, valor del input de busqueda,
 *  history: [] array con las ultimas N busquedas anteriores
 * }
 * Ademas, recibe los dispatches para:
 *  1. onQueryChanged: value => {} cuando se cambia el valor del campo de busqueda
 *  2. onQueryRequested: () => {} tiene como objetivo ser manejado por 
 *  el reducer de historico de busquedas 
 * @param {* props} props 
 */


const QueryBox = props => {
    const { classes } = props;
    return (
        <div>
            {props.queryData.generalFilter ?
                <div className={classes.filtersContainer}>
                    <Typography type="body2" className={classes.filterLabel}>Filtros aplicados</Typography>
                    <div className={classes.row}>
                        <Chip
                            avatar={<Avatar className={classes.avatar}>=</Avatar>}
                            label={
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <small style={{ fontSize: '0.7em' }}>Filtro general&nbsp;  &nbsp;</small>
                                    <span>{props.queryData.generalFilter}</span>
                                </div>
                            }
                            onRequestDelete={() => { props.onQueryChanged(''); props.onQueryRequested() }}
                            classes={{ root: classes.chip }}
                        />
                    </div>
                </div>
                :
                <Toolbar>
                    <IconButton disabled>
                        <SearchIcon />
                    </IconButton>
                    <FormControl fullWidth >
                        <Input
                            classes={{ underline: classes.underline }}
                            fullWidth
                            autoFocus
                            placeholder="Filtro general"
                            value={props.queryData.generalFilterInput}
                            onChange={event => {
                                props.onQueryChanged(event.target.value);
                            }}
                            onKeyDown={
                                event => {
                                    if (event.keyCode === 13) {
                                        props.onQueryRequested();
                                    }
                                }
                            }
                        />
                    </FormControl>
                </Toolbar>
            }
        </div>
    )
}

export default withStyles(styleSheet)(QueryBox);