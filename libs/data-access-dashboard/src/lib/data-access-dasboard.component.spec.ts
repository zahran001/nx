import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessDasboardComponent } from './data-access-dasboard.component';

describe('DataAccessDasboardComponent', () => {
  let component: DataAccessDasboardComponent;
  let fixture: ComponentFixture<DataAccessDasboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessDasboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
