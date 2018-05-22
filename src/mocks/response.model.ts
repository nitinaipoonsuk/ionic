

export class ResponseModel {
    bodyUsed: boolean;
    
    json() {
        return this.Body;
    }

    public Status: number;
    public Body: any;
}