import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp329Component } from './comp329.component';

describe('Comp329Component', () => {
  let component: Comp329Component;
  let fixture: ComponentFixture<Comp329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
