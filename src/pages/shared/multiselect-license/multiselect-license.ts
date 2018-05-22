import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnInit
} from '@angular/core';

import {
  Alert,
  InfiniteScroll,
  ToastController
} from 'ionic-angular';

import { Observable } from 'rxjs/Rx';

import {
  LicenseSearchService,
  ToolHelper,
  Translations,
  SearchService,
  ListModel,
  ListPagingModel
} from '../../shared';
import { HeaderGroupSearchPage } from '../../header-group-search/header-group-search';

@Component({
  selector: 'multiselect-license',
  templateUrl: 'multiselect-license.html',
  providers: [LicenseSearchService]
})
export class MultiselectLicenseComponent implements OnInit {

  @Output()
  public masterEvent = new EventEmitter();

  public t = Translations;

  @Input()
  private headerName: string;

  @ViewChild(HeaderGroupSearchPage)
  header: HeaderGroupSearchPage;

  private listModels: ListPagingModel = new ListPagingModel();

  public search: string = '';

  private skip: number = 0;

  private take: number = 30;

  private enabled: boolean = true;

  private loading: boolean = true;

  public id: number[];
  public name: string[];

  ngOnInit() {
    this.getData(0, this.take).subscribe((data) => {
      if (data)
        this.listModels = data as ListPagingModel;
    });
  }

  constructor(
    private toolHelper: ToolHelper,
    private licenseSearchService: LicenseSearchService,
    public toastCtrl: ToastController
  ) {
    this.id = [];
    this.name = [];
  }

  getData(skip, take): Observable<any> {
    var fromQuery = this.toolHelper.searchPagger(skip, take, this.header.searchInput, this.header.h.vehicleGroup ? this.header.h.vehicleGroup.Id : 0);
    return this.licenseSearchService.getLicense(fromQuery)
      .map((data) => {
        this.loading = false;
        if (data.Message) {
          this.toolHelper.alert(this.t.getByValueEn(data.Message));
          return null;
        }

        else if (data.StatusCode) {
          this.toolHelper.alert(this.t.getByValueEn(data.StatusCode));
          return null;
        }

        else {
          return data;
        }
      },
      (err) => {
        this.loading = false;
        var alert: Alert = err.statusText ?
          this.toolHelper.alert(this.t.getByValueEn(err.statusText))
          :
          this.toolHelper.alert(this.t.language.ConnectionRefused)
        alert.present();

        alert.onDidDismiss(() => {
          this.getData(this.skip, this.take).subscribe();
        });

        return null;
      });

  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    if (!this.enabled || this.listModels.ListModels.length == this.listModels.DataAllLength) {
      infiniteScroll.complete();
      return;
    }
    this.skip += 30;
    this.getData(this.skip, this.take)
      .subscribe((data) => {
        if (data) {
          let listModels = data as ListPagingModel;
          this.listModels.DataAllLength = listModels.DataAllLength;
          listModels.ListModels.forEach((listModel) => {
            this.listModels.ListModels.push(listModel)
          })
        }
        else
          this.enabled = false;
        infiniteScroll.complete();
      });
  }

  clearId() {

      for (let i = 0; i < this.listModels.ListModels.length; i++) {
       let model = this.listModels.ListModels[i];

       if (model.CheckBoxSelect === true) {
         model.CheckBoxSelect = false;
         this.id = [];
       }      
    }
  }

  selectAllId() {

    for (let i = 0; i < this.listModels.ListModels.length; i++) {
      let model = this.listModels.ListModels[i];

      if (!model.CheckBoxSelect) {
        model.CheckBoxSelect = true;
        this.selectCard(model);
      }
    }
  }

  nextPage() {
    console.log("multiselect id: " + this.id);

    if (this.id.toString() === '') {
      this.presentToast();
    } else {
      this.masterEvent.emit();
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Please select vehicle.',
      duration: 3000
    });
    toast.present();
  }

  selectCard(listModel: ListModel) {
    console.log(listModel.Id, listModel.CheckBoxSelect);
    if (listModel.CheckBoxSelect) {
      this.id.push(listModel.Id);
      this.name.push(listModel.Name);

    } else {
      this.id.splice(this.id.indexOf(listModel.Id), 1);
      this.name.splice(this.name.indexOf(listModel.Name), 1);
    }
  }
}