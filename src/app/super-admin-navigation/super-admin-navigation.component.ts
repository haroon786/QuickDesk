import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { faEdit ,faTicketAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-super-admin-navigation',
  templateUrl: './super-admin-navigation.component.html',
  styleUrls: ['./super-admin-navigation.component.css']
})
export class SuperAdminNavigationComponent {

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  
  edit=faEdit
  ticket=faTicketAlt
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
