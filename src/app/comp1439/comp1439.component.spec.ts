import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1439Component } from './comp1439.component';

describe('Comp1439Component', () => {
  let component: Comp1439Component;
  let fixture: ComponentFixture<Comp1439Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1439Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1439Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
