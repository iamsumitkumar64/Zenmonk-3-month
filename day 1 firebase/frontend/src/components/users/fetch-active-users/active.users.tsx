"use client"

import ApiCallService from "@/services/http";
import { useEffect, useState } from "react"
import { ActiveUserList } from "./interface";
import './active.users.css';

export default function ActiveUsersComp() {
    const [activeUsers, setActiveUsers] = useState<ActiveUserList[]>();

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem("token");
            const result = await ApiCallService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/all_active_users`, 'GET', token || '', null);
            setActiveUsers(result.users);
        }
        fetchData();
    }, []);

    const handleDeactivate = async (uuid: string) => {
        const token = localStorage.getItem("token");
        await ApiCallService(`${process.env.NEXT_PUBLIC_BACKEND_URL}/deactivate/user/${uuid}`, 'GET', token || '', null);
        if (activeUsers?.length) {
            setActiveUsers(prevUsers => prevUsers.filter(user => user.uuid !== uuid));
        }
    }

    return (
        <>
            {activeUsers && activeUsers.map((user: ActiveUserList) => {
                return (
                    <div key={user.uuid} className="list">
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        <button onClick={() => handleDeactivate(user.uuid)}>Deactivate User</button>
                    </div>
                )
            })}
        </>
    )
}