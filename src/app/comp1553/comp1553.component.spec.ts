import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1553Component } from './comp1553.component';

describe('Comp1553Component', () => {
  let component: Comp1553Component;
  let fixture: ComponentFixture<Comp1553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
