import {
  EDIT_BEGIN,
  EDIT_END,
  EDIT_FETCH_PROGRESS,
  EDIT_FETCH_COMPLETE,
  LINK_BEGIN,
  LINK_END,
  LINK_PROGRESS
} from '../constants/modals';

export function initiateEdit() {
  return {
    type: EDIT_BEGIN
  };
}

export function fetchContent() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: EDIT_FETCH_COMPLETE
      })
    }, 2000);

    dispatch({
      type: EDIT_FETCH_PROGRESS
    });
  }
}

export function terminateEdit() {
  return {
    type: EDIT_END
  };
}

export function initiateLink() {
  return {
    type: LINK_BEGIN
  };
}

export function saveLink() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: LINK_END
      });
    }, 5000);

    dispatch({
      type: LINK_PROGRESS
    });
  };
}

export function endLink() {
  return {
    type: LINK_END
  };
}
