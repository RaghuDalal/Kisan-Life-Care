import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formdata } from '../Model/formdata';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Data:Formdata;
  isSuccess:Boolean=false;
  isError:Boolean=false;
  isLoad:Boolean=false;

  constructor(private http:HttpClient) {
    this.Data={
      id:0,
      name:"",
      fatherName:"",
      gender:"male",
      dob:null,
      address:"",
      district:"",
      state:"",
      pincode:null,
      mobileNo:null,
      email:"",
      agricultureLand:null,
      occupation:"",
      signature:"none"
    }

  }

  ngOnInit(): void {
  }


  PostData(data:NgForm){

    this.isLoad=true;
    this.http.post("http://jmcapi.kmaschool.com/api/kisanlifecare/",this.Data,{responseType:"text"}).subscribe(
      (res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
      this.isError=true;
      this.isSuccess=false;
      this.isLoad=false;
      setTimeout(()=>{this.isError=false;},3000);
    },()=>{
      console.log("Success");
      this.isSuccess=true;
      this.isError=false;
      this.isLoad=false;
      this.Data={
        id:0,name:"",fatherName:"",gender:"",dob:null,address:"",district:"",state:"",pincode:0,mobileNo:0,email:"",agricultureLand:0,occupation:"",signature:"",
      };
      setTimeout(()=>{this.isSuccess=false;},3000);
      data.reset();
      }
    )
  };

}

