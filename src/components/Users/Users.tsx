import s from './Users.module.scss';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';
import { FC } from 'react';

type PropsType = {
   totalItemsCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (pageNumber: number) => void
   users: Array<UserType>
   followingInProgress: Array<number>
   follow: (id: number) => void
   unfollow: (id: number) => void
}

let Users: FC<PropsType> = ({ totalItemsCount, pageSize, currentPage, onPageChanged, ...props }) => {
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