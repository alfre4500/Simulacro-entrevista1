interface User {
  id: number;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "Ana", role: "admin", isActive: true },
  { id: 2, name: "Luis", role: "editor", isActive: false },
  { id: 3, name: "Carlos", role: "admin", isActive: true },
  { id: 4, name: "Sofia", role: "viewer", isActive: true },
  { id: 5, name: "Miguel", role: "admin", isActive: false }
];

// TAREA 1: Esta función debería devolver SOLO los administradores que estén activos.
function getActiveAdmins(userList: User[]) {
  return userList.filter(user => user.role === 'admin' && user.isActive === true);
}

console.log("Admins activos:", getActiveAdmins(users));