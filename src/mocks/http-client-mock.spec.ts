import { Observable } from 'rxjs/Observable';
import { MockedRealtime, RouteModel } from '../pages/realtimes';
import { MockReportSelect } from '../pages/report-select-license'
import { MockSettingreportModel } from '../pages/settingreport'
import { MockedHistory } from '../pages/histories/shared'
import { MockGroupList } from '../pages/change-group'
import { ResponseModel } from './response.model'
import { MockedLicenstList, ListPagingModel } from '../pages/shared'

export class HttpClientMock {

    get(url: string): Observable<Response> {
        if (url.includes('realtime/get/paging'))
            return this.setResponse(MockedRealtime);
        if (url.includes('realtime/get/alone')) {
            let mock = new RouteModel();
            mock.License = 'AA-1111'
            mock.Status = 'start'
            mock.Speed = 0
            mock.StatusDate = '2015-11-06T08:00:00.510Z'
            mock.Address = 'Bangkok'
            mock.CustomerBoxId = 1
            mock.Head = 5
            mock.CheckTemp1 = true
            mock.CheckTemp2 = false
            mock.Temp1 = '10'
            mock.Temp2 = ''
            mock.Paths = [
                {
                    Lat: 19.0101,
                    Lng: 106.0015
                }]
            return this.setResponse(mock);
        }
        if (url.includes('history/get/paging/th')) {
            return this.setResponse(MockedHistory);
        }
        if (url.includes('history/get/paging/en')) {
            let mock = MockedHistory;
            mock.HistoryEvents.forEach((h) => [
                h.Address = 'en'
            ])
            return this.setResponse(mock);
        }

        if (url.includes('vehicle/GetLicenseList/paging')) {
            let mock: ListPagingModel = {
                DataAllLength: 5,
                ListModels: MockedLicenstList
            }
            return this.setResponse(mock);
        }

        if (url.includes('vehicle/getVehicleGroupList/paging')) {
            return this.setResponse(MockGroupList);
        }

        return new Observable();
    }

    private setResponse(data): any {
        let resp = new ResponseModel();
        resp.Status = 200;
        resp.Body = data;
        return new Observable(observer => {
            observer.next(resp);
        });
    }

    post(url: string, data: any): Observable<Response> {
        if (url.includes('Account/changePassword')) {
            console.log(data.CurrentPassword);
            
            if (data.CurrentPassword == "123456")
                return this.setResponse(true);
            else
                return this.setResponse(false);
        }
        return new Observable();
    }

    put(url: string, data: any): Observable<Response> {
        if (url.includes('Report/GetVehicleSummaryList')) {
            return this.setResponse(MockReportSelect);
        }
        if (url.includes('Vehicle/GetVehicleSettingList')) {
            return this.setResponse(MockSettingreportModel);
        }
        if (url.includes('Vehicle/EditVehicleSettingList')) {
            return this.setResponse('Update Success');
        }
        return new Observable();
    }

    delete(url: string): Observable<Response> {
        return new Observable();
    }
}