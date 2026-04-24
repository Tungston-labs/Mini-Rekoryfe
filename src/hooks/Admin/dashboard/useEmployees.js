import { useEffect, useState } from "react";
import { getEmployees} from "../../../services/Admin/dashboardService";

const useEmployees = (status) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await getEmployees(status);
      setEmployees(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [status]);

  return { employees, loading, refetch: fetchEmployees };
};

export default useEmployees;