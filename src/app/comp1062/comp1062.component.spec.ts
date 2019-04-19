import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1062Component } from './comp1062.component';

describe('Comp1062Component', () => {
  let component: Comp1062Component;
  let fixture: ComponentFixture<Comp1062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
