import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp944Component } from './comp944.component';

describe('Comp944Component', () => {
  let component: Comp944Component;
  let fixture: ComponentFixture<Comp944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
