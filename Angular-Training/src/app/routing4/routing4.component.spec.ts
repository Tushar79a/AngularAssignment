import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routing4Component } from './routing4.component';

describe('Routing4Component', () => {
  let component: Routing4Component;
  let fixture: ComponentFixture<Routing4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routing4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
