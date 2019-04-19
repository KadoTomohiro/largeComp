import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1703Component } from './comp1703.component';

describe('Comp1703Component', () => {
  let component: Comp1703Component;
  let fixture: ComponentFixture<Comp1703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
