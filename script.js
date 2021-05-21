/* Please ❤ this if you like it! */

const TaskList = () => {
  const [tasks, setTasks] = React.useState([
  "Read a book",
  "Write some code",
  "Enjoy music"]);

  const [task, setTask] = React.useState("");
  const [error, setError] = React.useState("");

  const changeHandler = e => {
    if (e.target.value.length === 0) {
      setTask("");
      setError("");
      return;
    } else {
      setTask(e.target.value);
      setError("");
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    if (task) {
      setTasks(prevTasks => [...new Set([...prevTasks, task])]);
      setTask("");
      setError("");
    } else {
      setError("Type something to add");
      return;
    }
  };

  const deleteHandler = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("h1", null, "Task List ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-tasks" })), /*#__PURE__*/

    React.createElement("form", { onSubmit: submitHandler }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      placeholder: "Add new task...",
      onChange: changeHandler,
      value: task,
      autocomplete: "off" }),

    error && /*#__PURE__*/React.createElement("label", { className: "error" }, error)),

    tasks.length > 0 && /*#__PURE__*/
    React.createElement("ul", null,
    tasks.map((task, index) => /*#__PURE__*/
    React.createElement("li", { key: task }, /*#__PURE__*/
    React.createElement("h3", null, task.trim()), /*#__PURE__*/
    React.createElement("i", {
      className: "far fa-trash-alt",
      onClick: () => deleteHandler(index) }))))));







};

ReactDOM.render( /*#__PURE__*/React.createElement(TaskList, null), document.querySelector("#tasklist"));