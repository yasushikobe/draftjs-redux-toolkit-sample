import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { EditorState } from "draft-js";

export interface MyeditorState {
  editorState: EditorState;
}

const initialState: MyeditorState = {
  editorState: EditorState.createEmpty(),
};

export const myeditorSlice = createSlice({
  name: "myeditor",
  initialState,
  reducers: {
    setEditorState: (states, action) => {
      states.editorState = action.payload;
    },
  },
});

export const { setEditorState } = myeditorSlice.actions;
export const selectEditorState = (state: RootState) =>
  state.myeditor.editorState;

export default myeditorSlice.reducer;
