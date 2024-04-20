let token = localStorage.getItem("token");

const UserHerders = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
    source: "front",
};

export default UserHerders;