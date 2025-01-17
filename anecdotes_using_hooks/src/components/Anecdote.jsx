import { useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const { id } = useParams();
  const anecdote = anecdotes.find((a) => a.id === Number(id));

  if (!anecdote) {
    return <p>Anecdote not found</p>;
  }

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>Author: {anecdote.author}</p>
      <p>Votes: {anecdote.votes}</p>
      <p>
        For more info, see{" "}
        <a href={anecdote.info} target="_blank" rel="noopener noreferrer">
          {anecdote.info}
        </a>
      </p>
    </div>
  );
};

export default Anecdote;
