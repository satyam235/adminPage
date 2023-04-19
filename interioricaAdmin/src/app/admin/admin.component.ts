import { Component ,ViewChild, ElementRef} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild('selectFileInput') selectFileInput!: ElementRef;

  // Introduction
  currnetIntroImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s';
  introTitle = new FormControl('',[]);
  introSubtitle = new FormControl('',[]);
  introDescription = new FormControl('',[]);
  introImage :any;
  introForm = new FormGroup({
    introTitle: this.introTitle,
    introSubtitle: this.introSubtitle,
    introDescription: this.introDescription
  });

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

  constructor(private _formBuilder: FormBuilder,) {
    this.setIntroData();
    this.setAboutUsData();
  }
  
  selectedOption: string = 'intro';
  introData : any  = {
    title: "Interiorica",
    subtitle : "Your Space. Reimagined",
    description : "At Interiorica we design residential and commercial spaces that are comfortable, personal and interesting. Great interior design is great art, reflecting who you are in ways you never imagined. Our unique perspective, grounded in both art and architecture, reflects an artist’s eye toward color and materials and a strong sense of space and form. We are artists, we are designers, and we are here to make your space better than you could have ever imagined.    ",
  }
  aboutUsData = this.introData;
  projectsData: any = { /* Projects data object */ };
  


  // Function to set intro data
  setIntroData() {
    this.introForm.controls.introTitle.setValue(this.introData.title);
    this.introForm.controls.introSubtitle.setValue(this.introData.subtitle);
    this.introForm.controls.introDescription.setValue(this.introData.description);
  }

  setAboutUsData() {
    this.aboutUsForm.controls.aboutUsTitle.setValue(this.aboutUsData.title);
    this.aboutUsForm.controls.aboutUsPara1.setValue(this.aboutUsData.subtitle);
    this.aboutUsForm.controls.aboutUsPara2.setValue(this.aboutUsData.description);
  }

  // Function to show form based on selected option
  showForm(option: string) {
    this.selectedOption = option;
  }

  imagesPreview(event:any,type:string) {
    const file = event.target.files[0]; // Get the uploaded file
    // Read file data as data URL
    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (type == 'intro') this.introImage = e.target.result;
      else if (type == 'about_us') this.aboutUsImage = e.target.result;
    };
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
  }

  // Function to update About Us data
  updateAboutUs(data: any) {
    console.log(this.aboutUsForm.value.aboutUsTitle);
    console.log(this.aboutUsForm.value.aboutUsPara1);
    console.log(this.aboutUsForm.value.aboutUsPara2);
    console.log(this.aboutUsImage);
  }

  // Function to update Projects data
  updateProjects(data: any) {
    // Update projectsData object with new data
    this.projectsData = { ...this.projectsData, ...data };
  }

}
