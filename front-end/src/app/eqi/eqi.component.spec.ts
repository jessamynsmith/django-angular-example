import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqiComponent } from './eqi.component';

describe('EqiComponent', () => {
  let component: EqiComponent;
  let fixture: ComponentFixture<EqiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
