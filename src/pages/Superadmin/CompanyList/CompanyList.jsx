import React,{useState} from 'react'
import PageHeader from '../../../components/SuperAdmin/PageHeader/PageHeader'
import ReusableTable from '../../../components/Table/ReusableTable';
import { useNavigate } from 'react-router-dom';
import Topbar from '../../../components/SuperAdmin/Topbar/Topbar';
import FilterBar from '../../../components/SuperAdmin/FilterBar/FilterBar';
function CompanyList() {
  const navigate = useNavigate();
    const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const data = [
    { id: 1, name: 'Company A', address: 'kochi,Ernakulam', company_id: 'uqs_arm_koc_585', contact: "9874563210", employees_count: "10" },
    { id: 2, name: 'Company B', address: 'kochi,Ernakulam', company_id: 'uqs_arm_koc_585', contact: "9874563210", employees_count: "10" },
    { id: 3, name: 'Company C', address: 'kochi,Ernakulam', company_id: 'uqs_arm_koc_585', contact: "9874563210", employees_count: "10" },
  ];

  const columns = [
    { label: 'Company Name', key: 'name' },
    { label: 'Address', key: 'address' },
    { label: 'Company Id', key: 'company_id' },
    { label: 'Contact Details', key: 'contact' },
    { label: 'No.Of Employees', key: 'employees_count' },
  ];

 const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? item.country === filter : true)
    );
  });
  const handleEdit = (row) => {
    navigate(`/superadmin/companies/edit/${row.id}`);
  };

  const handleDelete = (row) => {
    console.log('Delete clicked', row);
  };
  const handleAddCompany = () => {
    navigate('/superadmin/companies/add');
  };
  return (
    <div>
      <Topbar/>
      <PageHeader
        title="List Of All Company"
        subtitle="Manage all departments within the organization."
        rightContent={
          <button className="primary-btn" onClick={handleAddCompany}>
            + Add Company
          </button>
        }
      />
    <FilterBar
        searchValue={search}
        onSearchChange={setSearch}
        onFilterChange={setFilter}
      />
      <ReusableTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  )
}

export default CompanyList


