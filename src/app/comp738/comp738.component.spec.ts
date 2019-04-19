import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp738Component } from './comp738.component';

describe('Comp738Component', () => {
  let component: Comp738Component;
  let fixture: ComponentFixture<Comp738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
