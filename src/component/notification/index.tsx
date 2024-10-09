
import "./notification.scss";

interface INotification {
    message: string;
    hasError: boolean;
}

const Notification = ({
    message,
    hasError,
}: INotification) => {

    if (!message) return null;

    return (
        <div className={`notification-container ${hasError ? 'error-notification' : 'success-notification'}`}>
            {message}
        </div>
    )
}

export default Notification;