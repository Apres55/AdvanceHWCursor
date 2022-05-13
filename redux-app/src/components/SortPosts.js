import { useSelector, useDispatch } from 'react-redux';
import { sortPosts } from '../redux/actions';

export default function SortPosts() {
  const direction = useSelector((state) => state.direction);
  const dispatch = useDispatch();
  const onSortClick = () => {
    dispatch(sortPosts());
  };

  return (
    <div className="sort-block">
      Sorted by <span>{direction}</span>
      <button onClick={onSortClick}>change direction</button>
    </div>
  );
};