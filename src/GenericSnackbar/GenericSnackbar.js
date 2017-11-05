import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actions} from 'src/actions/snackbar';

/**
 * Renderiza un snackbar con el mensaje especificado.
 *
 * @param {Object} props - Los props del componente.
 * @return {Component}
 */
const GenericSnackbar = props => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={props.showing}
        message={props.message}
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={props.onCloseSnackbar}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  showing: state.snackbar.showing,
  message: state.snackbar.message,
  messages: state.snackbar.messages
});

const mapDispatchesToProps = dispatch => ({
  onDisplayDataRequestFailed: _ => dispatch(actions.displayDataRequestFailed()),
  onDisplayUserDataRequestFailed: _ => dispatch(actions.displayUserDataRequestFailed()),
  onCloseSnackbar: _ => dispatch(actions.closeSnackbar()),
  onConcatMessageToSnackbar: message => dispatch(actions.concatMessageToSnackbar(message)),
  onFilterMessageFromSnackbar: _ => dispatch(actions.filterMessageFromSnackbar()),
  onDisplaySnackbarMessage: message => dispatch(actions.displaySnackbarMessage(message))
});

GenericSnackbar.propTypes = {
  showing: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onCloseSnackbar: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchesToProps)(GenericSnackbar);
