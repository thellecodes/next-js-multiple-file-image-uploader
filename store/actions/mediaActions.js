import { ADD_FILE_TO_LIST } from "./types";
import axios from "axios";

export const uploadAction = (mediaFiles) => async (dispatch, getState) => {
  const data = getState().media;

  let files = [mediaFiles];

  if (files && files.length > 0) {
    const existingFiles = data.fileList.map((f) => f.name);

    files = files.filter((f) => !existingFiles.includes(f.name));

    return dispatch({ type: ADD_FILE_TO_LIST, payload: files });
  }
};

export const sendAction = () => async (dispatch, getState) => {
  const files = getState().media.fileList;

  var form = new FormData();

  console.log(files)
  if (files.length > 0) {
    files.forEach((file) => form.append("media", file));
  }

  await axios(`/api/upload`, {
    method: "POST",
    data: form,
    "content-type": "multipart/form-data",
  }).then((res) => {
    console.log(res);
  });
};
