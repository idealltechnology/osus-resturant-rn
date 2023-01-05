export interface Model {
  _id: string;
  tableNumber: string;
  place?: string;
  capacity?: number;
  status?: 'open' | 'occupied' | 'reserved';
}
