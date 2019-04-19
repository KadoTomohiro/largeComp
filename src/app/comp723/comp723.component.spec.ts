import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp723Component } from './comp723.component';

describe('Comp723Component', () => {
  let component: Comp723Component;
  let fixture: ComponentFixture<Comp723Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp723Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
