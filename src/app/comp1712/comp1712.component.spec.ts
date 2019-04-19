import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1712Component } from './comp1712.component';

describe('Comp1712Component', () => {
  let component: Comp1712Component;
  let fixture: ComponentFixture<Comp1712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
