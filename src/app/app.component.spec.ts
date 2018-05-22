import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import {} from 'jasmine';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login';
import { TabsPage } from '../pages/tabs/tabs';

describe('MyApp Component', () => {
  let fixture;
  let component: MyApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot()
      ],
      providers: [

      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof MyApp).toBe(true);
  });


  it('should have rootPage is LoginPage', () => {
    expect(component.rootPage).toBe(LoginPage);
  });

  it('should have rootPage is TabsPage', () => {
    /*localStorage.setItem('currentUser', JSON.stringify({ token: 'token', username: 'test' }));
    let fixture = TestBed.createComponent(MyApp);
    let component = fixture.componentInstance;
    expect(component.rootPage).toBe(TabsPage);
    localStorage.clear();*/
  });

});