import s from './Users.module.css';

let Users = (props) => {
   props.setUsers([
      {
         id:1,   
         photoUrl:'https://static5.tgstat.ru/channels/_0/37/3728e8578f53e2f9fa678cb4d0a4a955.jpg', 
         followed: true, fullName:'Alexey', status:"I'am a boss", location:{city: "Ekaterinburg", country: "Russia"}},
      {
         id:2,   
         photoUrl:'https://i.pinimg.com/236x/ed/3d/5f/ed3d5fa3cf189eb02382f3607fbcf5c8.jpg', 
         followed: false, fullName:"Anton", status:"Get stars", location:{city: "Ekaterinburg", country: "Russia"}},
      {
         id:3,   
         photoUrl:'https://i.pinimg.com/236x/6f/32/86/6f328665221792e21c97bf2efa94ef92.jpg', 
         followed: true, fullName:'Pavel', status:"I working", location:{city: "Ekaterinburg", country: "Russia"}},
      {
         id:4,   
         photoUrl:'https://www.kino-teatr.ru/movie/kadr/153511/pv_1283010.jpg', 
         followed: true, fullName:'Andrew', status:"I'am a really boss", location:{city: "Ekaterinburg", country: "Russia"}
      },
   ]);
   return <div className={s.item}>
      {
      props.users.map(u => <div key={u.id}>
         <span>
            <div>
               <img className={s.userPhoto} src={u.photoUrl} alt="" />
            </div>
            <div>
               { u.followed 
                  ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                  : <button onClick={ () => {props.follow(u.id)}}>Follow</button>
               }
            </div>
         </span>
         <span>
            <span>
               <div>{u.fullName}</div>
               <div>{u.status}</div>
            </span>
            <span>
               <div>{u.location.country}</div>
               <div>{u.location.city}</div>
            </span>
         </span>
      </div>)
      }
   </div>
};

export default Users;