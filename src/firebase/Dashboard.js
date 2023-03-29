import React, {useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.scss";
import { auth, db, logout } from "../Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  
  const [user, loading] = useAuthState(auth);
  
  const [name, setName] = useState("");
  
  const navigate = useNavigate();
  
  const fetchUserName = useCallback(async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      console.log("An error occured while fetching user data");
    }
  }, [user?.uid]);
  
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading, navigate, fetchUserName]);
  
  
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
export default Dashboard;