import DeletePost from "./delete";
import Completed from "./completed";

export default function Post({ id, title, content, genre }) {
  return (
    <div className="post">
      <div className="postTitle">{title}</div>
      <div className="postContent">{content}</div>
      <div className="genre">{genre}</div>

      <div className="actions">
        <DeletePost id={id} />
        <Completed id={id} />
      </div>
    </div>
  );
}
