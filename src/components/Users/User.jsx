import s from './Users.module.scss';
import userPhoto from '../../assets/images/f330830a9bcecaa040636c4ab357277d.jpg';
import { NavLink } from 'react-router-dom';
let User = ({ user, followingInProgress, follow, unfollow }) => {
   return <div className={s.user__item}>
      <span>
         <div>
            <NavLink to={'/profile/' + user.id}>
               <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
            </NavLink>
         </div>
      </span>
      <div className={s.user__info}>
         <div>
               {user.name + " "}
               {user.status}
         </div>
         <div>
            {user.followed
               ? <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                  unfollow(user.id);

               }}>Unfollow</button>

               : <button disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                  follow(user.id);
               }}>Follow</button>
            }
         </div>
      </div>
   </div>
}
export default User;