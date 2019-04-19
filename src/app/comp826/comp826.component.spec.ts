import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp826Component } from './comp826.component';

describe('Comp826Component', () => {
  let component: Comp826Component;
  let fixture: ComponentFixture<Comp826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
