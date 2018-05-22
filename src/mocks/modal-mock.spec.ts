export class ModalMock {
    public create(): any {
        return new Promise((resolve: Function) => {
            resolve();
        });
    }
}