import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp172Component } from './comp172.component';

describe('Comp172Component', () => {
  let component: Comp172Component;
  let fixture: ComponentFixture<Comp172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
