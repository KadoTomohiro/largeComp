import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp314Component } from './comp314.component';

describe('Comp314Component', () => {
  let component: Comp314Component;
  let fixture: ComponentFixture<Comp314Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp314Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
