import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp856Component } from './comp856.component';

describe('Comp856Component', () => {
  let component: Comp856Component;
  let fixture: ComponentFixture<Comp856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
