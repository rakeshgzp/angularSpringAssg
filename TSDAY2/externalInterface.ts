export interface IStudent {
    assign_data(id: number, name: string, stream: string): void;
    display(): void;

}

export interface IBank {
    assign_data(account_no: number, name: string, balance: number): void;
    display(): void;

}
