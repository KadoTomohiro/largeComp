import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp932Component } from './comp932.component';

describe('Comp932Component', () => {
  let component: Comp932Component;
  let fixture: ComponentFixture<Comp932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
