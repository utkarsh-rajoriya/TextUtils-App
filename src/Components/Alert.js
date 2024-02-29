import React from "react";

export default function Alert(props) {
  return (
   <div style={{height: '45px'}}>
   { props.Alert && <div style={{height: '45px'}} className={`alert alert-${props.Alert.type} d-flex align-items-center`} role="alert">
      <b>Success</b>  : {props.Alert.msg}
      </div>}
      </div>
  );
}
