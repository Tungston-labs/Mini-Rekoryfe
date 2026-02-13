import React, { useState } from "react";
import PageHeader from "../../../components/SuperAdmin/PageHeader/PageHeader";
import ReusableTable from "../../../components/Table/ReusableTable";
import { useNavigate } from "react-router-dom";
import Topbar from "../../../components/SuperAdmin/Topbar/Topbar";
import FilterBar from "../../../components/SuperAdmin/FilterBar/FilterBar";
import { useCompanies } from "../../../hooks/superadmin/useCompanies";
import PageSkeleton from "../../../components/Skeleton/PageSkeleton";
import { useDebounce } from "../../../hooks/superadmin/useDebounce";
import { useDeleteCompany } from "../../../hooks/superadmin/useDeleteCompany";
function CompanyList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { data, isLoading, isError } =
    useCompanies(debouncedSearch, page, pageSize);

  const { mutate: deleteCompanyMutate, isPending: isDeleting } =
    useDeleteCompany();
  const columns = [
    { label: "Company Name", key: "company_name" },
    { label: "Address", key: "address" },
    { label: "Email Id", key: "email" },
    { label: "Contact Details", key: "contact_number" },
    { label: "No.Of Employees", key: "no_of_employees" },
  ];

  const handleEdit = (row) => navigate(`/superadmin/companies/edit/${row.id}`);
  const handleDelete = (row) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      deleteCompanyMutate(row.id);
    }
  };
  const handleAddCompany = () => navigate("/superadmin/companies/add");
  const handleRowClick = (row) => navigate(`/superadmin/companies/info/${row.id}`);

  if (isLoading) return <div><PageSkeleton /></div>;
  if (isError) return <div>Error fetching companies</div>;

  return (
    <div>
      <Topbar />
      <PageHeader
        title="List Of All Companies"
        subtitle="Manage all departments within the organization."
        rightContent={
          <button className="primary-btn" onClick={handleAddCompany}>
            + Add Company
          </button>
        }
      />
      <FilterBar
        searchValue={search}
        onSearchChange={(val) => {
          setSearch(val);
          setPage(1);
        }}
        onFilterChange={setFilter}
      />
      <ReusableTable
        columns={columns}
        data={data.results}
        onRowClick={handleRowClick}
        onEdit={handleEdit}
        onDelete={handleDelete}
        pagination={{
          currentPage: data?.current_page,
          totalPages: data?.total_pages,
          onPageChange: setPage,
        }}
      />
    </div>
  );
}

export default CompanyList;
