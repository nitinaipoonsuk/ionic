import { InfoModel } from '../index';

export class StatusService {
    private degree: number[] = [];

    constructor() {
        for (let i = 0; i < 360;) {
            this.degree.push(i);
            if (i % 3 === 0) {
                i = i + 22;
            }
            else {
                i = i + 23;
            }
        }
    }

    getIconUrl(data: InfoModel): string {
        let url = './assets/images/status_images/';
        switch (data.Status) {
            case 'Running':
                url += 'run_' + this.getHeadNumber(data.Head, this.degree) + '.png';
                break;
            case 'Overspeed':
                url += 'ovs_' + this.getHeadNumber(data.Head, this.degree) + '.png';
                break;
            case 'IdlingStart':
                url += 'Idling.png';
                break;
            default: url += data.Status + '.png';
                break;
        }
        return url;
    }

    private getHeadNumber(data: number, degree): number {
        for (var head = data; !degree.includes(head); head--) {

        }
        return head;
    }

    private checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }
}