import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../../redux/dashboard";

export const useViewModel = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const { isLoading, responseData, error } = useSelector((state: RootState) => state.dashboard);

    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
          try {
            await dispatch(fetchDashboardData());
          } catch (error) {
            setErrorMessage("Failed to fetch vendors");
          }
        };
    
        fetchData();
      }, [dispatch]);
    
    return {
        errorMessage: error || errorMessage,
        isLoading: isLoading,
        dashboardData: responseData?.data,
    }
}