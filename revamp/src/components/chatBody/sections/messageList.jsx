import './style.css'
import UserCard from "../components/userCards";

export default function MessageList(){
    return (
        <>
        <div className="UserList">
        <UserCard/>
        <UserCard/>
        <UserCard/>
        </div>
        </>
    );
}