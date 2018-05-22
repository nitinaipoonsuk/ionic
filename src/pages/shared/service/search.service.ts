import * as moment from 'moment/moment';
import Enumerable from 'linq';
import { Translations } from '../translate';
import { DataTableResource } from 'angular-2-data-table';
import { Observable } from 'rxjs/Rx';
//import { ToolHelper } from '.'

export class SearchService {

    private static timer = Observable.timer(700, 500);

    private static subScription;

    public static searchObjectArr<T>(val: string, models: T[]) {
        let valArr = val.split(' ');
        let data = Enumerable.from(models);
        valArr.forEach(v => {
            data = data.where(r => this.searchObj(r, v));
        })
        return data.toArray()
    }

    private static searchObj(obj: Object, val: string): boolean {
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && obj[key]) {

                if (obj[key].toString().toLowerCase().includes(val.toLowerCase())) //search word in Object
                    return true;

                if (Translations.language[obj[key]] && Translations.language[obj[key]].includes(val)) //search status language
                    return true;

                if (this.setFormatDateTostring([obj[key]].toString()).includes(val))  //search date by string
                    return true;

                if (val.length > 2 && val[1] == 's' && !isNaN(+ val.substring(2)) && key == 'Speed') { //search >,< Speed

                    if (val[0] == '<' && +obj[key] < +val.substring(2))
                        return true;
                    if (val[0] == '>' && +obj[key] > +val.substring(2))
                        return true;
                }

                if (val.length > 2 && val[1] == 'd' && key == 'StatusDate') { //search >,< StatusDate
                    let date = new Date(moment([obj[key]].toString()).format())
                    console.log([obj[key]].toString());

                    console.log(date);




                    let dateSearch: Date;
                    let dateArr = val.substring(2).split('/');

                    if (!isNaN(+ val.substring(2)))
                        dateSearch = new Date(
                            new Date(
                                new Date()
                                    .setDate(+ val.substring(2)))
                                .setHours(0, 0, 0));

                    else if (dateArr && dateArr.length == 2 && !isNaN(+ dateArr[0]) && !isNaN(+ dateArr[1]))
                        dateSearch = new Date(
                            new Date(
                                new Date(
                                    new Date()
                                        .setDate(+ dateArr[0]))
                                    .setHours(0, 0, 0))
                                .setMonth((+dateArr[1]) - 1));

                    else
                        return false;

                    if (val[0] == '<' && date < dateSearch)
                        return true;
                    if (val[0] == '>' && date > dateSearch)
                        return true;

                }
            }
        }
        return false;
    }

    private static setFormatDateTostring(date: string): string {
        let dateFormat = new Date(date);
        return moment.utc(date).format('DD/MM/YYYY HH:mm');
    }
}