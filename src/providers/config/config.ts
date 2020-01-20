import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 
@Injectable()
export class ConfigProvider {

  public domainURL = "https://themeatvala.brilienzacademy.in/api";
  constructor(public http: HttpClient) {
    
  }

}
