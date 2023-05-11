import { Component ,ViewChild, ElementRef} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from "../services/admin.service";
import { from } from 'rxjs';
import { environment } from "../../environment/environment";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  @ViewChild('selectFileInput') selectFileInput!: ElementRef;
  @ViewChild('selectFileInput1') selectFileInput1!: ElementRef;
  @ViewChild('selectFileInput2') selectFileInput2!: ElementRef;
  @ViewChild('selectFileInput3') selectFileInput3!: ElementRef;


  // Introduction
  currentIntroImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s';
  introTitle = new FormControl('',[]);
  introSubtitle = new FormControl('',[]);
  introDescription = new FormControl('',[]);
  introImage :any;
  introForm = new FormGroup({
    introTitle: this.introTitle,
    introSubtitle: this.introSubtitle,
    introDescription: this.introDescription
  });
  file :any;
  // ProjectsCarousel

  numberOfTags = 0;
  numberOfTagsArray = [0];
  projectCarausal1 :any;
  individualProjectImage = {
    main_img:{
      image_src:"",
      tags : [{}]
    }
  }
  tag_frame = {
    tag_name : "tag1",
    image_list : [""]
  }
  selectedProjectOption = ""
  projectDisplay1ImageCount = 0;
  projectDisplay1TagCount = 0;
  projectDisplay1TagArray : any;
  imageCount = 0;
  newTag : any;

  // About Us
  aboutUsTitle = new FormControl('',[]);
  aboutUsPara1 = new FormControl('',[]);
  aboutUsPara2 = new FormControl('',[]);
  aboutUsForm = new FormGroup({
    aboutUsTitle: this.aboutUsTitle,
    aboutUsPara1: this.aboutUsPara1,
    aboutUsPara2: this.aboutUsPara2
  });
  currnetAboutUsImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s';
  aboutUsImage :any;
  aboutUsHeaderImage :any;
  aboutUsFooterImage :any;


  // Projects
  projectTitle = new FormControl('',[]);
  projectSubtitle = new FormControl('',[]);
  projectDescription = new FormControl('',[]);
  updatedProjectUrlList = [] ;
  projectForm = new FormGroup({
    projectTitle: this.projectTitle,
    projectSubtitle: this.projectSubtitle,
    projectDescription: this.projectDescription
  });
  projectUrlList = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s',
  ];

  youtubecards = [
    {
      "title":"Project 1",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "link":"https://www.youtube.com/embed/1y_kfWUCFDQ"
    },{
      "title":"Project 2",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "link":"https://www.youtube.com/embed/1y_kfWUCFDQ"

    },{
      "title":"Project 3",
      "description":"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      "link":"https://www.youtube.com/embed/1y_kfWUCFDQ"
    }
  ]


  selectedReviewOption = "updateReviews";
  // Real Life Reviews
  reviewTitle = new FormControl('',[]);
  reviewSubtitle = new FormControl('',[]);
  reviewDescription = new FormControl('',[]);
  reviewForm = new FormGroup({
    reviewTitle: this.reviewTitle,
    reviewSubtitle: this.reviewSubtitle,
    reviewDescription: this.reviewDescription
  });
  reviewBackgroundImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s';
  updatedReviewBackgroundImage :any;
  tempImage :any;

  // Reviews
  //reviewList = [
  //   {
  //     "id":0,
  //     "client_name" : "John Doe",
  //     "review" : "Hey there, I am using this template right now to build my website. I must say the customer support is excellent. Keep up the good work guys!",
  //     "client_image" : "https://picsum.photos/600/400?random=1"
  //   },
  //   {
  //     "id":1,
  //     "client_name" : "John Doe",
  //     "review" : "Hey there, I must say the customer support is excellent. Keep up the good work guys!",
  //     "client_image" : "https://picsum.photos/600/400?random=2"
  //   },
  //   {
  //     "id":2,
  //     "client_name" : "John Doe",
  //     "review" : "Hey there, I am using this template right now to build my website !!",
  //     "client_image" : "https://picsum.photos/600/400?random=3"
  //   }
  // ]
  reviewList :any;

  newReview = {
    "id":0,
    "client_name" : "",
    "review" : "",
    "client_image" : "",
    "projectName" : ""
  }

  // Upcomming Projects
  upcommingProjectList = {
    "minor_projects" : [""],
    "major_projects" : ""
  }

  //Contact Us
  contactUsEmail = new FormControl('',[]);
  contactUsPhone = new FormControl('',[]);
  contactUsAddress = new FormControl('',[]);
  contactUsForm = new FormGroup({
    contactUsEmail: this.contactUsEmail,
    contactUsPhone: this.contactUsPhone,
    contactUsAddress: this.contactUsAddress
  });
  tag_name = "";

  upcommingProjectCard = {
    "projectOneImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s",
    "projectTwoImage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s",
    "projectOneTitle":"Title 1",
    "projectTwoTitle":"Title 2",
    "projectOneDate":"Date 1",
    "projectTwoDate":"Date 2"
  }

  constructor(private _formBuilder: FormBuilder,private toastr: ToastrService,private adminService: AdminService,private http: HttpClient,private router: Router) { 
  }
  
  selectedOption: string = 'intro';
  introData : any  = {
    title: "Interiorica",
    subtitle : "Your Space. Reimagined",
    description : "At Interiorica we design residential and commercial spaces that are comfortable, personal and interesting. Great interior design is great art, reflecting who you are in ways you never imagined. Our unique perspective, grounded in both art and architecture, reflects an artist’s eye toward color and materials and a strong sense of space and form. We are artists, we are designers, and we are here to make your space better than you could have ever imagined.    ",
  }

  aboutUsData = this.introData;
  projectsData= this.introData;
  reviewData = this.introData;
  addCarausalImage_toggle = false;

  contactUsImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s';


  // Function to set intro data
  fetchIntroData() {
    // this.introForm.controls.introTitle.setValue(this.introData.title);
    // this.introForm.controls.introSubtitle.setValue(this.introData.subtitle);
    // this.introForm.controls.introDescription.setValue(this.introData.description);
    var params ={
      "documentName" : "intro"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      this.currentIntroImage = res['introImage'];
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    })
  }

  fetchAboutUsData() {
    // this.aboutUsForm.controls.aboutUsTitle.setValue(this.aboutUsData.title);
    // this.aboutUsForm.controls.aboutUsPara1.setValue(this.aboutUsData.subtitle);
    // this.aboutUsForm.controls.aboutUsPara2.setValue(this.aboutUsData.description);
    var params ={
      "documentName" : "aboutUs",
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      this.aboutUsHeaderImage = res['aboutUsHeader'];
      this.aboutUsImage = res['aboutUsMiddle'];
      this.aboutUsFooterImage = res['aboutUsFooter'];
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    }
    )
  }

  fetchResidentialDesignData() {
    var data = {
      "image_list" : ["https://picsum.photos/600/400?random=1","https://picsum.photos/600/400?random=2","https://picsum.photos/600/400?random=3","https://picsum.photos/600/400?random=4","https://picsum.photos/600/400?random=5"],
      "tags" : [{
        "tag_name" : "Kitchen",
        "image_list" : ["https://picsum.photos/600/400?random=1","https://picsum.photos/600/400?random=2"]        
      },{
        "tag_name" : "Bedroom",
        "image_list" : ["https://picsum.photos/600/400?random=3","https://picsum.photos/600/400?random=4"]
      },{
        "tag_name" : "Hall",
        "image_list" : ["https://picsum.photos/600/400?random=5","https://picsum.photos/600/400?random=6"]
      }]
    }

    var params = {
      "documentName" : "residential-design"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      data["image_list"] = res["designImages"]
      // loop through response and check if key is not designImages then create a new tag and push it to tags array
      var tags = [];
      for(var key in res) {
        if(key != "designImages") {
          var tag = {
            "tag_name" : key,
            "image_list" : res[key]
          }
          tags.push(tag);
        }
      }
      data["tags"] = tags;
      this.projectCarausal1 = data;
      this.toastr.success('Residential Designs fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    }
    )
  }

  fetchCommercialDesignData()  {
    var data = {
      "image_list" : ["https://picsum.photos/600/400?random=1","https://picsum.photos/600/400?random=2","https://picsum.photos/600/400?random=3","https://picsum.photos/600/400?random=4","https://picsum.photos/600/400?random=5"],
      "tags" : [{
        "tag_name" : "Kitchen",
        "image_list" : ["https://picsum.photos/600/400?random=1","https://picsum.photos/600/400?random=2"]        
      },{
        "tag_name" : "Bedroom",
        "image_list" : ["https://picsum.photos/600/400?random=3","https://picsum.photos/600/400?random=4"]
      },{
        "tag_name" : "Hall",
        "image_list" : ["https://picsum.photos/600/400?random=5","https://picsum.photos/600/400?random=6"]
      }]
    }

    var params = {
      "documentName" : "commercialDesign"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      data["image_list"] = res["designImages"]
      // loop through response and check if key is not designImages then create a new tag and push it to tags array
      var tags = [];
      for(var key in res) {
        if(key != "designImages") {
          var tag = {
            "tag_name" : key,
            "image_list" : res[key]
          }
          tags.push(tag);
        }
      }
      data["tags"] = tags;
      this.projectCarausal1 = data;
      this.toastr.success('Commercial Designs fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    }
    )
  }

  fetchProjectsData() {
    // this.projectForm.controls.projectTitle.setValue(this.projectsData.title);
    // this.projectForm.controls.projectSubtitle.setValue(this.projectsData.subtitle);
    // this.projectForm.controls.projectDescription.setValue(this.projectsData.description);
    var params = {
      "documentName" : "youtubeCards"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      console.log(res);
      this.youtubecards = [];
      // for (let i = 0; i < res.length; i++) {
      //   const element = res[i];
      //   this.youtubecards.push(element);
      // }
      this.youtubecards = res['data'];
      console.log(this.youtubecards);
      this.toastr.success('Projects fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    })
  }

  fetchReviewData() {
    var params = {
      "collectionName" : "userReviews"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      console.log(res);
      this.reviewList = [];
      for(var i = 0; i < res.length; i++) {
        var data = {
        "id":i,
        "client_name":res[i]["clientName"],
        "client_image":res[i]["clientImage"],
        "review":res[i]["clientFeedback"],
        "projectName":res[i]["projectName"],
        "uniqueId":res[i]["id"],
        }
        this.reviewList.push(data);
      }
      console.log(this.reviewList);
      this.toastr.success('Reviews fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    }
    )
  }
  
  fetchRealLifeReview(){
    // this.reviewForm.controls.reviewTitle.setValue(this.reviewData.title);
    // this.reviewForm.controls.reviewSubtitle.setValue(this.reviewData.subtitle);
    // this.reviewForm.controls.reviewDescription.setValue(this.reviewData.description);
    var params = {
      "documentName" : "realLifeReview"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      console.log(res);
      this.reviewForm.controls.reviewTitle.setValue(res['title']);
      this.reviewForm.controls.reviewSubtitle.setValue(res['subtitle']);
      this.reviewForm.controls.reviewDescription.setValue(res['description']);
      this.updatedReviewBackgroundImage = res['reviewImage'];
      this.toastr.success('Real Life Reviews fetched successfully');
    }).catch((err)=>{
      this.toastr.error('Error while fetching data');
    }
    )
  }

  fetchtUpcommingProjectsData() {
    // this.upcommingProjectList.minor_projects =  ['https://picsum.photos/600/400?random=1','https://picsum.photos/600/400?random=2','https://picsum.photos/600/400?random=3','https://picsum.photos/600/400?random=4']
    this.upcommingProjectList.major_projects = 'https://picsum.photos/600/400?random=5'
    var params = {
      "documentName" : "upcomingProjectImages"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      this.upcommingProjectList.minor_projects = res['data'];
      // this.upcommingProjectList.major_projects = res['major_projects'];
      this.toastr.success('Upcoming Projects fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    })
  }

  fetchContactUsData() {
    // this.contactUsForm.controls.contactUsEmail.setValue('satyam@gmail.com');
    // this.contactUsForm.controls.contactUsPhone.setValue('1234567890');
    // this.contactUsForm.controls.contactUsAddress.setValue('123, ABC Street, XYZ City, 123456');
    var params = {
      "documentName" : "contactUs"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      this.contactUsImage = res['contactUsImage'];
      this.toastr.success('Contact Us fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    }
    )
  }

  fetchProjectCardData() {
    var params = {
      "documentName" : "upcomingProject"
    }
    this.fetchData(params).then((res)=>{
      res = JSON.parse(res);
      this.upcommingProjectCard = res;
      this.toastr.success('Project cards fetched successfully');
    }
    ).catch((err)=>{
      this.toastr.error('Error while fetching data');
    })
  }

  // Function to show form based on selected option
  showForm(option: string) {
    if (option == "about_us"){
      this.fetchAboutUsData();
    }
    if (option == "intro"){
      this.fetchIntroData();
    }
    if (option == "residential_design"){
      this.fetchResidentialDesignData();
    }
    if (option == "projects"){
      this.fetchProjectsData();
    }
    if (option == "commercial_design"){
      this.fetchCommercialDesignData();
    }
    if (option == "upcomming_project_card"){
      this.fetchProjectCardData();
    }
    if (option == "upcomming_projects"){
      this.fetchtUpcommingProjectsData();
    }
    if (option == "contact_us"){
      this.fetchContactUsData();
    }
    if(option == "reviews"){
      this.fetchReviewData();
    }
    if (option == "real_life_reviews"){
      this.fetchRealLifeReview();
    }
    this.selectedOption = option;
  }

  imagesPreview(event:any,type:string,id=1,subtype='',subtype_2 ='',id_2=0,id_3=0) {
    
    const file = event.target.files[0];
    const reader = new FileReader();  

    reader.onload = (e: any) => {

      if (type == 'intro') this.introImage = e.target.result;
      else if (type == 'about_us'){
        console.log(subtype);
        if (subtype == 'header') {
          this.aboutUsHeaderImage = e.target.result;
          this.selectFileInput1.nativeElement.value = '';
        }
        else if (subtype == 'middle') {
          this.aboutUsImage = e.target.result;
          this.selectFileInput2.nativeElement.value = '';
        }
        else if (subtype == 'footer'){
           this.aboutUsFooterImage = e.target.result;
           this.selectFileInput3.nativeElement.value = '';
        }
      }
      else if (type == 'real_life_reviews') this.updatedReviewBackgroundImage = e.target.result;
      else if  (type == 'reviews'){ 
        this.reviewList[id].client_image = e.target.result;
      }
      else if (type == 'add_reviews'){
        this.newReview.client_image = e.target.result;
      }
      else if (type == 'upcomming_projects'){
        if(subtype == 'major'){
          this.upcommingProjectList.major_projects = e.target.result;
        }else{
          this.upcommingProjectList.minor_projects[id] = e.target.result;
        }
      }
      else if(type == 'project_display'){
        if(subtype == 'image_list' && subtype_2 == 'change_image'){
          this.projectCarausal1.image_list[id] = e.target.result;
        }
        else if(subtype == 'image_list' && subtype_2 == 'delete_image'){
          this.projectCarausal1.image_list.splice(id,1);
        }
        else if(subtype == 'tags'){
          if(subtype_2 == 'image_list'){
            this.projectCarausal1.tags[id].image_list[id_2] = e.target.result;
          }
          else if(subtype_2 == 'addImage'){
            this.projectCarausal1.tags[id].image_list.push(e.target.result);
          }
        }
     }else if (type == 'add_carausal_image'){
      this.tempImage = e.target.result;
     }
     else if (type == 'upcomming_project_card'){
      console.log(id);
      if (id == 2){
        console.log("here 1");
        this.upcommingProjectCard.projectOneImage = e.target.result;
      }
      if(id == 3){
        console.log("here 2");
        this.upcommingProjectCard.projectTwoImage = e.target.result;
      }
     }
     else if (type == 'contact_us'){
      this.contactUsImage = e.target.result;
     }
    }
    reader.readAsDataURL(file);
    if (type != 'about_us') this.selectFileInput.nativeElement.value = null; 
  
  }
  // Function to update Intro data
  async updateIntro() {
    // Update introData object with new data

    this.createFileFromUrl(this.introImage)
    .then((file: File) => {
      this.file = file;
    })
    .catch((err: Error) => {
      // Handle any errors that occur during the fetch or file creation
    });

    var file = await this.createFileFromUrl(this.introImage);
    const formData = new FormData();
    formData.append('introImage', file);
    formData.append('documentName', "intro");
    var params = {
      endpoint:"admin/intro",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      res = JSON.parse(res);
      if (res.message == "Image Added."){
        this.toastr.success('Updated intro successfully');
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      this.toastr.error('Error while updating intro');
    })
  }

  // Function to update About Us data
  async updateAboutUs() {
    // Update aboutUsData object with new data
    var header = await this.createFileFromUrl(this.aboutUsHeaderImage);
    var middle = await this.createFileFromUrl(this.aboutUsImage);
    var footer = await this.createFileFromUrl(this.aboutUsFooterImage);
    const formData = new FormData();
    formData.append('aboutUsHeader', header);
    formData.append('aboutUsMiddle', middle);
    formData.append('aboutUsFooter', footer);
    formData.append('documentName', "aboutUs");
    var params = {
      endpoint:"admin/aboutus",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      res = JSON.parse(res);
      if (res.message == "Image Added."){
        this.toastr.success('Updated intro successfully');
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      this.toastr.error('Error while updating about us');
    })
 }

  // Function to update Projects data
  async updateProjects() {
    console.log(this.youtubecards);
    var data = this.youtubecards;
    var params = {
      endpoint:"admin/youtube-cards",
      data:{
        "documentName":"youtubeCards",
        "data":data
      }
    }
    try {
      var response = await this.sendData(params);
      this.toastr.success('Updated projects successfully');
    }
    catch (err) {
      console.log(err);
      this.toastr.error('Error while updating projects');
    }
    
  }

  async updateRealLifeReviews() {

    const formData = new FormData();
    formData.append('title', String(this.reviewForm.value.reviewTitle));
    formData.append('subtitle', String(this.reviewForm.value.reviewSubtitle));
    formData.append('description', String(this.reviewForm.value.reviewDescription));
    formData.append('reviewImage', await this.createFileFromUrl(this.updatedReviewBackgroundImage) );
    formData.append('documentName', "realLifeReview");
    var params = {
      endpoint:"admin/real-life-review",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      res = JSON.parse(res);
      if (res.message == "Record Added."){
        this.toastr.success('Updated real life reviews successfully');
        this.fetchRealLifeReview();
      }
      }).catch((err:any)=>{
        // if response is 400 then taostr error
        this.toastr.error('Error while updating real life reviews');
      })
  }

  async updateReviews(id: number) {
    var index = this.reviewList.findIndex((x:any) => x.id == id);
    const formData = new FormData();
    formData.append('collectionName', "userReviews");
    formData.append('documentName', this.reviewList[index]["uniqueId"]);
    formData.append('clientName', this.reviewList[index]["client_name"]);
    formData.append('projectName', this.reviewList[index]["projectName"]);
    formData.append('clientFeedback', this.reviewList[index]["review"]);
    formData.append('clientImage',await this.createFileFromUrl(this.reviewList[index]["client_image"]));
    var params = {
      endpoint:"admin/user-review",
      formData:formData
    }
    this.updateFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      res = JSON.parse(res);
      if (res.message == 'Record Updated.'){
        this.fetchReviewData();
        this.toastr.success('Review Updated Successfully');
      }
      }).catch((err:any)=>{
        // if response is 400 then taostr error
        this.toastr.error('Error while updating review');
      });
  }

  deleteReview(id: number) {
    var index = this.reviewList.findIndex((x:any) => x.id == id);
    const formData = new FormData();
    formData.append('collectionName', "userReviews");
    formData.append('documentName', this.reviewList[index]["uniqueId"]);
    var params = {
      endpoint:"admin/user-review",
      formData:formData
    }
    this.deleteFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      res = JSON.parse(res);
      if (res.message == 'Record Deleted.'){
        this.toastr.success('Review deleted successfully');
        this.fetchReviewData();
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      this.toastr.error('Error while deleting review');
    });
  }

  switchReviewTab(type = 'addReview'){
    this.selectedReviewOption = type;
  }

  async addReview() {
    var index = this.reviewList.length + 1;
    this.newReview.id = index;
    this.reviewList.push(this.newReview);
    const formData = new FormData();
    formData.append('collectionName', "userReviews");
    formData.append('clientName', this.newReview.client_name);
    formData.append('projectName', this.newReview.projectName);
    formData.append('clientFeedback', this.newReview.review);
    formData.append('clientImage', await this.createFileFromUrl(this.newReview.client_image));
    var params = {
      endpoint:"admin/user-review",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      res = JSON.parse(res);
      if (res.message == "Record Added."){
        this.toastr.success('Added review successfully');
        this.switchReviewTab('updateReviews');
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      this.toastr.error('Error while adding review');
    })
    
  }

  async updateUpcommingProjects() {
    console.log(this.upcommingProjectList);
    const formData = new FormData();
    for(let i=0; i<this.upcommingProjectList['minor_projects'].length; i++){
      var file = await this.createFileFromUrl(this.upcommingProjectList['minor_projects'][i]);
      formData.append('projectImagesList', file);
    }
    formData.append('documentName', "upcomingProjectImages");
    var params = {
      endpoint:"admin/upcoming-project-images",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      if (res.status == 200){
        this.toastr.success('Updated upcomming projects successfully');
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      this.toastr.error('Error while updating upcomming projects');
    })
  }

  async updateContactUs() {
    // console.log(this.contactUsForm.value.contactUsEmail);
    // console.log(this.contactUsForm.value.contactUsPhone);
    // console.log(this.contactUsForm.value.contactUsAddress);
    const formData = new FormData();
    formData.append('contactUsImage',await this.createFileFromUrl(this.contactUsImage));
    formData.append('documentName', "contactUs");
    var params = {
      endpoint:"admin/contactus-image",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      if (res.status == 200){
        this.toastr.success('Updated contact us successfully');
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      this.toastr.error('Error while updating contact us');
    })
  }

 async updateProjectsDisplay(type:string) {
    var image_list = [];
    for (let i= 0; i<this.projectCarausal1.image_list.length; i++){
      var file = await this.createFileFromUrl(this.projectCarausal1.image_list[i]);
      image_list.push(file);
    }
    this.projectCarausal1.image_list = image_list;
    for (let i= 0; i<this.projectCarausal1.tags.length; i++){
      for (let j= 0; j<this.projectCarausal1.tags[i].image_list.length; j++){
        var file = await this.createFileFromUrl(this.projectCarausal1.tags[i].image_list[j]);
        this.projectCarausal1.tags[i].image_list[j] = file;
      }
    }
    if(type == 'commercial_design'){
      const formData = new FormData();
      for (let i= 0; i<this.projectCarausal1.image_list.length; i++){
        formData.append('designImages', this.projectCarausal1.image_list[i]);
      }
      for (let i= 0; i<this.projectCarausal1.tags.length; i++){
        for (let j= 0; j<this.projectCarausal1.tags[i].image_list.length; j++){
          formData.append(this.projectCarausal1.tags[i].tag_name, this.projectCarausal1.tags[i].image_list[j]);
        }
      }
      formData.append('documentName', "commercialDesign");
      var params = {
        endpoint:"admin/commercial-design",
        formData:formData
      }
      this.uploadFile(params).then((res:any)=>{
        // if response if 200 then taostr success
        if (res.status == 200){
          this.toastr.success('Updated residential design successfully');
          this.fetchResidentialDesignData();
        }
      }).catch((err:any)=>{
        // if response is 400 then taostr error
        console.log(err);
        this.toastr.error('Error while updating residential design');
      })
      this.toastr.success('Commercial Design Section Updated Successfully');
    }
    else if(type == 'residential_design'){
      const formData = new FormData();
      for (let i= 0; i<this.projectCarausal1.image_list.length; i++){
        formData.append('designImages', this.projectCarausal1.image_list[i]);
      }
      for (let i= 0; i<this.projectCarausal1.tags.length; i++){
        for (let j= 0; j<this.projectCarausal1.tags[i].image_list.length; j++){
          formData.append(this.projectCarausal1.tags[i].tag_name, this.projectCarausal1.tags[i].image_list[j]);
        }
      }
      formData.append('documentName', "residential-design");
      var params = {
        endpoint:"admin/residential-design",
        formData:formData
      }
      this.uploadFile(params).then((res:any)=>{
        // if response if 200 then taostr success
        if (res.status == 200){
          this.toastr.success('Updated residential design successfully');
          this.fetchResidentialDesignData();
        }
      }).catch((err:any)=>{
        // if response is 400 then taostr error
        console.log(err);
        this.toastr.error('Error while updating residential design');
      })
      
    }
  }

  addProjectsDisplay(){
    this.projectCarausal1.push(this.individualProjectImage);
    this.toastr.success('Projects Display Added Successfully');
  }


  deleteProject(index=0){
    this.projectCarausal1.splice(index,1);
    this.toastr.success('Projects Display Deleted Successfully');
  }
  
  deleteTagImage(tagIndex=0,index=0){
    console.log(index);
    console.log(tagIndex);
    this.projectCarausal1.tags[tagIndex].image_list.splice(index,1);
    this.toastr.success('Tag Image Deleted Successfully');
    console.log(this.projectCarausal1);
  }

  addNewtag(){
    this.projectCarausal1.tags.push({
      "tag_name" : "New Tag Name",
      "image_list" : ["https://picsum.photos/600/400?random=18","https://picsum.photos/600/400?random=20"]        
    });
    this.toastr.success('New Tag Added Successfully');
  }

  uploadFile(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', 'https://interiorica-backend.onrender.com/'+params.endpoint, true);
      xhr.send(params.formData);
    });
  }

  sendData(params: any): Promise<any> {
    const url = "https://interiorica-backend.onrender.com/"+params.endpoint;

    const headers = {
      'Content-Type': 'application/json'
    };

    return this.http.post(url, params.data, { headers }).toPromise();
  }

  fetchData(params: any): Promise<any> {
    const queryString = Object.keys(params)
      .map(key => key + '=' + encodeURIComponent(params[key]))
      .join('&');
  
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
  
      xhr.open('GET', `${environment.fetchData}?${queryString}`, true);
      xhr.send();
    });
  }
  
  async createFileFromUrl(url: string): Promise<File> {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "File name", { type: "image/png" });
      return file;
    } catch (error) {
      throw new Error(`Failed to create file from URL: ${error}`);
    }
  }

  addCarausalImage(){
    console.log(this.addCarausalImage_toggle);
    this.addCarausalImage_toggle = !this.addCarausalImage_toggle;
  }

  addImage(){
    this.projectCarausal1.image_list.push(this.tempImage);
    this.tempImage = null;
    this.addCarausalImage_toggle = false;
    this.toastr.success('Image Added Successfully');

  }

  deleteCarausalImage(index=0){
    this.projectCarausal1.image_list.splice(index,1);
    this.toastr.success('Image Deleted Successfully');
  }

  deleteYoutubeCard(index=0){
    this.youtubecards.splice(index,1);
    this.toastr.success('Youtube Card Deleted Successfully');
  }

  addNewYoutubeCard(){
    var youtubeCard = {
      "title" : "New Youtube Card",
      "link" : "https://www.youtube.com/watch?v=8F9jXYOH2c0",
      "description" : "New Youtube Card Description"
    }
    this.youtubecards.push(youtubeCard);
    this.toastr.success('New Youtube Card Added Successfully');
  }

  updateUpcommingProjectCard(){
    const formData = new FormData();
    formData.append('projectOneImage', this.upcommingProjectCard.projectOneImage);
    formData.append('projectTwoImage', this.upcommingProjectCard.projectTwoImage);
    formData.append('projectOneTitle', this.upcommingProjectCard.projectOneTitle);
    formData.append('projectTwoTitle', this.upcommingProjectCard.projectTwoTitle);
    formData.append('projectOneDate', this.upcommingProjectCard.projectOneDate);
    formData.append('projectTwoDate', this.upcommingProjectCard.projectTwoDate);
    formData.append('documentName', 'upcomingProject');
    var params = {
      endpoint:"admin/upcoming-project",
      formData:formData
    }
    this.uploadFile(params).then((res:any)=>{
      // if response if 200 then taostr success
      if (res.status == 200){
        this.toastr.success('Updated Upcomming Project successfully');
        this.fetchProjectCardData();
      }
    }).catch((err:any)=>{
      // if response is 400 then taostr error
      console.log(err);
      this.toastr.error('Error while updating Upcomming Project');
    })
  }

  deleteFile(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('DELETE', 'https://interiorica-backend.onrender.com/'+params.endpoint, true);
      xhr.send(params.formData);
    });
  }

  updateFile(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('PUT', 'https://interiorica-backend.onrender.com/'+params.endpoint, true);
      xhr.send(params.formData);
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
