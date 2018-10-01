import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  selectedRegions: any = [];
  constructor(private userService: UserService) { }
  users: User[] = [];
  selectedList: number = 0;

  ngOnInit() {
    this.userService.getAdvantageData().subscribe((data: User[]) => this.users = data);
  }

  onItemChange(value: string) {
    console.log(value);
    if (value != 'Please Select' && this.selectedRegions.indexOf(value) === -1) {
      this.selectedRegions.push(value);
    }
    console.log(this.selectedRegions.length);
  }

  deleteItem(i) {
    this.selectedRegions.splice(i, 1);
  }

  // This property will be bound to checkbox in table header
  allItemsSelected: boolean = false;

  // This executes when entity in table is checked
  selectItem() {
    console.log('sad' + this.users[0].isChecked);
    console.log('entered');
    // If any entity is not checked, then uncheck the "allItemsSelected" checkbox
    for (var i = 0; i < this.users.length; i++) {
      if (!this.users[i].isChecked) {
        this.allItemsSelected = false;
        return;
      }
    }
    //If not the check the "allItemsSelected" checkbox
    this.allItemsSelected = true;
    this.selectedList = this.getSelectedUsersCount();
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



}
