import { ADD_FILE_TO_LIST } from "../actions/types";

const initialState = {
  fileList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILE_TO_LIST:
      return {
        ...state,
        fileList: state.fileList.concat(payload),
      };
    default:
      return state;
  }
};
