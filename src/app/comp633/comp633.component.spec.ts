import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp633Component } from './comp633.component';

describe('Comp633Component', () => {
  let component: Comp633Component;
  let fixture: ComponentFixture<Comp633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
