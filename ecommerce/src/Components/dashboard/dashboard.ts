import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/iuser';
import { Users } from '../../Services/users';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard  implements OnInit{
  object=Object;
  users:Iuser[]=[];
  totalUsers: number = 0;
cities: { name: string, count: number }[] = [];
  constructor(private userService: Users,    private cdr: ChangeDetectorRef){
  
  }
  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
            this.users = data;
            this.totalUsers=data.length;
            this.calculateCityStats(data);
            this.cdr.detectChanges();
        }); }

deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
        this.users = this.users.filter(u => u.id !== id);
        this.totalUsers = this.users.length;
        this.calculateCityStats(this.users);
        this.cdr.detectChanges();
    });
}
calculateCityStats(users: Iuser[]) {
    const counts: { [key: string]: number } = {};
    users.forEach(u => {
        const city = u.address.split(',').pop()?.trim() || 'Unknown';
        counts[city] = (counts[city] || 0) + 1;
    });
    this.cities = Object.keys(counts).map(city => ({
        name: city,
        count: counts[city]
    }));
}}
