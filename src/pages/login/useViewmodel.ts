import { useState } from "react";
import { z } from "zod";
import { formatFormDataErrors } from "../../utils/formatter";

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
    const [formData, setFormData] = useState<ILogin>(initialFormData);
    const [formDataError, setFormDataError] = useState<ILogin>(initialFormData);
    
    const handleLogin = () => {
        setFormDataError(initialFormData);

        const validation = loginSchema.safeParse(formData);

        if (!validation.success) {
            const formattedErrors = formatFormDataErrors(validation.error, initialFormData);
            setFormDataError(formattedErrors);
            return;
        }
    }

    return {
        formData: formData,
        formDataError: formDataError,
        setFormData: setFormData,
        handleLogin: handleLogin,
    }
}