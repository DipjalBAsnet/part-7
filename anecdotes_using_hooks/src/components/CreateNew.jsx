import { useField } from "../hooks";
import { useNavigate } from "react-router-dom";

const CreateNew = ({ addNew, setNotification }) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.field.value,
      author: author.field.value,
      info: info.field.value,
      votes: 0,
    });
    setNotification(`Anecdote '${content.field.value}' created!`);
    setTimeout(() => setNotification(""), 5000);

    content.reset();
    author.reset();
    info.reset();

    navigate("/");
  };

  const handleReset = () => {
    content.reset();
    author.reset();
    info.reset();
  };

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content.field} />
        </div>
        <div>
          author
          <input {...author.field} />
        </div>
        <div>
          url for more info
          <input {...info.field} />
        </div>
        <button type="submit">Create</button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
