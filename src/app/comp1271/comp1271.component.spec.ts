import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1271Component } from './comp1271.component';

describe('Comp1271Component', () => {
  let component: Comp1271Component;
  let fixture: ComponentFixture<Comp1271Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1271Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1271Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
