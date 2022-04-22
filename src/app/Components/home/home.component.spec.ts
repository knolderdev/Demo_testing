import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to execute add function and get sum', () =>{
    component.add(2, 4);
    expect(component.addition).toEqual(6)
  });

  it('should be able to execute add function and get sum', () =>{
    component.add(6, 4);
    expect(component.addition).toEqual(10);
  });

  it('should be able to call toggleBoolean', () =>{
    component.toggleBoolean();
    expect(component.show).toEqual(true);
  })
});
