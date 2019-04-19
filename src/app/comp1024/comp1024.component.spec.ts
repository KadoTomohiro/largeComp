import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1024Component } from './comp1024.component';

describe('Comp1024Component', () => {
  let component: Comp1024Component;
  let fixture: ComponentFixture<Comp1024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
