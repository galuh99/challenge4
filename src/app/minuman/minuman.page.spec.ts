import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinumanPage } from './minuman.page';

describe('MinumanPage', () => {
  let component: MinumanPage;
  let fixture: ComponentFixture<MinumanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinumanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinumanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
