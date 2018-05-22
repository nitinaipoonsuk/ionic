export class NavMock {

    public pop(): any {
        return new Promise(function (resolve: Function): void {
            resolve();
        });
    }

    public push(): any {
        return new Promise(function (resolve: Function): void {
            resolve();
        });
    }

    public getActive(): any {
        return {
            'instance': {
                'model': 'something',
            },
        };
    }

    public data: any;

    public setRoot(): any {
        return true;
    }

    public get(): any {
        return new Promise(function (resolve: Function): void {
            resolve();
        });
    }
}