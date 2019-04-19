import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1484Component } from './comp1484.component';

describe('Comp1484Component', () => {
  let component: Comp1484Component;
  let fixture: ComponentFixture<Comp1484Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1484Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
