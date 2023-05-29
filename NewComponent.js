const { createElement } = React;

const NewComponent = () => {
  const handleNewButtonClick = () => {
    const oldComponent = document.getElementById("old");
    oldComponent.updateFromNewComponent("Message from NewComponent");
  };

  return createElement(
    "div",
    null,
    createElement("h1", null, "New Component (React)"),
    createElement(
      "button",
      { onClick: handleNewButtonClick },
      "Update Old Component"
    )
  );
};