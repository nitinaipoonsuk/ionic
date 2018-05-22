export class ListModel {
    Id: number;
    Name: string;
    CheckBoxSelect?: boolean = false;
    
}

export class ListPagingModel {
    ListModels: ListModel[] = [];
    DataAllLength: number = 0;
}