import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqiAdminComponent } from './eqi-admin.component';

describe('EqiAdminComponent', () => {
  let component: EqiAdminComponent;
  let fixture: ComponentFixture<EqiAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqiAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
