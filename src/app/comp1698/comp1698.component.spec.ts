import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1698Component } from './comp1698.component';

describe('Comp1698Component', () => {
  let component: Comp1698Component;
  let fixture: ComponentFixture<Comp1698Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1698Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1698Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
