import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp518Component } from './comp518.component';

describe('Comp518Component', () => {
  let component: Comp518Component;
  let fixture: ComponentFixture<Comp518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
