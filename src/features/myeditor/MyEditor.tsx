import React from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setEditorState, selectEditorState } from "./myeditorSlice";

import { Editor } from "draft-js";
import styles from "./MyEditor.module.css";

const MyEditor = () => {
  const editorState = useAppSelector(selectEditorState);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.wrapper}>
      <Editor
        editorState={editorState}
        onChange={(editorState) => dispatch(setEditorState(editorState))}
      />
    </div>
  );
};

export default MyEditor;
