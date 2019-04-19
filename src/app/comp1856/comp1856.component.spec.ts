import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1856Component } from './comp1856.component';

describe('Comp1856Component', () => {
  let component: Comp1856Component;
  let fixture: ComponentFixture<Comp1856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
