export interface ApiResponse {
    success: boolean;
    code: number;
    status_message: string | { message: string };
}

export interface INotification {
    type: 'success' | 'error' | 'info';
    message: string;
    description?: string;
}
