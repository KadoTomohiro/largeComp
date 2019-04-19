import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1288Component } from './comp1288.component';

describe('Comp1288Component', () => {
  let component: Comp1288Component;
  let fixture: ComponentFixture<Comp1288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
