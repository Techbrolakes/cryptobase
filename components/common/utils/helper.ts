import { notification } from 'antd';
import { INotification } from '../types/interfaces';

const openNotification = ({ type, message, description }: INotification): void => {
    notification[type]({
        className: 'font-primary antialiased',
        description,
        duration: 5,
        message,
    });
};

const helpers = {
    openNotification,
};

export default helpers;
