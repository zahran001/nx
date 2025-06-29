import { TestBed } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';

describe('DataAccessDasboardComponent', () => {

  let service: DashboardService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [DashboardService],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
