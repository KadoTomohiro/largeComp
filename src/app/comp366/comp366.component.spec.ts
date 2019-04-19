import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp366Component } from './comp366.component';

describe('Comp366Component', () => {
  let component: Comp366Component;
  let fixture: ComponentFixture<Comp366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
