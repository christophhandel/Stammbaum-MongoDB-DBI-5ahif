import {Component, OnInit} from '@angular/core';
import {Company} from "../../models/company.model";
import {RestService} from "../../services/rest.service";
import {ToastrService} from "ngx-toastr";
import {cardAnimation} from "../../utils/animations";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  animations: [cardAnimation]
})
export class CompaniesComponent implements OnInit {
  companyList: Company[] = [];

  loading: boolean = true;

  constructor(private restService: RestService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.restService.getCompanies().subscribe({
      next: value => {
        this.companyList=value;
        this.loading = false;
      },
      error: err => { this.loading = false}
    })
  }

  deleteCompany(company: Company) {
    if (company == null || company.id == null) return;

    return this.restService.deleteCompany(company.id).subscribe({
      next: d=> {
        const index = this.companyList.indexOf(company, 0);
        if (index > -1) {
          this.companyList.splice(index, 1);
          this.toastr.success("Successfully deleted company (" + company.name + ")!")
        } else {
          this.toastr.error("Couldn't delete company (" + company.name + ")!")
        }
      },
      error: err => {
        this.toastr.error("Couldn't delete company (" + company.name + ")!")
      }
    })
  }
}
