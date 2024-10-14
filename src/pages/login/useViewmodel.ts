import { useState } from "react";
import { z } from "zod";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { userLogin } from "../../redux/auth";
import { AppDispatch } from "../../redux/store";
import { formatFormDataErrors } from "../../utils/formatter";
import { defaultErrorMessage } from "../../utils/helper";

interface ILogin {
    email: string;
    password: string;
}

const initialFormData: ILogin = {
    email: "",
    password: "",
}

const loginSchema = z.object({
    email: z.string().email("Email  must be valid"),
    password: z.string().nonempty("Password is required"),
});

export const useViewModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<ILogin>(initialFormData);
    const [formDataError, setFormDataError] = useState<ILogin>(initialFormData);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const handleLogin = async () => {
        setFormDataError(initialFormData);
        setErrorMessage("");
        setIsLoading(true);

        const validation = loginSchema.safeParse(formData);

        if (!validation.success) {
            const formattedErrors = formatFormDataErrors(validation.error, initialFormData);
            setFormDataError(formattedErrors);
            return;
        }

        try {
            const response = await dispatch(userLogin(formData)).unwrap();
            if (response?.statusCode === 200) {
                if (response?.data?.email === formData?.email) {
                    Cookies.set("auth", JSON.stringify(response?.data), {
                        expires: 60 * 9
                    });
                    navigate("/dashboard");
                } else {
                    setErrorMessage("Invalid email and password");
                }
            } 
            setIsLoading(false);
        } catch (err) {
            const error = (err as Error).message || defaultErrorMessage
            setErrorMessage(error);
            setIsLoading(false);
        }
    }

    return {
        formData: formData,
        formDataError: formDataError,
        errorMessage: errorMessage,
        isLoading: isLoading,
        setFormData: setFormData,
        handleLogin: handleLogin,
    }
}