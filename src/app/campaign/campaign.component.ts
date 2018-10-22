import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
const emailContent: string = `
Hi,
Alan tires is offering a flat 20% discount for winter tire products. Discount is applicable across leading brands including Pirelli, Bridgestone, CEAT, Yokohoma. Visit our website to learn more.
Visit our stores between 20th October to 31st October 2018 to avail the discount.
Regards,
Alan`;

const emailHtml: string = `<p>Hi,</p>

<p>Alan tires is offering a flat 20% discount for winter tire products. Discount is applicable across leading brands including Pirelli, Bridgestone, CEAT, Yokohoma. <br/>
Visit our <a href="http://yell.com" target="_blank">website</a> to learn more.</p>

<p>Visit our stores between 20th October to 31st October 2018 to avail the discount.</p>

<p>Regards, Alan</p>

<p>Click <a href="http://yell.com" target="_blank">here</a> to opt out of mailing list for promotions and sales.</p>`;

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  selectedRegions: string[] = [];
  constructor(private userService: UserService, private http: Http) { }
  users: User[] = [];
  selectedList: number = 0;
  // This property will be bound to checkbox in table header
  allItemsSelected: boolean = false;
  selectedVehicleYear: number[] = [];
  selectedVehicleMake: string[] = [];
  selectedVehicleModel: string[] = [];
  campaignType: string;
  socialMediaPlatform: string;
  campaignTemplate: string;
  campaignFollowUpTemplate: string;
  followUpEmailCounter: number = 0;
  isEmailReceived: string = "false";
  selectedStep: number;
  emailSubject: string;
  emailBody: string;
  testEmail: string = 'alantiredemo@outlook.com';
  uploadPickerCheck: string;
  fbPostCaption: string;
  //preview_img_urls: FileReader[] = [];
  img_url: FileReader;
  str_img: string;



  ngOnInit() {
    this.userService.getAdvantageData().subscribe((data: User[]) => this.users = data);
    this.selectedStep = 0;
    this.campaignType = 'email';
    this.campaignTemplate = 'blank';
    this.uploadPickerCheck = "N";
  }

  onItemChange(value: string) {
    console.log(value);
    if (value != 'Please Select' && this.selectedRegions.indexOf(value) === -1) {
      this.selectedRegions.push(value);
      this.users.filter(user => user.customerAddress === value).forEach(element => {
        element.isChecked = true;
      });
      console.log("sdasda " + this.users.filter(user => user.customerAddress === value).length);
    }
    this.selectedList = this.getSelectedUsersCount();
    console.log(this.selectedRegions.length);
  }

  deleteItem(i) {
    console.log(this.selectedRegions[i]);
    this.users.filter(user => user.customerAddress === this.selectedRegions[i]).forEach(element => {
      element.isChecked = false;
    });
    this.selectedList = this.getSelectedUsersCount();
    this.selectedRegions.splice(i, 1);
  }


  checked(e, checkbox: string) {
    console.log("checked " + checkbox);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].carSize === checkbox) {
        this.users[i].isChecked = e.target.checked;
      }
    }
    this.selectedList = this.getSelectedUsersCount();
  }

  // This executes when entity in table is checked
  selectItem() {
    console.log('sad' + this.users[0].isChecked);
    console.log('entered');
    // If any entity is not checked, then uncheck the "allItemsSelected" checkbox
    this.selectedList = this.getSelectedUsersCount();
    for (let i = 0; i < this.users.length; i++) {
      if (!this.users[i].isChecked) {
        this.allItemsSelected = false;
        return;
      }
    }
    //If not the check the "allItemsSelected" checkbox
    this.allItemsSelected = true;
  }

  // This executes when checkbox in table header is checked
  selectAll() {
    console.log('entered all');
    // Loop through all the entities and set their isChecked property
    for (let i = 0; i < this.users.length; i++) {
      this.users[i].isChecked = this.allItemsSelected;
    }
    this.selectedList = this.getSelectedUsersCount();
  }

  getSelectedUsersCount() {
    let result = this.users.filter(p => p.isChecked === true);
    return result.length;
  }

  vehicleYear(input: string) {
    console.log(input);
    let value = parseInt(input);
    if (input != 'Select Year' && this.selectedVehicleYear.indexOf(value) === -1) {
      this.selectedVehicleYear.push(value);
      this.users.filter(user => user.carYear === value).forEach(element => {
        if (element.carYear === value) {
          element.isChecked = true;
        }
      });
      console.log("sdasda " + this.users.filter(user => user.carYear === value).length);
    }
    this.selectedList = this.getSelectedUsersCount();
    console.log(this.selectedVehicleYear.length);
  }

  deleteYear(i: number) {
    console.log(this.selectedVehicleYear[i]);
    this.users.filter(user => user.carYear === this.selectedVehicleYear[i]).forEach(element => {
      element.isChecked = false;
    });
    this.selectedList = this.getSelectedUsersCount();
    this.selectedVehicleYear.splice(i, 1);
  }

  vehicleMake(value: string) {
    console.log(parseInt(value));
    if (value != 'Select Year' && this.selectedVehicleMake.indexOf(value) === -1) {
      this.selectedVehicleMake.push(value);
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].carMake === value) {
          this.users[i].isChecked = true;
        }
      }
      console.log("sdasda " + this.users.filter(user => user.carMake === value).length);
    }
    this.selectedList = this.getSelectedUsersCount();
    console.log(this.selectedVehicleMake.length);
  }

  deleteMake(i) {
    console.log(this.selectedVehicleMake[i]);
    this.users.filter(user => user.carMake === this.selectedVehicleMake[i]).forEach(element => {
      element.isChecked = false;
    });
    this.selectedList = this.getSelectedUsersCount();
    this.selectedVehicleMake.splice(i, 1);
  }

  vehicleModel(value: string) {
    console.log(value);
    if (value != 'Select Year' && this.selectedVehicleModel.indexOf(value) === -1) {
      this.selectedVehicleModel.push(value);
      this.users.filter(user => user.carModel === value).forEach(element => {
        if (element.carModel === value) {
          element.isChecked = true;
        }
      });
      console.log("sdasda " + this.users.filter(user => user.carModel === value).length);
    }
    this.selectedList = this.getSelectedUsersCount();
    console.log(this.selectedVehicleModel.length);
  }

  deleteModel(i) {
    console.log(this.selectedVehicleModel[i]);
    this.users.filter(user => user.carModel === this.selectedVehicleModel[i]).forEach(element => {
      element.isChecked = false;
    });
    this.selectedList = this.getSelectedUsersCount();
    this.selectedVehicleModel.splice(i, 1);
  }

  isButtonDisabled() {
    if (this.isEmailReceived === 'true')
      return false;
    return true;
  }

  templateClicked(template) {
    this.campaignTemplate = template;
    if (template === 'blank') {
      this.emailSubject = null;
      this.emailBody = null;
    } if (template === 'oneColumn') {
      this.emailSubject = 'Campaign Email!!!';
      this.emailBody = emailContent;
    }
  }

  campaignTypeClicked(campaignType, socialMediaPlatform) {
    this.campaignType = campaignType;
    this.socialMediaPlatform = socialMediaPlatform;
    if (campaignType === 'socialMedia') {

    }
  }


  sendEmail() {
    console.log("inside if");
    console.log("email body" + emailHtml);
    console.log("email body" + this.emailSubject);
    console.log("email body" + this.testEmail);
    this.userService.sendEmail(this.emailSubject, emailHtml, this.testEmail);
  }

  public convertFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.img_url = (<FileReader>event.target).result;
        this.str_img = this.img_url.toString().split(',')[1];
        console.log("str_img: " + this.str_img);
        this.uploadPickerCheck = "Y";
      }
      reader.readAsDataURL(event.target.files[0]);

    }


  };

  public pad2(n) { return n < 10 ? '0' + n : n }

  public postToFBWebService() {

    var timestamp = new Date();

    var strTimestamp = timestamp.getFullYear().toString() + this.pad2(timestamp.getMonth() + 1) + this.pad2(timestamp.getDate()) + this.pad2(timestamp.getHours()) + this.pad2(timestamp.getMinutes()) + this.pad2(timestamp.getSeconds()) + this.pad2(timestamp.getMilliseconds());

    var body = '{' +
      '"socialmediadata":{' +
      '"facebookid":"e@mail.com",' +
      '"whatsappid":"999999999",' +
      '"googleplusid":"google@googleplus.com"' +
      '},' +
      '"media":{' +
      '"caption":"' + this.fbPostCaption + '",' +
      '"image":"' + this.str_img + '"' +
      '},' +
      '"marketingformdata":{' +
      '"Favplayer":"xxx",' +
      '"gender":"M",' +
      '"age":"01-01-1990",' +
      '"Location":"IND",' +
      '"Team":"A",' +
      '"seatnumber":"Q"' +
      '},' +
      '"uniqueidentifiers":{' +
      '"timestamp":"' + strTimestamp + '",' +
      '"gameid":"1",' +
      '"deviceid":"crm-yell"' +
      '}' +
      '}'

    console.log("posting JSON :" + body);
    const url: string = "http://52.90.29.222:9001/input";

    const headers = new Headers({ "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" });
    const options = new RequestOptions({ headers });
    return this.http.post(url, body, options).subscribe();

  }

}
