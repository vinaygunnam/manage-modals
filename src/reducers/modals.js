import {
  EDIT_BEGIN,
  EDIT_END,
  EDIT_FETCH_PROGRESS,
  EDIT_FETCH_COMPLETE,
  LINK_BEGIN,
  LINK_END,
  LINK_PROGRESS
} from '../constants/modals';

const initialState = {
  edit: {
    visible: false
  },
  link: {
    visible: false
  }
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case EDIT_BEGIN:
      return {
        ...state,
        edit: {
          ...state.edit,
          visible: true,
          loading: false
        }
      };
    case EDIT_FETCH_PROGRESS:
      return {
        ...state,
        edit: {
          ...state.edit,
          visible: true,
          loading: true
        }
      };
    case EDIT_FETCH_COMPLETE:
      return {
        ...state,
        edit: {
          ...state.edit,
          visible: true,
          loading: false
        }
      };
    case EDIT_END:
      return {
        ...state,
        edit: {
          ...state.edit,
          visible: false,
          loading: false
        }
      };
    case LINK_BEGIN:
      return {
        ...state,
        link: {
          ...state.link,
          visible: true,
          loading: false
        }
      };
      case LINK_PROGRESS:
        return {
          ...state,
          link: {
            ...state.link,
            visible: true,
            loading: true
          }
        };
        case LINK_END:
          return {
            ...state,
            link: {
              ...state.link,
              visible: false,
              loading: false
            }
          };
    default:
      return state;
  }
}
