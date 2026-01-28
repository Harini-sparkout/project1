import{Component} from '@angular/core';
import { Base } from '../base/base';
@Component({
  selector:'app-child',
  standalone:true,
  templateUrl:'./child.html'
})
export class Child extends Base{
        ShowDetails() : string{
          return "child can see:" + this.message + "," +this.items.join(',');
        }
}
