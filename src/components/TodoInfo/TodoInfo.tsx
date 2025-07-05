import { Post } from '../../utils/interface';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<{ initialPost: Post }> = ({ initialPost }) => {
  return (
    <article
      data-id={`${initialPost.id}`}
      className={`TodoInfo ${initialPost.completed && 'TodoInfo--completed'}`}
    >
      <h2 className="TodoInfo__title">{initialPost.title}</h2>

      <UserInfo user={initialPost.user} />
    </article>
  );
};
