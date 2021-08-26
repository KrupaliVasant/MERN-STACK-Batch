import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './custom.css'
import { useEffect } from 'react';
import SideBar from './SideBar';

function UserList(props) {
    let [users, setUser] = useState();

    const loadData = () => {
        axios.get(`http://localhost:7000/userdata/user`).then((res) => {
            setUser(res.data);
            console.log(res);
        })
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-contain">
                <div className="row">
                    <div className="col-md-3 col-lg-2 px-0">
                        <SideBar />
                    </div>
                    <div className="col-md-9 col-lg-10 scrolled">
                        <div className="forms-width m-3 p-3 bg-lightbrowm border-radius shadow-lg animate__animated animate__zoomIn">
                            <div className="card-header shadow text-center">
                                <h2 className="animate__animated animate__flash">List of all Users</h2>
                            </div>
                            <div className="card-body">
                                <table className="table table-lightTrasp">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Sport</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users && users.map((user) => (
                                                <tr key={user._id}>
                                                    <td>{user._id}</td>
                                                    {/* <td>{user.name} </td> */}
                                                    <td>{user.userName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.password}</td>
                                                    <td>
                                                        <NavLink className="hvr-pulse-grow" to={"/playerupdate/" + user.id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                        </svg></NavLink>
                                                        <NavLink className="ms-4 text-danger hvr-buzz-out" to="/playerdelete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                        </svg></NavLink>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UserList;