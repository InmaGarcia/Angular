export interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Detalles;
}

export interface Detalles {
  street: string;
  city: string;
}
