import { Accomplishments } from './../models/accomplishments.model';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Person} from "../models/person.model";
import {environment} from "../../environments/environment";
import {Company} from "../models/company.model";
import {Job} from "../models/job.model";
import {JobStatDto} from "../models/job-stat-dto";
import {CompanyStatDto} from "../models/company-stat-dto";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }


  getPersonByParents(motherId: string, fatherId: string) {
    this.http.get<Person[]>(environment.API_URL + "parents?motherId=" + motherId + "&fatherId=" + fatherId)
  }

  getPersonByMother(motherId: string) {
    this.http.get<Person[]>(environment.API_URL + "parents?motherId=" + motherId)
  }

  getPersonByFather(fatherId: string) {
    this.http.get<Person[]>(environment.API_URL + "parents?fatherId=" + fatherId)
  }

  getBySex(sex: string) {
    return this.http.get<Person[]>(environment.API_URL + "Person?sex=" + sex)
  }

  getAllPeople() {
    return this.http.get<Person[]>(environment.API_URL + "Person");
  }

  getPerson(id: string) {
    return this.http.get<Person>(environment.API_URL + "Person/" + id);
  }

  updatePerson(p: Person) {
    return this.http.put<Person>(environment.API_URL + "Person/" + p.id, p);
  }

  addPerson(p: Person) {
    return this.http.post<Person>(environment.API_URL + "Person", p);
  }

  updateCompany(p: Company) {
    return this.http.put<Company>(environment.API_URL + p.id, p);
  }

  addCompany(p: Company) {
    return this.http.post<Company>(environment.API_URL + "Company", p);
  }

  updateJob(p: Job) {
    return this.http.put<Job>(environment.API_URL + p.id, p);
  }

  addJob(p: Job) {
    return this.http.post<Job>(environment.API_URL + "Job", p);
  }

  getCompanies() {
    return this.http.get<Company[]>(environment.API_URL + "Company");
  }

  getJobs() {
    return this.http.get<Job[]>(environment.API_URL + "Job");
  }

  deletePerson(personId: string) {
    if(localStorage.getItem("admintoken") != environment.admintoken && environment.production) {
      return new Observable((t)=>{
        t.error("Not Allowed!");
        t.complete();
      });
    }
    return this.http.delete<Person>(environment.API_URL + "person/" + personId)
  }

  deleteCompany(companyId: string) {
    if(localStorage.getItem("admintoken") != environment.admintoken && environment.production) {
      return new Observable((t)=>{
        t.error("Not Allowed!");
        t.complete();
      });
    }
    return this.http.delete<Company>(environment.API_URL + "company/" + companyId)
  }

  deleteJob(jobId: string) {
    if(localStorage.getItem("admintoken") != environment.admintoken && environment.production) {
      return new Observable((t)=>{
        t.error("Not Allowed!");
        t.complete();
      });
    }
    return this.http.delete<Job>(environment.API_URL + "Job/" + jobId)
  }

  loadTestDataIntoDb() {
    if(localStorage.getItem("admintoken") != environment.admintoken && environment.production) {
      return new Observable((t)=>{
        t.error("Not Allowed!");
        t.complete();
      });
    }
    return this.http.get(environment.API_URL + "TestData")
  }

  deleteAllData(){
    if(localStorage.getItem("admintoken") != environment.admintoken && environment.production) {
      return new Observable((t)=>{
        t.error("Not Allowed!");
        t.complete();
      });
    }
    return this.http.get(environment.API_URL + "delete-collections")
  }

  getAccomplishmentsByPerson(id: string) {
    return this.http.get<Accomplishments[]>(environment.API_URL + "accomplishment/person/"+ id)
  }

  getDescendants(id: string) {
    return this.http.get<Person[]>(environment.API_URL + "person/descendants/"+ id)
  }

  getAncestors(id: string) {
    return this.http.get<Person[]>(environment.API_URL + "person/ancestors/"+ id)
  }

  getAllJobs() {
    return this.http.get<JobStatDto[]>(environment.API_URL + "stats/job-stats")
  }

  getAllCompanies() {
    return this.http.get<CompanyStatDto[]>(environment.API_URL + "stats/company-stats")
  }
}
