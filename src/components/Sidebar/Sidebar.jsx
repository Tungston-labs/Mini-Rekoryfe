import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  SidebarContainer,
  TopSection,
  LogoWrapper,
  Logo,
  Menu,
  MenuItem,
  Dropdown,
  DropdownItem,
  BottomImage,
} from "./Sidebar.styles";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GiCube } from "react-icons/gi";
import { PiBuildings, PiUser, PiUsersThree } from "react-icons/pi";

import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/map.png";

const Sidebar = ({ role }) => {
  const location = useLocation();

  // State for dropdowns
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Menu configuration
  const menuConfig = {
    superadmin: [
      { label: "Dashboard", path: "/superadmin/dashboard", icon: <GiCube size={18} /> },
      { 
        label: "Companies", 
        path: "/superadmin/companies", 
        icon: <PiBuildings size={18} />,
        dropdown: [
          { label: "Company List", path: "/superadmin/companies" },
          { label: "Add New Company", path: "/superadmin/companies/add" },
        ]
      },
    ],
    admin: [
      { label: "Dashboard", path: "/admin/dashboard", icon: <GiCube size={18} /> },
      { label: "Employee", path: "/admin/employee", icon: <PiUser size={18} /> },
      { label: "Department", path: "/admin/department", icon: <PiUsersThree size={18} /> },
    ]
  };

  const handleToggleDropdown = (label) => {
    setOpenDropdowns(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <SidebarContainer>
      <TopSection>
        <LogoWrapper>
          <Logo src={logo} alt="Rekory" />
        </LogoWrapper>

        <Menu>
          {menuConfig[role]?.map((item, idx) => {
            const isActive = location.pathname.startsWith(item.path);
            const isOpen = openDropdowns[item.label] || false;

            return (
              <React.Fragment key={idx}>
                {item.dropdown ? (
                  <>
                    <MenuItem
                      as="div"
                      onClick={() => handleToggleDropdown(item.label)}
                      className={isActive ? "active" : ""}
                    >
                      {item.icon} {item.label}
                      {isOpen ? (
                        <FiChevronUp style={{ marginLeft: "auto" }} />
                      ) : (
                        <FiChevronDown style={{ marginLeft: "auto" }} />
                      )}
                    </MenuItem>
                    {isOpen && (
                      <Dropdown>
                        {item.dropdown.map((sub, subIdx) => {
                          const subActive = location.pathname === sub.path;
                          return (
                            <DropdownItem key={subIdx} to={sub.path} className={subActive ? "active" : ""}>
                              {sub.label}
                            </DropdownItem>
                          );
                        })}
                      </Dropdown>
                    )}
                  </>
                ) : (
                  <MenuItem to={item.path} className={isActive ? "active" : ""}>
                    {item.icon} {item.label}
                  </MenuItem>
                )}
              </React.Fragment>
            );
          })}
        </Menu>
      </TopSection>

      <BottomImage src={illustration} alt="illustration" />
    </SidebarContainer>
  );
};

export default Sidebar;
