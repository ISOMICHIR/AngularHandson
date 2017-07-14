import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesTshirtsComponent } from './ladies-tshirts.component';

describe('LadiesTshirtsComponent', () => {
  let component: LadiesTshirtsComponent;
  let fixture: ComponentFixture<LadiesTshirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesTshirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
