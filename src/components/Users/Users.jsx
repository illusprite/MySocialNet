import s from './Users.module.scss';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
let Users = ({ totalItemsCount, pageSize, currentPage, onPageChanged, ...props }) => {
   return <div className={s.item}>
      <Paginator totalItemsCount={totalItemsCount}
         pageSize={pageSize}
         currentPage={currentPage}
         onPageChanged={onPageChanged} />
      {
         props.users.map(u => <User user={u}
            key={u.id} followingInProgress={props.followingInProgress}
            follow={props.follow} unfollow={props.unfollow} />)
      }
   </div>
}
export default Users;