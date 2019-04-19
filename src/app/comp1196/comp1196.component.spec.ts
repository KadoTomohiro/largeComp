import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1196Component } from './comp1196.component';

describe('Comp1196Component', () => {
  let component: Comp1196Component;
  let fixture: ComponentFixture<Comp1196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
