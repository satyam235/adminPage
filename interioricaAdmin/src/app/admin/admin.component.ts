import { Component ,ViewChild, ElementRef} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from "../services/admin.service";
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  @ViewChild('selectFileInput') selectFileInput!: ElementRef;

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
  selectedReviewOption = "";
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

  // Reviews
  reviewList = [
    {
      "id":0,
      "client_name" : "John Doe",
      "review" : "Hey there, I am using this template right now to build my website. I must say the customer support is excellent. Keep up the good work guys!",
      "client_image" : "https://picsum.photos/600/400?random=1"
    },
    {
      "id":1,
      "client_name" : "John Doe",
      "review" : "Hey there, I must say the customer support is excellent. Keep up the good work guys!",
      "client_image" : "https://picsum.photos/600/400?random=2"
    },
    {
      "id":2,
      "client_name" : "John Doe",
      "review" : "Hey there, I am using this template right now to build my website !!",
      "client_image" : "https://picsum.photos/600/400?random=3"
    }
  ]
  newReview = {
    "id":0,
    "client_name" : "",
    "review" : "",
    "client_image" : ""
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
  constructor(private _formBuilder: FormBuilder,private toastr: ToastrService,private adminService: AdminService,) {
    this.fetchIntroData();
    this.fetchAboutUsData();
    this.setProjectsData();
    this.setReviewData();
    this.setUpcommingProjectsData();
    this.setContactUsData();
    this.fetchResidentialDesignData();
    this.fetchCommercialDesignData();
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
  


  // Function to set intro data
  fetchIntroData() {
    this.introForm.controls.introTitle.setValue(this.introData.title);
    this.introForm.controls.introSubtitle.setValue(this.introData.subtitle);
    this.introForm.controls.introDescription.setValue(this.introData.description);
  }

  fetchAboutUsData() {
    this.aboutUsForm.controls.aboutUsTitle.setValue(this.aboutUsData.title);
    this.aboutUsForm.controls.aboutUsPara1.setValue(this.aboutUsData.subtitle);
    this.aboutUsForm.controls.aboutUsPara2.setValue(this.aboutUsData.description);
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
    this.projectCarausal1 = data;
    console.log(this.projectCarausal1);
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
    this.projectCarausal1 = data;
    console.log(this.projectCarausal1);
  }

  setProjectsData() {
    this.projectForm.controls.projectTitle.setValue(this.projectsData.title);
    this.projectForm.controls.projectSubtitle.setValue(this.projectsData.subtitle);
    this.projectForm.controls.projectDescription.setValue(this.projectsData.description);
  }

  setReviewData() {
    this.reviewForm.controls.reviewTitle.setValue(this.reviewData.title);
    this.reviewForm.controls.reviewSubtitle.setValue(this.reviewData.subtitle);
    this.reviewForm.controls.reviewDescription.setValue(this.reviewData.description);
  }

  setUpcommingProjectsData() {
    this.upcommingProjectList.minor_projects =  ['https://picsum.photos/600/400?random=1','https://picsum.photos/600/400?random=2','https://picsum.photos/600/400?random=3','https://picsum.photos/600/400?random=4']
    this.upcommingProjectList.major_projects = 'https://picsum.photos/600/400?random=5'
  }

  setContactUsData() {
    this.contactUsForm.controls.contactUsEmail.setValue('satyam@gmail.com');
    this.contactUsForm.controls.contactUsPhone.setValue('1234567890');
    this.contactUsForm.controls.contactUsAddress.setValue('123, ABC Street, XYZ City, 123456');
  }

  // Function to show form based on selected option
  showForm(option: string) {
    this.selectedOption = option;
  }

  imagesPreview(event:any,type:string,id=1,subtype='',subtype_2 ='',id_2=0,id_3=0) {
    const file = event.target.files[0]; 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (type == 'intro') this.introImage = e.target.result;
      else if (type == 'about_us') this.aboutUsImage = e.target.result;
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
        if(subtype == 'image_list'){
          this.projectCarausal1.image_list[id] = e.target.result;
        }
        else if(subtype == 'tags'){
          if(subtype_2 == 'image_list'){
            this.projectCarausal1.tags[id].image_list[id_2] = e.target.result;
          }
          else if(subtype_2 == 'addImage'){
            this.projectCarausal1.tags[id].image_list.push(e.target.result);
          }
        }
     };
    }
    reader.readAsDataURL(file);
    this.selectFileInput.nativeElement.value = null; 
  
}
  // Function to update Intro data
  updateIntro() {
    // Update introData object with new data
    console.log(this.introForm.value.introTitle);
    console.log(this.introForm.value.introSubtitle);
    console.log(this.introForm.value.introDescription);
    console.log(this.introImage);
    // API call to update introData
    this.toastr.success('Updated intro successfully');
  }

  // Function to update About Us data
  updateAboutUs(data: any) {
    console.log(this.aboutUsForm.value.aboutUsTitle);
    console.log(this.aboutUsForm.value.aboutUsPara1);
    console.log(this.aboutUsForm.value.aboutUsPara2);
    console.log(this.aboutUsImage);
    this.toastr.success('Updated about us successfully');
  }

  // Function to update Projects data
  updateProjects() {
    console.log(this.projectForm.value.projectTitle);
    console.log(this.projectForm.value.projectSubtitle);
    console.log(this.projectForm.value.projectDescription);
    console.log(this.updatedProjectUrlList);
    this.toastr.success('Updated projects successfully');
  }

  updateRealLifeReviews() {
    console.log(this.reviewForm.value.reviewTitle);
    console.log(this.reviewForm.value.reviewSubtitle);
    console.log(this.reviewForm.value.reviewDescription);
    console.log(this.updatedReviewBackgroundImage);
    this.toastr.success('Updated real life reviews successfully');
  }

  updateReviews() {
    console.log(this.reviewList);
    // api call to update an exising review
    this.toastr.success('Review Updated Successfully');
  }

  deleteReview(id: number) {
    var index = this.reviewList.findIndex(x => x.id == id);
    this.reviewList.splice(index,1);
    // api call to delete a review
    this.toastr.success('Review deleted Successfully');
  }

  switchReviewTab(type = 'addReview'){
    this.selectedReviewOption = type;
  }

  addReview() {
    var index = this.reviewList.length + 1;
    this.newReview.id = index;
    this.reviewList.push(this.newReview);
    // APi call to add a review
    this.toastr.success('Review Added Successfully');
  }

  updateUpcommingProjects() {
    console.log(this.upcommingProjectList);
    this.toastr.success('Upcomming Projects Updated Successfully');
  }

  updateContactUs() {
    console.log(this.contactUsForm.value.contactUsEmail);
    console.log(this.contactUsForm.value.contactUsPhone);
    console.log(this.contactUsForm.value.contactUsAddress);
    this.toastr.success('Contact Us Updated Successfully');
  }

  updateProjectsDisplay(type:string) {
    if(type == 'commercial_design'){
      console.log("commercial_design");
      console.log(this.projectCarausal1);
      this.toastr.success('Commercial Design Section Updated Successfully');
    }
    else if(type == 'residential_design'){
      console.log("residential_design");
      console.log(this.projectCarausal1);
      this.toastr.success('Residential Design Section Updated Successfully');
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

}
