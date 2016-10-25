import React from "react";

export const NoteKey = ({note, pressed}) => (
    <li className={ pressed ? "pressed key" : "key"}>{note}</li>
  );
