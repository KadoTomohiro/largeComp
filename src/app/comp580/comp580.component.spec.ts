import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp580Component } from './comp580.component';

describe('Comp580Component', () => {
  let component: Comp580Component;
  let fixture: ComponentFixture<Comp580Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp580Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
