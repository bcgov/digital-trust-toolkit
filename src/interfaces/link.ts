export interface Link {
    id: string;
    name: string;
    to: string;
    label: string;
    description?: string;
    order?: number;
}