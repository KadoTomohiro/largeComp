import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp908Component } from './comp908.component';

describe('Comp908Component', () => {
  let component: Comp908Component;
  let fixture: ComponentFixture<Comp908Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp908Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp908Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
