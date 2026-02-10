import React, { useState } from "react";
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
import logo from "../../assets/images/logo.png";
import illustration from "../../assets/images/map.png";
import { GiCube } from "react-icons/gi";
import { PiBuildings } from "react-icons/pi";
const Sidebar = () => {
    const [openCompany, setOpenCompany] = useState(false);

    return (
        <SidebarContainer>
            <TopSection>
                <LogoWrapper>
                    <Logo src={logo} alt="Rekory" />
                </LogoWrapper>

                <Menu>
                    <MenuItem to="/superadmin/dashboard">
                        <GiCube size={18} />
                        Dashboard
                    </MenuItem>

                    <MenuItem as="div" onClick={() => setOpenCompany(!openCompany)}>
                        <PiBuildings size={18} />
                        Companies
                        {openCompany ? (
                            <FiChevronUp style={{ marginLeft: "auto" }} />
                        ) : (
                            <FiChevronDown style={{ marginLeft: "auto" }} />
                        )}
                    </MenuItem>

                    {openCompany && (
                        <Dropdown>
                            <DropdownItem to="/superadmin/companies">
                                Company List
                            </DropdownItem>

                            <DropdownItem to="/superadmin/companies/add">
                                Add New Company
                            </DropdownItem>
                        </Dropdown>
                    )}
                </Menu>
            </TopSection>

            {/* BOTTOM IMAGE */}
            <BottomImage src={illustration} alt="illustration" />
        </SidebarContainer>
    );
};

export default Sidebar;
