import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkComponent } from './mywork.component';

describe('MyworkComponent', () => {
  let component: MyworkComponent;
  let fixture: ComponentFixture<MyworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyworkComponent]
    });
    fixture = TestBed.createComponent(MyworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
