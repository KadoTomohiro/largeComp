import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp672Component } from './comp672.component';

describe('Comp672Component', () => {
  let component: Comp672Component;
  let fixture: ComponentFixture<Comp672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
