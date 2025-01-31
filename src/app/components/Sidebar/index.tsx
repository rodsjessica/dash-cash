"use client";

import { useRouter } from "next/navigation";
import { SidebarContainer, ProfileSection, MenuItem, Button } from "./styles";
import { FaUser, FaHome, FaChartLine, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  const navigateTo = (path: any) => {
    router.push(path);
  };

  return (
    <SidebarContainer>

      <ProfileSection>
        <div className="profile-pic">
          <FaUser size={40} />
        </div>
        <h3>Jessica Rodrigues</h3>
        <p>jess@example.com</p>
      </ProfileSection>

      <nav>
        <MenuItem onClick={() => navigateTo("/home")}>
          <FaHome size={20} />
          <span>Home</span>
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/dashboard")}>
          <FaChartLine size={20} />
          <span>Dashboard</span>
        </MenuItem>
      </nav>

      <Button onClick={handleLogout}>
        <FaSignOutAlt size={20} />
        <span>Logout</span>
      </Button>
    </SidebarContainer>
  );
}