import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderPage],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    tick(2000);

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }))
  
});
