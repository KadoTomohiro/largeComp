import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp138Component } from './comp138.component';

describe('Comp138Component', () => {
  let component: Comp138Component;
  let fixture: ComponentFixture<Comp138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
