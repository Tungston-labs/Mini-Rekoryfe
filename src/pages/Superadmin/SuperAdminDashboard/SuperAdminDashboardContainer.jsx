import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SuperAdminDashboardView from "./SuperAdminDashboard";
import { useSuperAdminDashboard } from "../../../hooks/superadmin/useSuperAdminDashboard";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";
import ConfirmModal from "../../../components/SuperAdmin/Dashboard/ConfirmModal";

function SuperAdminDashboardContainer() {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [days, setDays] = useState(30);
    const [confirmData, setConfirmData] = useState(null);
    const [search, setSearch] = useState("");
    const pageSize = 10;
    const {
        totalCompanies,
        expiredCompanies,
        dueCompanies,
        totalPages,
        payInvoice,
        toggleCompanyStatus,
        isLoading,
        isError,
    } = useSuperAdminDashboard({
        page,
        pageSize,
        days,
        search,
    });

    const handlePayRequest = (invoiceId, companyId) => {
        setConfirmData({ invoiceId, companyId });
    };
    const handleConfirmPay = () => {
        payInvoice(confirmData.invoiceId);
        setConfirmData(null);
    };
    const debounce = (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    };

    const handleSearch = useMemo(
        () =>
            debounce((value) => {
                setSearch(value);
                setPage(1);
            }, 500),
        []
    );
    const cards = [
        {
            title: "Total Companies",
            value: isLoading ? "..." : totalCompanies,
            icon: <TbBuildingSkyscraper />,
            action: {
                icon: <FiPlus />,
                onClick: () => navigate("/superadmin/companies/add"),
            },
        },
        {
            title: "Plan Expires Count",
            value: isLoading ? "..." : expiredCompanies,
            icon: <IoMdTime />,
        },
    ];

    if (isLoading) return <div><PageSkeleton /></div>;
    return (
        <>
            <SuperAdminDashboardView
                rows={dueCompanies}
                cards={cards}
                toggleCompanyStatus={toggleCompanyStatus}
                payInvoice={handlePayRequest}
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
                onSearch={handleSearch}
                onMonthChange={(value) => {
                    setDays(value);
                    setPage(1);
                }}
            />
            {confirmData && (
                <ConfirmModal
                    onConfirm={handleConfirmPay}
                    onCancel={() => setConfirmData(null)}
                />
            )}
        </>
    );
}


export default SuperAdminDashboardContainer;
