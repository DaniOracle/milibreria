import React from "react";
import DanielPN, { DanielPNProps } from "../DanielPN";

function Example(props: DanielPNProps) {
  return (
    <DanielPN
      open={props.open}
      onClose={props.onClose}
      title={props.title}
      content={props.content}
      titleSx={props.titleSx}
      contentSx={props.contentSx}
      dialogSx={props.dialogSx}
      width={props.width} 
      height={props.height}
    />
  );
}

export default Example;
