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
  defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR11dbvjijhPrRPlnz-gmIREmQi67ShE2lD7_KcjB-IrQ&s';
  introTitle = new FormControl('',[]);
  introSubtitle = new FormControl('',[]);
  introDescription = new FormControl('',[]);
  introImage :any;
  introForm = new FormGroup({
    introTitle: this.introTitle,
    introSubtitle: this.introSubtitle,
    introDescription: this.introDescription
  });
  constructor(private _formBuilder: FormBuilder,) {
    this.setIntroData();
  }
  
  selectedOption: string = 'intro';
  introData : any  = {
    title: "Interiorica",
    subtitle : "Your Space. Reimagined",
    description : "At Interiorica we design residential and commercial spaces that are comfortable, personal and interesting. Great interior design is great art, reflecting who you are in ways you never imagined. Our unique perspective, grounded in both art and architecture, reflects an artist’s eye toward color and materials and a strong sense of space and form. We are artists, we are designers, and we are here to make your space better than you could have ever imagined.    ",
  }
  updatedIntrotitle : any;
  updatedIntrosubtitle : any;
  updatedIntrodescription : any; 
  aboutUsData: any = { /* About Us data object */ };
  projectsData: any = { /* Projects data object */ };

  // Function to set intro data
  setIntroData() {
    this.introForm.controls.introTitle.setValue(this.introData.title);
    this.introForm.controls.introSubtitle.setValue(this.introData.subtitle);
    this.introForm.controls.introDescription.setValue(this.introData.description);
  }
  // Function to show form based on selected option
  showForm(option: string) {
    this.selectedOption = option;
  }

  imagesPreview(event:any) {
    const file = event.target.files[0]; // Get the uploaded file
    // Read file data as data URL
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.introImage = e.target.result;
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
    // Update aboutUsData object with new data
    this.aboutUsData = { ...this.aboutUsData, ...data };
  }

  // Function to update Projects data
  updateProjects(data: any) {
    // Update projectsData object with new data
    this.projectsData = { ...this.projectsData, ...data };
  }

}
