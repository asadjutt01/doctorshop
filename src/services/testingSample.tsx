// // src/components/UserList.tsx
// import React, { useEffect, useState } from 'react';
// import { getUsers, User } from './User/userService';

// const UserList: React.FC = () => {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const usersData = await getUsers();
//                 setUsers(usersData);
//             } catch (err) {
//                 setError('Failed to fetch users');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <ul>
//             {users.map((user) => (
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//     );
// };

// export default UserList;
