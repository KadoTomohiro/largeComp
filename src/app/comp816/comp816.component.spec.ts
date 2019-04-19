import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp816Component } from './comp816.component';

describe('Comp816Component', () => {
  let component: Comp816Component;
  let fixture: ComponentFixture<Comp816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
