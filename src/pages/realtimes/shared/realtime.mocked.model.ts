import { RealtimeModel, RouteModel } from '.';

let mockRoutes: RouteModel[] = [
    {
        License: 'AA-1111',
        Status: 'start',
        Speed: 0,
        StatusDate: '2015-11-06T07:21:25.510Z',
        LastDate: '2015-11-06T07:21:25.510Z',
        Address: 'Bangkok',
        CustomerBoxId: 1,
        Head: 5,
        CheckTemp1: true,
        CheckTemp2: false,
        Temp1: '10',
        Temp2: '',
        Paths: [
            {
                Lat: 19.0001,
                Lng: 105.0215
            }
        ]
    },
    { 
        License: 'BB-1212', 
        Status: 'run', 
        Speed: 90, 
        StatusDate: '2014-12-20T00:48:40.276Z', 
        LastDate: '2014-12-20T00:48:40.276Z',
        Address: 'Bangkok' ,
        CustomerBoxId: 2,
        Head: 90,
        CheckTemp1: true,
        CheckTemp2: false,
        Temp1: '-5',
        Temp2: '',
        Paths: [
            {
                Lat: 17.0001,
                Lng: 95.0215
            }
        ]

    },
    { 
        License: 'CC-2222', 
        Status: 'stop', 
        Speed: 0, 
        StatusDate: '2015-09-29T04:33:38.544Z', 
        LastDate: '2014-12-20T00:48:40.276Z',
        Address: 'Bangkok' ,
        CustomerBoxId: 3,
        Head: 0,
        CheckTemp1:true,
        CheckTemp2:false,
        Temp1: '',
        Temp2: '0',
        Paths: [
            {
                Lat: 15.0001,
                Lng: 100.0215
            }
        ]
    }
];

let realtimeModel: RealtimeModel = 
{
    RouteList: mockRoutes,
    DataAllLength: mockRoutes.length
}



export let MockedRealtime: RealtimeModel = realtimeModel;