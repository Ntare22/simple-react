import React, { useState } from "react";
import styles from "../TodoItem.module.css";

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const handleEditing = () =>
    setEditing({
      editing: true,
    });

  const handleUpdatedDone = (event) => {
    console.log(event.key);
    console.log(editing);
    if (event.key === "Enter") {
      setEditing({ editing: false });
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={props.todo.completed}
          onChange={() => props.handleChangeProps(props.todo.id)}
        />
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={props.todo.title}
        onChange={(e) => {
          props.setUpdate(e.target.value, props.todo.id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

// import React, { Component } from "react";
// import styles from "../TodoItem.module.css";

// const completedStyle = {
//   fontStyle: "italic",
//   color: "#595959",
//   opacity: 0.4,
//   textDecoration: "line-through",
// };

// export default class TodoItem extends Component {
//   handleEditing = () => {
//     console.log("edit mode activated");
//   };
//   render() {
//     return (
//       <li className={styles.item}>
//         <div onDoubleClick={this.handleEditing}>
//           <input
//             type="checkbox"
//             className={styles.checkbox}
//             checked={this.props.todo.completed}
//             onChange={() =>
//               this.stateprops.handleChangeProps(this.props.todo.id)
//             }
//           />
//           <button
//             onClick={() => this.props.deleteTodoProps(this.props.todo.id)}
//           >
//             Delete
//           </button>
//           <span style={this.props.todo.completed ? completedStyle : null}>
//             {this.props.todo.title}
//           </span>
//         </div>
//       </li>
//     );
//   }
// }

export default TodoItem;
