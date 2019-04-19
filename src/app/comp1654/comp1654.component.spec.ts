import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1654Component } from './comp1654.component';

describe('Comp1654Component', () => {
  let component: Comp1654Component;
  let fixture: ComponentFixture<Comp1654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
