let container = React.createElement(
  "div",
  {},
  React.createElement("section", { className: "section" }, [
    React.createElement(
      "p",
      { key: 1, className: "firstpara" },
      "this is a para",
    ),
    React.createElement("button", { key: 2, className: "btn" }, "Click on me"),
    React.createElement("h2", { key: 3, className: "h2" }, "subheading"),
  ]),
);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);

// root.render([
//   {
//     $$typeof: Symbol.for("react.element"),
//     key: null,
//     type: "h2",
//     props: { className: "para", children: "hello h2" },
//     ref: null,
//   },
//   {
//     $$typeof: Symbol.for("react.element"),
//     key: null,
//     type: "p",
//     props: {
//       className: "para",
//       children: {
//         $$typeof: Symbol.for("react.element"),
//         key: null,
//         type: "button",
//         props: { className: "btn", children: "Click on me button" },
//         ref: null,
//       },
//     },
//     ref: null,
//   },
// ]);
