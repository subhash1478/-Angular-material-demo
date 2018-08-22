import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahboardpageComponent } from './dahboardpage.component';

describe('DahboardpageComponent', () => {
  let component: DahboardpageComponent;
  let fixture: ComponentFixture<DahboardpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahboardpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahboardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
