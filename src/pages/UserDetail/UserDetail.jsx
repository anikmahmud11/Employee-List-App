import React from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";

const UserDetail = () => {
  const { id } = useParams();
  const userId = parseInt(id);

  return (
    <div>
      <Navbar />
      <UserDetailsCard userId={userId} />
      <Footer />
    </div>
  );
};

export default UserDetail;
