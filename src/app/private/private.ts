import { Component } from '@angular/core';

@Component({
  selector: 'app-private',
  imports: [],
  templateUrl: './private.html',
  styleUrl: './private.css',
})
export class Private {
     private employeeName: string='suganthi';
     private getWelcomeMessage(): string{
      return 'welcome,' +this.employeeName + "!";

}
get employee():string{
  return this.employeeName;
}

get WelcomeMessage() : string{
  return this.getWelcomeMessage();
}
}
