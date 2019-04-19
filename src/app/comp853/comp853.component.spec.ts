import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp853Component } from './comp853.component';

describe('Comp853Component', () => {
  let component: Comp853Component;
  let fixture: ComponentFixture<Comp853Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp853Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp853Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
